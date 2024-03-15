
import './App.css';
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
import FinancePage from './pages/Financepage';

function App() {
  return (
    <>
      {/* <Header/>
      <Login/> */}
      <Campuses/>
      {/* <Landingpage /> */}
      {/* <Departments/>
      <Programs/>
      <Courses/>
      <StudentManagement/> */}
      {/* <StaffManagement/> */}
      {/* <StudentProfile/>
      <StaffProfile/>
      <FinancePage/>
      <Footer/> */}
    </>
  );
}
 
export default App;