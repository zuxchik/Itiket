const express = require("express");
const { connect, version } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

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


const swaggerOptions = {
  swiggerDefintion: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swigger",
      version: "1.0.0",
      description: "API documentation using Swigger"
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"] 
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.get("/", (req, res) => {
  res.send("Hi NodeJs!");
});

const { booking } = require("./booking/booking.Route.js");
app.use("/booking", booking);

const { venue_type } = require("./routes/venue_type.Route.js");
app.use("/venue_type", venue_type);


const { admin } = require("./Admin/Admin.Route.js");
app.use("/AdminChik", admin);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});