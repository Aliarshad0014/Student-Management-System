const express = require("express");
const app = express();
const campusRouter = require("./routers/campus-router");
const courseRouter = require("./routers/course-router"); 
const departmentRouter = require("./routers/department-router"); 
const documentRouter = require("./routers/document-router");
const programRouter = require("./routers/program-router"); 
const staffRouter = require("./routers/staff-router"); 
const studentRouter = require("./routers/student-router"); 

const connectDb = require("./utils/db");

app.use(express.json());

// Use the campus router for paths starting with "/api/campus"
app.use("/api/campus", campusRouter);
app.use("/api/course", courseRouter);
app.use("/api/department", departmentRouter);
app.use("/api/document", documentRouter);
app.use("/api/program", programRouter);
app.use("/api/staff", staffRouter);
app.use("/api/student", studentRouter);

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at: http://localhost:${PORT}`);
    });
});
