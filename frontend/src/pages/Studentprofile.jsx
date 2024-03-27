import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StudentProfile = () => {
  const [student, setStudent] = useState([]);
  const [fees, setFee] = useState({fee_id:"", student_id:"", amount:"", month:"", due_date:"", paid:""});
  const { id } = useParams(); // Get the ID from the URL params

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/student/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch student data');
        }
        const data = await response.json();
        console.log("Student data:", data);
        setStudent(data);
      } catch (error) {
        console.error('Error fetching student data:', error.message);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchFeeData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/fee/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch fee data');
        }
        const data = await response.json();
        setFee(data);
      } catch (error) {
        console.error('Error fetching student data:', error.message);
      }
    };
    fetchFeeData();
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen text-left">

      <main className="flex-grow p-4 mt-8 lg:ml-32 lg:mr-32">
        <h2 className="text-2xl font-bold mb-4">Student Profile</h2>

        {/* Student Information */}
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
          {/* Student Photo */}
          <div className="w-60 bg-gray-200  overflow-hidden">
            <img src={'/static/images/default.png'} alt="Student" className="w-full h-full object-cover" />
          </div>

          {/* Student Details */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-red-700">{student.name}</h3>
            <p className="mb-2">Student ID : {student.student_id}</p>
            <p className="mb-2">Contact Number : {student.contact_number}</p>
            <p className="mb-2">Email : {student.email}</p>
            <p className="mb-2">Campus : {student.campus_id}</p>
            <p className="mb-2">Program : {student.program_id}</p>
            <p className="mb-2">Department : {student.department_id}</p>

            {/* Horizontal Line */}
            <hr className="my-4 border-t border-gray-300" />

            {/* Fee Details */}
            <div>
              <h4 className="text-lg font-semibold mb-2 text-red-700">Fee Details</h4>
                <ul>
                    <li key={fees.index}>
                      <p className="mb-2">Fee ID : {fees.fee_id}</p>
                      <p className="mb-2">Amount : {fees.amount}</p>
                      <p className="mb-2">Month : {fees.month}</p>
                      <p className="mb-2">Due Date : {fees.due_date}</p>
                      <p className="mb-2">Status : {fees.paid ? 'Paid' : 'Not Paid'}</p>
                    </li>
                </ul>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentProfile;
