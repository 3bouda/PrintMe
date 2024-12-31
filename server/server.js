const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const authRoutes = require('./routes/auth.routes');
const visitorRoutes = require('./routes/visitor.routes');
const productRoutes = require('./routes/product.routes');
const subscriptionRoutes = require('./routes/subscription.routes');


// Middleware


app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/visitor', visitorRoutes);
app.use('/api/product', productRoutes);
app.use('/api/subscription', subscriptionRoutes);


// Connect to MongoDB
                //mongodb+srv://abdelaliiheb:<db_password>@cluster0.oe0zj5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect('mongodb+srv://abdelaliiheb:abdelaliiheb@cluster0.oe0zj5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
