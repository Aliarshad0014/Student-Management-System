import './App.css';
import { BrowserRouter as Router, Route, Routes, json } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Campuses from './pages/Campusespage';
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
import UpdatePage from './pages/updatePage';
import AddPage from './pages/addPage';
import Register from './pages/Register';
import { useState, useEffect } from 'react';

function App() {
  const [studentInCourses, setstudentInCourses] = useState([]);
  const [campuses, setCampuses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [staff, setStaff] = useState([]);
  const [students, setStudents] = useState([]);

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
        console.error('Error fetching student in courses data:', error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/campus/all', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCampuses(data);
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
        console.error('Error fetching student in courses data:', error.message);
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
        console.error('Error fetching student in courses data:', error.message);
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
        console.error('Error fetching student in courses data:', error.message);
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
        console.error('Error fetching student in courses data:', error.message);
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
        console.error('Error fetching student in courses data:', error.message);
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
            <Route path="/campuses" element={<Campuses />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/student-management" element={<StudentManagement />} />
            <Route path="/staff-management" element={<StaffManagement />} />
            <Route path="/student-profile" element={<StudentProfile />} />
            <Route path="/staff-profile" element={<StaffProfile />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/update" element={<UpdatePage />} />
            <Route path="/add" element={<AddPage />} />
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