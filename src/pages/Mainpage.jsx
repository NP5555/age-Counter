import React, { useState } from 'react';

function Mainpage() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = (e) => {
    e.preventDefault();

    if (!day || !month || !year) {
      alert('Please fill all the fields.');
      return;
    }

    // Get today's date
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    setAge(age);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Age Calculator</h1>
      <form onSubmit={calculateAge} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="day">Day</label>
          <input
            type="number"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter Day"
            min="1"
            max="31"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="month">Month</label>
          <input
            type="number"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter Month"
            min="1"
            max="12"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter Year"
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Calculate Age
        </button>
      </form>
      {age !== null && (
        <div className="mt-6 p-4 bg-green-200 rounded">
          <h2 className="text-xl font-semibold">Your Age is: {age} years</h2>
        </div>
      )}
    </div>
  );
}

export default Mainpage;
