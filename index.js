const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Destination = require("./models/destination");
const session = require("express-session");
const { isLoggedIn } = require("./middleware/auth");
const User = require("./models/user");
const Booking = require("./models/booking"); 
require('dotenv').config();
const nodemailer = require('nodemailer');



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Session setup
app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false
}));

// Connect to MongoDB
main()
  .then(() => console.log("Connection successful"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sinhgad");
}

// ----------------- Routes ------------------

// Home
app.get("/", async (req, res) => {
  try {
    const destinations = await Destination.find({}).limit(3); // Fetch 3 popular destinations
    res.render("index", { destinations }); // ✅ Pass destinations to the view
  } catch (err) {
    console.error("Error loading destinations for homepage:", err);
    res.status(500).send("Something went wrong.");
  }
});

// Login
app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/login", (req, res) => {
    const { username, email, password } = req.body;
    if (username && password) {
        req.session.user = { username };
        return res.redirect("/bookings");
    }
    res.send("Invalid login");
});

// Logout
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

// Register
app.get("/register", (req, res) => {
    res.render("register.ejs");
});

app.post("/register", async (req, res) => {
    const { username, password, email } = req.body;

    if (username && password) {
        try {
            const newUser = new User({ username, password, email });
            await newUser.save();
            console.log("User registered:", newUser.username);
            return res.redirect("/login");
        } catch (e) {
            console.log("Error saving user:", e);
            return res.send("Username already exists or error saving user.");
        }
    }

    res.send("Please provide valid username and password");
});

// Destinations
app.get("/destination", async (req, res) => {
    try {
        const destinations = await Destination.find({});
        res.render("destination", { destinations });
    } catch (e) {
        console.log(e);
        res.send("Error loading destinations");
    }
});

// Bookings - View
app.get("/bookings", isLoggedIn, async (req, res) => {
    try {
        const bookings = await Booking.find({});
        res.render("bookings.ejs", {
            user: req.session.user,
            bookings
        });
    } catch (err) {
        console.error("Error fetching bookings:", err);
        res.send("Error loading bookings.");
    }
});

// Bookings - New Form
app.get("/bookings/new", isLoggedIn, (req, res) => {
    res.render("newbooking.ejs", { user: req.session.user });
});

// Bookings - Create
app.post("/bookings", isLoggedIn, async (req, res) => {
  const { destination, date, travelers, notes } = req.body;
  const username = req.session.user.username;

  try {
    const newBooking = new Booking({
      destination,
      date,
      travelers,
      notes,
      username
    });

    await newBooking.save();
    res.redirect("/bookings");
  } catch (err) {
    console.error("Error saving booking:", err);
    res.status(500).send("Error saving booking.");
  }
});


const transporter = nodemailer.createTransport({
  service: 'gmail', // Or 'hotmail', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});


app.get('/contact', (req, res) => {
  res.render('contact');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending mail:', error);
      return res.status(500).send('Something went wrong. Please try again later.');
    }
    console.log('Email sent: ' + info.response);
    res.send('Thanks for contacting us!');
  });
});

app.get('/destination/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const destination = await Destination.findById(id);
    if (!destination) {
      return res.status(404).send("Destination not found");
    }
    res.render('info', { destination });
  } catch (err) {
    console.error("Error loading destination:", err);
    res.status(500).send("Error loading destination");
  }
});



// Start server
app.listen(8080, () => console.log("Server is online"));
