const express =  require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const Hotel = require('./models/hotel.model.js')
const app = express();



app.use(cors());

//api card
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });



app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.send("hello from node API Server mon server !")
})

app.get('/api/hotels', async (req, res) =>{
    try {
        const hotels = await Hotel.find({})
        res.status(200).json(hotels)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})




app.get('/api/hotel/:id', async (req, res) =>{
    try {
        const {id} = req.params;
        const hotel = await Hotel.findById(id)
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// app.post('/api/hotels', (req, res)=>{
//     console.log(req.body);
//     res.send(req.body)
// }) 


app.post('/api/hotels', async (req, res)=>{
    try {
        const hotel = await Hotel.create(req.body);
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}) 


// update a hotel
app.put('/api/hotel/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const hotel = await  Hotel.findByIdAndUpdate(id, req.body)

        if (!hotel) {
            return res.status(404).json({message: "Hotel not found !"})
        }

        const updatedHotel =  await Hotel.findById(id);
        res.status(200).json(updatedHotel);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//delete a hotel 
app.delete('/api/hotel/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const hotel =  await Hotel.findByIdAndDelete(id);

        if (!hotel) {
            return res.status(404).json({message: "Hotel not found !"})
        }

        res.status(200).json({message: "Hotel deleted successfully !"})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


mongoose.connect('mongodb+srv://DIOUF096:lqcdu5565o59YxG@backenddb.fk4wlii.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log("Database Connected!");

    app.listen(8080, () =>{
        console.log('server in running on port 8080');
    })
})
  .catch(() =>{
    console.log("connection failed !");
  });