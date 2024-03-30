import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StaffProfile = () => {
  const [staff, setStaffData] = useState([]);
  const [salaries, setSalary] = useState({});

  const { id } = useParams(); // Get the ID from the URL params

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/staff/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch staff data');
        }
        const data = await response.json();
        setStaffData(data);
      } catch (error) {
        console.error('Error fetching staff data:', error.message);
      }
    };
    fetchStaffData();
  }, [id]);

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/salary/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch staff data');
        }
        const data = await response.json();
        setSalary(data);
      } catch (error) {
        console.error('Error fetching staff data:', error.message);
      }
    };
    fetchStaffData();
  }, [id]);



  return (
    <div className="flex flex-col min-h-screen text-left">

      <main className="flex-grow p-4 lg:ml-32 lg:mr-32">
        <h2 className="text-2xl font-bold mb-4">Staff Profile</h2>

        {/* Staff Information */}
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
          {/* Staff Photo */}
          <div className="w-60 bg-gray-200 overflow-hidden">
            <img src={'/static/images/default.png'} alt="Student" className="w-full h-full object-cover" />
          </div>

          {/* Staff Details */}
          <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-red-700">{staff.name}</h3>
            <p className="mb-2">Staff ID : {staff.staff_id}</p>
            <p className="mb-2">Contact Number : {staff.contact_number}</p>
            <p className="mb-2">Email : {staff.email}</p>
            <p className="mb-2">Designation : {staff.designation}</p>
            <p className="mb-2">Department : {staff.department_id}</p>

            {/* Horizontal Line */}
            <hr className="my-4 border-t border-gray-300" />

            {/* Salary Details */}
            <div>
              <h4 className="text-lg font-semibold mb-2  text-red-700">Salary Details</h4>
              <ul>
                  <li key={salaries.index}>
                    <p className="mb-2">Salary ID : {salaries.salary_id}</p>
                    <p className="mb-2">Month : {salaries.month}</p>
                    <p className="mb-2">Amount : {salaries.amount}</p>
                    <p className="mb-2">Status : {salaries.paid ? 'Paid' : 'Not Paid'}</p>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StaffProfile;
