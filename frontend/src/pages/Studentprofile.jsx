import React from 'react';
import Header from '../components/header'; // Assuming you have a Header component
// import studentPhoto from './static/images/Tmuc.jpg'; // Sample student photo

const StudentProfile = () => {
  // Sample student information
  const student = {
    name: 'John Doe',
    photo: './static/images/Tmuc.png',
    contactNumber: '123-456-7890',
    address: '123 Main Street, City, Country',
    documents: ['Document 1', 'Document 2', 'Document 3'],
    feeDetails: [
      { month: 'January', amount: '$1000', isPaid: true },
      { month: 'February', amount: '$1000', isPaid: false },
      // Add more fee details as needed
    ]
  };

  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>

      <main className="p-4 mt-24 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 lg:ml-32 lg:mr-32">
        <h2 className="text-2xl font-bold mb-4">Student Profile</h2>

        {/* Student Information */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Student Photo */}
          <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden">
            <img src={student.photo} alt="Student" className="w-full h-full object-cover" />
          </div>

          {/* Student Details */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
            <p className="mb-2">Contact Number: {student.contactNumber}</p>
            <p className="mb-2">Address: {student.address}</p>

            {/* Document List */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Documents</h4>
              <ul>
                {student.documents.map((document, index) => (
                  <li key={index}>{document}</li>
                ))}
              </ul>
            </div>

            {/* Fee Details */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Fee Details</h4>
              <ul>
                {student.feeDetails.map((fee, index) => (
                  <li key={index}>
                    <p>{fee.month} - {fee.amount} {fee.isPaid ? '(Paid)' : '(Not Paid)'}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentProfile;
