import React, { useState } from 'react';
import CoursesTable from '../components/coursestable';
import DepartmentTable from '../components/Departmenttable';
import ProgramTable from '../components/Programtable';
import StaffTable from '../components/Stafftable';
import StudentsTable from '../components/Studenttable';
import FeeTable from '../components/Feetable';
import SalaryTable from '../components/Salarytable';
import StudentcoursesTable from '../components/studentincoursestable';

// AdminPage component
const AdminPage = ({courses, departments, programs, staff, students, fee, salary, studentInCourses }) => {
  // Sample data for the system
  const systemData = [ 'Courses', 'Departments', 'Programs', 'Staff', 'Student', 'Fee', 'Salary', "Student Courses"];

  // State to store the selected item
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item click
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Render the selected table based on the selectedItem
  const renderTable = () => {
    switch (selectedItem) {
      case 'Courses':
        return <CoursesTable courses={courses} />;
      case 'Departments':
        return <DepartmentTable departments={departments}/>;
      case 'Programs':
        return <ProgramTable programs={programs}/>;
      case 'Staff':
        return <StaffTable staff={staff}/>;
      case 'Student':
        return <StudentsTable students={students}/>;
        case 'Fee':
        return <FeeTable fees={fee}/>;
        case 'Salary':
        return <SalaryTable salaries={salary}/>;
        case 'Student Courses':
          return <StudentcoursesTable studentInCourses={studentInCourses}/>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-left">
      {/* Admin Panel Heading */}
      <h1 className="text-2xl font-bold mt-4 ml-10">Admin Panel</h1>

      {/* Main Content with border */}
      <div className="flex ml-10 mr-10 h-5/6 border border-black bg-purple-100 mt-4 mb-10">
        {/* Sidebar */}
        <div className="w-1/4 p-4">
          <h2 className="text-lg font-semibold mb-4">System Data</h2>
          <ul>
            {systemData.map((item, index) => (
              <li key={index} className="cursor-pointer text-blue-600 hover:underline mb-2 py-4" onClick={() => handleItemClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Vertical Line */}
        <div className="border-l border-black"></div>

        {/* Main Section */}
        <div className="flex-grow p-4 overflow-auto">
          {selectedItem ? (
            <div>
              <h2 className="text-lg font-semibold">{selectedItem}</h2>
              {renderTable()}
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold mb-4">Select an item to view details</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;