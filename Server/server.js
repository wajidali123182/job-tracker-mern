require('dotenv').config();
const http = require('http');
const app = require('./src/app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Example MongoDB connection structure (commented out until connection string is provided)
/*
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));
*/

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
