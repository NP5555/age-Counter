import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Mainpage() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState(null);
  const [ageDetails, setAgeDetails] = useState({
    years: 0,
    months: 0,
    days: 0,
  });


  const notifyError = (message) => {
    toast.error(message, {
      duration: 4000,
      position: 'top-center',
      style: {
        background: '#f87171',
        color: '#ffffff',
      },
    });
  };

  const calculateAge = (e) => {
    e.preventDefault();

    if (!day || !month || !year) {
      notifyError("Please fill all the fields.");
      return;
    }

    const isValidDate = (d, m, y) => {
      const date = new Date(y, m - 1, d);
      return (
        date.getDate() === Number(d) &&
        date.getMonth() === m - 1 &&
        date.getFullYear() === Number(y)
      );
    };

    if (!isValidDate(day, month, year)) {
      notifyError("Please enter a valid date.");
      return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust the month and day calculation if necessary
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in the previous month
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Ensure age is not negative (for future date inputs)
    if (years < 0) {
      notifyError("Birth date cannot be in the future.");
      return;
    }

    setAgeDetails({ years, months, days });
    setAge(`${years} years, ${months} months, and ${days} days`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-400 to-purple-600 px-4 sm:px-6 lg:px-8">
      <Toaster /> {/* Add the Toaster component to show toasts */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl max-w-xs sm:max-w-lg w-full">
        <form
          onSubmit={calculateAge}
          className="bg-white flex flex-col sm:flex-row gap-6 p-6 rounded-xl justify-between"
        >
          <div className="flex flex-col items-center">
            <label
              className="text-gray-700 text-sm font-bold mb-2 uppercase tracking-wider"
              htmlFor="day"
            >
              Day
            </label>
            <input
              type="number"
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="text-black text-lg sm:text-2xl font-bold w-16 sm:w-16 p-2 border-b-2 border-gray-400 text-center focus:outline-none focus:border-purple-500"
              min="1"
              max="31"
              required
            />
          </div>
          <div className="flex flex-col items-center">
            <label
              className="text-gray-700 text-sm font-bold mb-2 uppercase tracking-wider"
              htmlFor="month"
            >
              Month
            </label>
            <input
              type="number"
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="text-black text-lg sm:text-2xl font-bold w-16 sm:w-16 p-2 border-b-2 border-gray-400 text-center focus:outline-none focus:border-purple-500"
              min="1"
              max="12"
              required
            />
          </div>
          <div className="flex flex-col items-center">
            <label
              className="text-gray-700 text-sm font-bold mb-2 uppercase tracking-wider"
              htmlFor="year"
            >
              Year
            </label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="text-black text-lg sm:text-2xl font-bold w-20 sm:w-20 p-2 border-b-2 border-gray-400 text-center focus:outline-none focus:border-purple-500"
              min="1900"
              max={new Date().getFullYear()}
              required
            />
          </div>
        </form>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <button
            type="submit"
            className="bg-purple-600 animate-bounce text-white py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-500"
            onClick={calculateAge}
          >
            <span className="text-lg sm:text-2xl font-bold">Calculate</span>
          </button>
        </div>
      </div>

      {age !== null && (
        <div className="mt-6 sm:mt-8 p-6 sm:p-10 rounded-3xl shadow-2xl bg-white max-w-xs sm:max-w-lg w-full text-center">
          <div className="mb-4">
            <span className="text-4xl sm:text-6xl font-extrabold text-purple-600">
              {ageDetails.years}
            </span>
            <span className="text-2xl sm:text-4xl font-bold"> years</span>
          </div>
          <div className="mb-4">
            <span className="text-3xl sm:text-5xl font-extrabold text-purple-600">
              {ageDetails.months}
            </span>
            <span className="text-xl sm:text-3xl font-bold"> months</span>
          </div>
          <div className="mb-4">
            <span className="text-3xl sm:text-5xl font-extrabold text-purple-600">
              {ageDetails.days}
            </span>
            <span className="text-xl sm:text-3xl font-bold"> days</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mainpage;
