const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
require('dotenv').config()
const cookieParser = require('cookie-parser')

app.use(cors({origin: 'http://localhost:3000',credentials:true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
require("./config/mongoose.config");
require("./routes/product.routes")(app);
require("./routes/Cart.routes")(app);
require("./routes/user.routes")(app);
app.listen(PORT, () => {
  console.log(`Listening at Port ${PORT}`);
});