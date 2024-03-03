const express = require("express")
const app = express();
const router = require("./routers/campus-router")
const connectDb = require("./utils/db")

app.use(express.json())

app.use("/api/campus", router)

// app.get("/", (req,res) =>{
//     res.status(200).send("welcome gudsfgeays")

// });

const PORT = 5000;
connectDb().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server running at: http://localhost:${PORT}`);
    })
    
})