import React from 'react';
import Header from '../components/header'; // Assuming you have a Header component

const StaffProfile = () => {
  // Sample staff information
  const staff = {
    name: 'John Doe',
    photo: './static/images/Tmuc.png',
    contactNumber: '123-456-7890',
    address: '123 Main Street, City, Country',
    documents: ['Document 1', 'Document 2', 'Document 3'],
    salaryDetails: [
      { month: 'January', amount: '$2000', isPaid: true },
      { month: 'February', amount: '$2000', isPaid: false },
      // Add more salary details as needed
    ]
  };

  return (
    <div className="flex flex-col min-h-screen text-left">
      <header>
        <Header />
      </header>

      <main className="flex-grow p-4 mt-28 lg:ml-32 lg:mr-32">
        <h2 className="text-2xl font-bold mb-4">Staff Profile</h2>

        {/* Staff Information */}
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
          {/* Staff Photo */}
          <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden">
            <img src={staff.photo} alt="Staff" className="w-full h-full object-cover" />
          </div>

          {/* Staff Details */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{staff.name}</h3>
            <p className="mb-2">Contact Number: {staff.contactNumber}</p>
            <p className="mb-2">Address: {staff.address}</p>

            {/* Horizontal Line */}
            <hr className="my-4 border-t border-gray-300" />

            {/* Document List */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Documents</h4>
              <ul>
                {staff.documents.map((document, index) => (
                  <li key={index}>{document}</li>
                ))}
              </ul>
            </div>

            {/* Horizontal Line */}
            <hr className="my-4 border-t border-gray-300" />

            {/* Salary Details */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Salary Details</h4>
              <ul>
                {staff.salaryDetails.map((salary, index) => (
                  <li key={index}>
                    <p>{salary.month} - {salary.amount} {salary.isPaid ? '(Paid)' : '(Not Paid)'}</p>
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

export default StaffProfile;
