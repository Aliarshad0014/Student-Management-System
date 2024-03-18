import React, { useState } from 'react';

// Campuses table component
const CampusesTable = () => {
  // Sample data for campuses
  const campusesData = [
    { campusId: 1, name: 'Head campus islamabad', location: 'Location 1', contactNumber: '1234567890', manager: 'wajid ali' },
    { campusId: 2, name: 'Campus 2', location: 'Location 2', contactNumber: '9876543210', manager: 'Manager 2' },
    { campusId: 3, name: 'Campus 3', location: 'Location 3', contactNumber: '5678901234', manager: 'Manager 3' },
  ];

  return (
    <table className="table-auto w-full h-full border">
      <thead>
        <tr>
          <th className="px-2 py-2">Campus ID</th>
          <th className="px-2 py-2">Name</th>
          <th className="px-2 py-2">Location</th>
          <th className="px-2 py-2">Contact Number</th>
          <th className="px-2 py-2">Manager</th>
          <th className="px-2 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {campusesData.map((campus, index) => (
          <tr key={index} className=' bg-white'>
            <td className="border px-4 py-2">{campus.campusId}</td>
            <td className="border px-4 py-2">{campus.name}</td>
            <td className="border px-4 py-2">{campus.location}</td>
            <td className="border px-4 py-2">{campus.contactNumber}</td>
            <td className="border px-4 py-2">{campus.manager}</td>
            <td className="border px-4 py-2 text-right">
            <div className="flex justify-around">
                <button className="ml-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded">Update</button>
                <button className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
              </div>
            </td>

          </tr>
        ))}
      </tbody>
    </table>

  );
};

// Courses table component
const CoursesTable = () => {
  // Sample data for courses
  const coursesData = [
    { courseId: 1, programId: 1, name: 'Course 1', credits: 65 },
    { courseId: 2, programId: 2, name: 'Course 2', credits: 65 },
    { courseId: 3, programId: 3, name: 'Course 3', credits: 65 },
  ];

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Course ID</th>
          <th className="px-4 py-2">Program ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Credits</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {coursesData.map((course, index) => (
          <tr key={index} className=' bg-white'>
            <td className="border px-4 py-2">{course.courseId}</td>
            <td className="border px-4 py-2">{course.programId}</td>
            <td className="border px-4 py-2">{course.name}</td>
            <td className="border px-4 py-2">{course.credits}</td>
            <td className="border px-4 py-2">
              <div className="flex justify-around">
                <button className="ml-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded">Update</button>
                <button className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const DepartmentTable = () => {
  // Sample data for courses
  const DepartmentData = [
    { DepartmentId: 1, name: "ali", contactnumber: 'Course 1', headofdepartment: "yes" },
    { DepartmentId: 2, name: "ali", contactnumber: 'Course 2', headofdepartment: "yes" },
    { DepartmentId: 3, name: "ali", contactnumber: 'Course 3', headofdepartment: "yes" },
  ];

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Department Id</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">contactnumber</th>
          <th className="px-4 py-2">headofdepartment</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {DepartmentData.map((department, index) => (
          <tr key={index} className=' bg-white'>
            <td className="border px-4 py-2">{department.DepartmentId}</td>
            <td className="border px-4 py-2">{department.name}</td>
            <td className="border px-4 py-2">{department.contactnumber}</td>
            <td className="border px-4 py-2">{department.headofdepartment}</td>
            <td className="border px-4 py-2">
            <div className="flex justify-around">
                <button className="ml-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded">Update</button>
                <button className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ProgramTable = () => {
  // Sample data for courses
  const ProgramData = [
    { programId: 1, departmenId: 1, name: 'Course 1', awardingbody: "uoh" },
    { programId: 2, departmenId: 2, name: 'Course 2', awardingbody: "uoh" },
    { programId: 3, departmenId: 3, name: 'Course 3', awardingbody: "uoh" },
  ];

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Program ID</th>
          <th className="px-4 py-2">Department ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Awarding Body</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {ProgramData.map((program, index) => (
          <tr key={index} className=' bg-white'>
            <td className="border px-4 py-2">{program.programId}</td>
            <td className="border px-4 py-2">{program.departmenId}</td>
            <td className="border px-4 py-2">{program.awardingbody}</td>
            <td className="border px-4 py-2">{program.name}</td>
            <td className="border px-4 py-2">
            <div className="flex justify-around">
                <button className="ml-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded">Update</button>
                <button className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const StaffTable = () => {
  // Sample data for courses
  const StaffData = [
    { staffId: 1, campusId: 1, departmentId: 1, name: 'Course 1', designation: "hj", email: "sjh", contactnumber: "jkhasd" },
    { staffId: 2, campusId: 2, departmentId: 1, name: 'Course 2', designation: "hj", email: "sjh", contactnumber: "jkhasd" },
    { staffId: 3, campusId: 3, departmentId: 1, name: 'Course 3', designation: "hj", email: "sjh", contactnumber: "jkhasd" },
  ];

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Staff ID</th>
          <th className="px-4 py-2">Campus ID</th>
          <th className="px-4 py-2">Department ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Designation</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Contact Number</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {StaffData.map((staff, index) => (
          <tr key={index} className=' bg-white'>
            <td className="border px-4 py-2">{staff.staffId}</td>
            <td className="border px-4 py-2">{staff.campusId}</td>
            <td className="border px-4 py-2">{staff.departmentId}</td>
            <td className="border px-4 py-2">{staff.name}</td>
            <td className="border px-4 py-2">{staff.designation}</td>
            <td className="border px-4 py-2">{staff.email}</td>
            <td className="border px-4 py-2">{staff.contactnumber}</td>
            <td className="border px-4 py-2">
            <div className="flex justify-around">
                <button className="ml-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded">Update</button>
                <button className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const StudentsTable = () => {
  // Sample data for courses
  const StudentsData = [
    { studentId: 1, campusId: 1, programId: 1, departmentId: 1, name: 'Course 1', email: "sjh", contactnumber: "jkhasd" },
    { studentId: 2, campusId: 2, programId: 1, departmentId: 1, name: 'Course 2', email: "sjh", contactnumber: "jkhasd" },
    { studentId: 3, campusId: 3, programId: 1, departmentId: 1, name: 'Course 3', email: "sjh", contactnumber: "jkhasd" },
  ];

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Student ID</th>
          <th className="px-4 py-2">Campus ID</th>
          <th className="px-4 py-2">Program ID</th>
          <th className="px-4 py-2">Department ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Contact Number</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {StudentsData.map((students, index) => (
          <tr key={index} className=' bg-white'>
            <td className="border px-4 py-2">{students.studentId}</td>
            <td className="border px-4 py-2">{students.campusId}</td>
            <td className="border px-4 py-2">{students.programId}</td>
            <td className="border px-4 py-2">{students.departmentId}</td>
            <td className="border px-4 py-2">{students.name}</td>
            <td className="border px-4 py-2">{students.email}</td>
            <td className="border px-4 py-2">{students.contactnumber}</td>
            <td className="border px-4 py-2 text-right">
            <div className="flex justify-around">
                <button className="ml-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded">Update</button>
                <button className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// AdminPage component
const AdminPage = () => {
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
        return <CampusesTable />;
      case 'Courses':
        return <CoursesTable />;
      case 'Departments':
        return <DepartmentTable />;
      case 'Programs':
        return <ProgramTable />;
      case 'Staff':
        return <StaffTable />;
      case 'Student':
        return <StudentsTable />;
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
              <div className="flex justify-between items-center mb-4 ">
                <h2 className="text-lg font-semibold">{selectedItem}</h2>
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded ">Add New +</button>
              </div>
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
