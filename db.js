const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.createConnection(process.env.MONGO_URI)
.on("connected", () => {
    console.log("✅ Database Connected Successfully");
})
.on("error", (err) => {
    console.error("❌ Database Connection Error:", err.message);
})
.on("disconnected", () => {
    console.log("⚠️ Database Disconnected");
});

module.exports = connection;