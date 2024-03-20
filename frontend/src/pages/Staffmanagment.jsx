import React, { useState } from 'react';
import Header from '../components/header';

const StaffManagement = ({ staff }) => {
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
      staffMember.staff_id.toString().toLowerCase().includes(searchTermLower)
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
        <div className="overflow-y-auto max-h-[500px]">
          <ul className="divide-y divide-gray-200">
            {filteredStaff.map((staffMember) => (
              <li key={staffMember.id} className="py-3 text-left">
                <a href={`/staff/${staffMember.staff_id}`}>
                  <div>
                    <h3 className="text-md font-semibold hover:underline">{staffMember.name}</h3>
                    {/* Additional staff details can be added here */}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default StaffManagement;
