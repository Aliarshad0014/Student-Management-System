import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Landingpage from "./pages/Landingpage"
import Login from "./pages/Login"
import Departments from './pages/Departmentpage';
import Programs from './pages/Programs';
import Courses from './pages/Course';
import StudentManagement from './pages/Studentmanagment';
import StaffManagement from './pages/Staffmanagment';
import StudentProfile from './pages/Studentprofile';
import StaffProfile from './pages/Staffprofile';
import AdminPage from './pages/admin';
import Register from './pages/Register';
import { useState, useEffect } from 'react';
import AddCourses from './pages/addCourses';
import AddDepartments from './pages/addDepartments';
import AddPrograms from './pages/addProgram';
import AddStudent from './pages/addStudent';
import AddStaff from './pages/addStaff';
import UpdateCourse from './pages/updateCourses';
import UpdateDepartment from './pages/updateDepartment';
import UpdateProgram from './pages/updateProgram';
import UpdateStaff from './pages/updateStaff';
import UpdateStudent from './pages/updateStudent';
import AddSalary from './pages/addSalary';
import UpdateSalary from './pages/updateSalary';
import UpdateFee from './pages/updateFee';
import AddFee from './pages/addFee';
import AllPrograms from './pages/AllPrograms';
import AllStudents from './pages/AllStudents';
import AllCourses from './pages/AllCourses';

function App() {
  const [studentInCourses, setstudentInCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [staff, setStaff] = useState([]);
  const [students, setStudents] = useState([]);
  const [fee, setFee] = useState([]);
  const [salary, setSalary] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/studentincourse/all', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setstudentInCourses(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching student in studentincourses data:', error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/course/all', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCourses(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching student in courses data:', error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/department/all', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setDepartments(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching student in department data:', error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/document/all', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setDocuments(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching student in document data:', error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/program/all', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPrograms(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching student in program data:', error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/staff/all', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setStaff(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching student in staff data:', error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/student/all', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setStudents(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching student in student data:', error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/salary/all', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSalary(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching student in salary data:', error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/fee/all', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setFee(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching student in fee data:', error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className='App'>
        <Header />
        <div className="App-body">
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/departments" element={<Departments departments={departments} />} />
            <Route path="/programs/:department_id" element={<Programs programs={programs} />} />
            <Route path="/programs/" element={<AllPrograms programs={programs} />} />
            <Route path="/courses/:program_id" element={<Courses courses={courses} />} />
            <Route path="/courses/" element={<AllCourses courses={courses} />} />
            <Route path="/student-management/:course_id" element={<StudentManagement students={students} studentInCourses={studentInCourses}/>} />
            <Route path="/student-management/" element={<AllStudents students={students}/>} />
            <Route path="/staff-management" element={<StaffManagement staff={staff} />} />
            <Route path="/student-profile/:id" element={<StudentProfile fee={fee} documents={documents}/>} />
            <Route path="/staff-profile/:id" element={<StaffProfile staff={staff} salary={salary} documents={documents}/>} />
            <Route path="/admin" element={<AdminPage courses={courses} departments={departments} documents={documents} programs={programs} staff={staff} students={students} fee={fee} salary={salary}/>} />
            <Route path="/update-course/:id" element={<UpdateCourse />} />
            <Route path="/update-department/:id" element={<UpdateDepartment />} />
            <Route path="/update-program/:id" element={<UpdateProgram />} />
            <Route path="/update-staff/:id" element={<UpdateStaff />} />
            <Route path="/update-student/:id" element={<UpdateStudent />} />
            <Route path="/update-salary/:id" element={<UpdateSalary />} />
            <Route path="/update-fee/:id" element={<UpdateFee />} />
            <Route path="/add-courses" element={<AddCourses />} />
            <Route path="/add-departments" element={<AddDepartments />} />
            <Route path="/add-program" element={<AddPrograms />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/add-staff" element={<AddStaff />} />
            <Route path="/add-salary" element={<AddSalary />} />
            <Route path="/add-fee" element={<AddFee />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import FinancePage from './pages/Financepage';
// {/* <FinancePage/> */} kicked out page