import React, { useState } from 'react';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    sport: '',
    date: '',
    time: '',
    location: '',
    participants: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Created:', formData);
    // Here, you would typically send the form data to your server or API
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4 text-center">Create a New Event</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Sport</label>
          <input
            type="text"
            name="sport"
            value={formData.sport}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Participants</label>
          <input
            type="number"
            name="participants"
            value={formData.participants}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
