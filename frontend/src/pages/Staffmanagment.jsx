import React, { useState } from 'react';
import Header from '../components/header'; // Assuming you have a Header component

const StaffManagement = () => {
  // Sample staff data
  const staff = [
    { id: 1, name: 'Staff 1' },
    { id: 2, name: 'Staff 2' },
    { id: 3, name: 'Staff 3' },
    { id: 4, name: 'Staff 4' },
    { id: 5, name: 'Staff 5' },
    { id: 6, name: 'Staff 6' },
    { id: 7, name: 'Staff 7' },
    // { id: 8, name: 'Staff 8' },
    // { id: 9, name: 'Staff 9' },
    // { id: 10, name: 'Staff 10' },
    // { id: 11, name: 'Staff 11' },
    // { id: 12, name: 'Staff 12' },
    // { id: 13, name: 'Staff 13' },
    // { id: 14, name: 'Staff 14' },
    // { id: 15, name: 'Staff 15' },
    // { id: 16, name: 'Staff 16' },
    // { id: 17, name: 'Staff 17' },
    // { id: 18, name: 'Staff 18' },
    // { id: 19, name: 'Staff 19' },
    // { id: 20, name: 'Staff 20' },
    // { id: 21, name: 'Staff 21' },
    // { id: 22, name: 'Staff 22' },
    // Add more staff as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStaff = staff.filter((staffMember) => {
    // Convert search term to lowercase for case-insensitive search
    const searchTermLower = searchTerm.toLowerCase();
    // Check if staff name or ID contains the search term
    return (
      staffMember.name.toLowerCase().includes(searchTermLower) ||
      staffMember.id.toString().toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>

      <main className="p-4 mt-24 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 lg:ml-32 lg:mr-32 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-red-800">Staff Management</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Search staff"
              className="p-2 border border-gray-300 rounded-md mr-2"
              value={searchTerm}
              onChange={handleSearch}
            />
            {/* Add search button here if needed */}
          </div>
        </div>

        {/* List of Staff */}
        <ul className="divide-y divide-gray-200">
          {filteredStaff.map((staffMember) => (
            <li key={staffMember.id} className="py-3">
              <a href={`/staff/${staffMember.id}`}>
                <div>
                  <h3 className="text-md font-semibold">{staffMember.name}</h3>
                  {/* Additional staff details can be added here */}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StaffManagement;
