import React, { useState } from 'react';

const events = [
  { id: 1, sport: 'Football', date: '2024-10-05', time: '10:00', location: 'Central Park', participants: 5 },
  { id: 2, sport: 'Basketball', date: '2024-10-06', time: '14:00', location: 'Brooklyn Court', participants: 8 },
];

const FindEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter((event) =>
    event.sport.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Find Events</h2>
      <input
        type="text"
        placeholder="Search by sport"
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 gap-4">
        {filteredEvents.map((event) => (
          <div key={event.id} className="border p-4 rounded-md">
            <h3 className="font-bold">{event.sport}</h3>
            <p>{event.date} at {event.time}</p>
            <p>{event.location}</p>
            <p>Participants: {event.participants}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindEvents;
