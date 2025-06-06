// backend/models/Product.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
       "Electronics", 
"Software Development",  
"Cybersecurity",  
"Cloud Computing",  
"AI & Machine Learning",  
"Data Analytics",  
"Networking",  
"Hardware & Peripherals",  
"IoT & Smart Devices",  
"IT Services",  
"Blockchain",  
"DevOps & Automation",  
"Enterprise Solutions"  
    ],
    default: 'Vitamins',
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative'],
  },
  costPrice: {
    type: Number,
    min: [0, 'Cost price cannot be negative'],
    default: 0,
  },
  stock: {
    type: Number,
    required: [true, 'Stock quantity is required'],
    min: [0, 'Stock cannot be negative'],
  },
  weight: {
    type: Number,
    min: [0, 'Weight cannot be negative'],
    default: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  published: {
    type: Boolean,
    default: true,
  },
  images: [{
    type: String,
    default: [],
  }],
  brandName: {
    type: String,
    required: [true, 'Brand name is required'],
  },
  brandLogo: {
    type: String,
  },
  containerType: {
    type: String,
    required: [true, 'Container type is required'],
    enum: ['Glass Bottle', 'Plastic Container', ' Pack', 'Jar', 'Pouch'],
    default: 'Plastic Container',
  },
  productForm: {
    type: String,
    required: [true, 'Product form is required'],
    enum: ['hardware', 'software', 'service', 'solutions', 'firmware'],
    default: 'Capsule',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);