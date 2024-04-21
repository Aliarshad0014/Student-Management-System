const express = require("express");
const app = express();
const cors = require("cors");
const courseRouter = require("./routers/course-router"); 
const departmentRouter = require("./routers/department-router"); 
const programRouter = require("./routers/program-router"); 
const staffRouter = require("./routers/staff-router"); 
const studentRouter = require("./routers/student-router"); 
const studentInCourseRouter = require("./routers/studentInCourse-router"); 
const feeRouter = require("./routers/fee-router"); 
const salaryRouter = require("./routers/salary-router"); 


const connectDb = require("./utils/db");

const corsOptions ={
    origin:"http://localhost:3000",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/course", courseRouter);
app.use("/api/department", departmentRouter);
app.use("/api/program", programRouter);
app.use("/api/staff", staffRouter);
app.use("/api/student", studentRouter);
app.use("/api/studentincourse", studentInCourseRouter);
app.use("/api/fee", feeRouter);
app.use("/api/salary", salaryRouter);


const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at: http://localhost:${PORT}`);
    });
});

module.exports = app