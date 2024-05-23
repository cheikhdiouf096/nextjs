"use client";
const express = require('express');
const cors = require("cors");
const app = express();
const port = 3030;


app.use(cors());


app.get('/api/home', (req, res) => {
  res.json({
    Card: [
      {
        id: 1,
        icon: 'faEnvelopeOpen',
        number: 125,
        partie: 'Formulaires',
        text: 'Je ne sais pas quoi mettre',
        background: "#A88ADD",
      },
      {
        id: 2,
        icon: 'faP',
        number: 40,
        partie: 'Messages',
        text: 'Je ne sais pas quoi mettre',
        background: "#0CC2AA",
      },
      {
        id: 3,
        icon: 'faUserFriends',
        number: 600,
        partie: 'Utilisateurs',
        text: 'Je ne sais pas quoi mettre',
        background: "#FCC100",
      },
      {
        id: 4,
        icon: 'faEnvelopeOpen',
        number: 25,
        partie: 'E-mails',
        text: 'Je ne sais pas quoi mettre',
        background: "#F90000",
      },
      {
        id: 5,
        icon: 'faP',
        number: 40,
        partie: 'Hôtels',
        text: 'Je ne sais pas quoi mettre',
        background: "#9C27B0",
      },
      {
        id: 6,
        icon: 'faUserFriends',
        number: 20,
        partie: 'Entités',
        text: 'Je ne sais pas quoi mettre',
        background: "#1565C0",
      }
    ],
  });
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
 






const hotelRoute = require("./routes/hotel.route.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/hotels", hotelRoute); 




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(  
    "mongodb+srv://cheikh096:lqcdu5565@backenddb.nrurtot.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(8080, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });