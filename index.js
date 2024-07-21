const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


app.use(express.json());
app.use(cors());


async function connectToDB() {
  try {
    await connect(process.env.MONGO_URL);
    console.log("MongoDB connection successful");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}
connectToDB();


app.get("/", (req, res) => {
  res.send("Hi NodeJs!");
});

const booking = require("./booking/bookingRoute");
app.use("/booking", booking);

const cart = require("./cart/cartRoute");
app.use("/cart", cart);

const customerCard = require("./customerCard/customerRoute");
app.use("/customerCard", customerCard);

const admin = require("./admin/adminRoute");
app.use("/admin", admin);

// const customerAddress = require("./customerAddress/customerAddressRoute")
// app.use("/customerAddress", customerAddress)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});