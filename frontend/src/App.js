import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
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
import Addstudentincourses from './pages/addstudentincourses';
import AllPrograms from './pages/AllPrograms';
import AllStudents from './pages/AllStudents';
import AllCourses from './pages/AllCourses';

function App() { 
  
  const [studentInCourses, setstudentInCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [staff, setStaff] = useState([]);
  const [students, setStudents] = useState([]);
  const [fee, setFee] = useState([]);
  const [salary, setSalary] = useState([]);

  const [lastActivity, setLastActivity] = useState(Date.now());
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Get login status from localStorage, default to false if not found
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  // Update last activity timestamp on user interaction
  const handleUserActivity = () => {
    setLastActivity(Date.now());
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const inactiveDuration = currentTime - lastActivity;
      const fifteenMinutes = 15 * 60 * 1000; // 15 minutes in milliseconds

      if (inactiveDuration >= fifteenMinutes && isLoggedIn) {
        // Perform logout action
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false'); // Update localStorage
      }
    }, 60000); // Check every Minute

    return () => clearInterval(intervalId);
  }, [lastActivity, isLoggedIn]);

  useEffect(() => {
    const unlisten = () => {
      // Update activity timestamp on user interaction
      window.addEventListener('mousemove', handleUserActivity);
      window.addEventListener('keydown', handleUserActivity);
    };

    unlisten();

    return () => {
      // Clean up event listeners
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, []);

  // Redirect to login page if not logged in
  useEffect(() => {     
    const pathname = window.location.pathname;     
    if (pathname !== '/login' && !isLoggedIn) {       
      window.location.replace('/login');     
    }   
  }, [isLoggedIn]);

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
      } catch (error) {
        console.error('Error fetching student in department data:', error.message);
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
      } catch (error) {
        console.error('Error fetching student in fee data:', error.message);
      }
    };
    fetchData();
  }, []);
  

  return (
    <Router>
      <div className='App'>
      {isLoggedIn && <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
       <div className="App-body">
          <Routes>
            <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} /> 
            <Route path="/" element={<Landingpage />} />
            <Route path="/departments" element={<Departments departments={departments} />} />
            <Route path="/programs/:department_id" element={<Programs programs={programs} />} />
            <Route path="/programs/" element={<AllPrograms programs={programs} />} />
            <Route path="/courses/:program_id" element={<Courses courses={courses} />} />
            <Route path="/courses/" element={<AllCourses courses={courses} />} />
            <Route path="/student-management/:course_id" element={<StudentManagement students={students} studentInCourses={studentInCourses}/>} />
            <Route path="/student-management/" element={<AllStudents students={students}/>} />
            <Route path="/staff-management" element={<StaffManagement staff={staff} />} />
            <Route path="/student-profile/:id" element={<StudentProfile fee={fee}/>} />
            <Route path="/staff-profile/:id" element={<StaffProfile staff={staff} salary={salary}/>} />
            <Route path="/admin" element={<AdminPage courses={courses} departments={departments} programs={programs} staff={staff} students={students} fee={fee} salary={salary} studentInCourses={studentInCourses}/>} />
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
            <Route path="/add-studentincourses" element={<Addstudentincourses/>} />
          </Routes>
        </div>
        {isLoggedIn && <Footer />}
      </div>
    </Router>
  );
}

export default App;
