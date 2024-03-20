import React, { useState } from 'react';
import CampusesTable from '../components/CampusesTable';
import CoursesTable from '../components/coursestable';
import DepartmentTable from '../components/Departmenttable';
import ProgramTable from '../components/Programtable';
import StaffTable from '../components/Stafftable';
import StudentsTable from '../components/Studenttable';

// AdminPage component
const AdminPage = ({ campuses, courses, departments, programs, staff, students }) => {
  // Sample data for the system
  const systemData = ['Campuses', 'Courses', 'Departments', 'Programs', 'Staff', 'Student'];

  // State to store the selected item
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item click
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Render the selected table based on the selectedItem
  const renderTable = () => {
    switch (selectedItem) {
      case 'Campuses':
        return <CampusesTable campuses={campuses} />;
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
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white text-left">
      {/* Admin Panel Heading */}
      <h1 className="text-2xl font-bold m-6 ml-10">Admin Panel</h1>

      {/* Main Content with border */}
      <div className="flex ml-10 mr-10 h-5/6 border border-black bg-purple-100 mt-10 mb-10">
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


{/* <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded ">Add New +</button> */}