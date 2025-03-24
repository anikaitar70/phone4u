const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
//const connectDB = require("./config/db");
const compareRoutes = require("./Routes/compareRoutes");
const youtubeRoutes = require("./Routes/youtubeRoutes");
dotenv.config();
//connectDB();

const app = express();
app.use(express.json());
app.use(cors());

//app.use("/api/compare", compareRoutes);

app.use("/api", youtubeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
