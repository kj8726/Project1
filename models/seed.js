const mongoose = require("mongoose");
const Destination = require("./destination.js");

mongoose.connect("mongodb://127.0.0.1:27017/sinhgad")
.then(async () => {
    await Destination.insertMany([
  {
    name: "Maldives",
    location: "Indian Ocean",
    price: 70000,
    description: "Tropical paradise with crystal-clear waters and white sandy beaches.",
    image: "/maldives.jpg",
    hotels: ["Soneva Fushi", "Baros Maldives", "The St. Regis Maldives"],
    hotelLinks: [
      "https://soneva.com/resorts/soneva-fushi/",
      "https://www.baros.com/",
      "https://www.marriott.com/hotels/travel/mldxr-the-st-regis-maldives-vommuli-resort/"
    ]
  },
  {
    name: "New York",
    location: "USA",
    price: 55000,
    description: "The city that never sleeps with endless attractions and culture.",
    image: "/newyork.jpg",
    hotels: ["The Plaza", "The Ritz-Carlton Central Park", "The Standard High Line"],
    hotelLinks: [
      "https://www.theplazany.com/",
      "https://www.ritzcarlton.com/en/hotels/new-york/central-park",
      "https://www.standardhotels.com/new-york/properties/high-line"
    ]
  },
  {
    name: "Dubai",
    location: "UAE",
    price: 60000,
    description: "A city of luxury, shopping, and futuristic architecture.",
    image: "/dubai.jpg",
    hotels: ["Burj Al Arab", "Atlantis The Palm", "Armani Hotel Dubai"],
    hotelLinks: [
      "https://www.jumeirah.com/en/stay/dubai/burj-al-arab-jumeirah",
      "https://www.atlantis.com/dubai",
      "https://www.armanihoteldubai.com/"
    ]
  },
  {
    name: "Mumbai",
    location: "India",
    price: 25000,
    description: "The city that never sleeps, bustling with culture and history.",
    image: "/mumbai.jpg",
    hotels: ["The Taj Mahal Palace", "The Oberoi Mumbai", "Trident Nariman Point"],
    hotelLinks: [
      "https://www.tajhotels.com/en-in/taj/taj-mahal-palace-mumbai/",
      "https://www.oberoihotels.com/hotels-in-mumbai/",
      "https://www.tridenthotels.com/hotels-in-mumbai-nariman-point"
    ]
  },
  {
    name: "Delhi",
    location: "India",
    price: 22000,
    description: "Where history meets hustle; vibrant and full of life.",
    image: "/delhi.jpg",
    hotels: ["The Leela Palace", "ITC Maurya", "Taj Palace Delhi"],
    hotelLinks: [
      "https://www.theleela.com/en_us/hotels-in-delhi/the-leela-palace-new-delhi/",
      "https://www.itchotels.in/hotels/new-delhi/itc-maurya.html",
      "https://taj.tajhotels.com/en-in/taj/taj-palace-new-delhi/"
    ]
  },
  {
    name: "London",
    location: "UK",
    price: 48000,
    description: "Modern city with an ancient heart, rich in history and culture.",
    image: "/london.jpg",
    hotels: ["The Savoy", "The Ritz London", "Claridge's"],
    hotelLinks: [
      "https://www.thesavoylondon.com/",
      "https://www.theritzlondon.com/",
      "https://www.claridges.co.uk/"
    ]
  },
  {
    name: "Tokyo",
    location: "Japan",
    price: 52000,
    description: "Blend of tradition and futuristic innovation.",
    image: "tokyo.jpg",
    hotels: ["Park Hyatt Tokyo", "The Ritz-Carlton Tokyo", "Mandarin Oriental Tokyo"],
    hotelLinks: [
      "https://www.hyatt.com/en-US/hotel/japan/park-hyatt-tokyo/tyoph",
      "https://www.ritzcarlton.com/en/hotels/japan/tokyo",
      "https://www.mandarinoriental.com/tokyo"
    ]
  },
  {
    name: "Rome",
    location: "Italy",
    price: 47000,
    description: "City of ancient ruins and vibrant culture.",
    image: "/rome.jpg",
    hotels: ["Hotel Hassler Roma", "Hotel de Russie", "Rome Cavalieri Waldorf Astoria"],
    hotelLinks: [
      "https://www.hotelhasslerroma.com/",
      "https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/",
      "https://www.waldorfastoria3.hilton.com/en/hotels/italy/rome-rome-cavalieri-a-waldorf-astoria-hotel-ROMHIHI/index.html"
    ]
  },
  {
    name: "Sydney",
    location: "Australia",
    price: 53000,
    description: "Harbor city with stunning beaches and iconic landmarks.",
    image: "/sydney.jpg",
    hotels: ["Park Hyatt Sydney", "The Langham Sydney", "Shangri-La Hotel"],
    hotelLinks: [
      "https://www.hyatt.com/en-US/hotel/australia/park-hyatt-sydney/sydph",
      "https://www.langhamhotels.com/en/the-langham/sydney/",
      "https://www.shangri-la.com/sydney/shangrila/"
    ]
  },
  {
    name: "Cape Town",
    location: "South Africa",
    price: 40000,
    description: "Coastal city known for stunning landscapes and rich culture.",
    image: "/capetown.jpg",
    hotels: ["One&Only Cape Town", "The Silo Hotel", "Belmond Mount Nelson Hotel"],
    hotelLinks: [
      "https://www.oneandonlyresorts.com/cape-town",
      "https://www.theroyalportfolio.com/the-silo-hotel",
      "https://www.belmond.com/hotels/africa/south-africa/cape-town/belmond-mount-nelson-hotel/"
    ]
  }
]);

    console.log("Destinations added!");
    mongoose.connection.close();
});
