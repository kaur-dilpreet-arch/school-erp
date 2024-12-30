// src/components/TimeTable.tsx
import React from 'react';

interface Timetable {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

interface TimeTableProps {
  timetable: Timetable[];
}

const TimeTable: React.FC<TimeTableProps> = ({ timetable }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Class Timetable</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left text-gray-800">Time</th>
              <th className="border px-4 py-2 text-left text-gray-800">Monday</th>
              <th className="border px-4 py-2 text-left text-gray-800">Tuesday</th>
              <th className="border px-4 py-2 text-left text-gray-800">Wednesday</th>
              <th className="border px-4 py-2 text-left text-gray-800">Thursday</th>
              <th className="border px-4 py-2 text-left text-gray-800">Friday</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((entry, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-gray-800">{entry.time}</td>
                <td className="border px-4 py-2 text-gray-800">{entry.monday}</td>
                <td className="border px-4 py-2 text-gray-800">{entry.tuesday}</td>
                <td className="border px-4 py-2 text-gray-800">{entry.wednesday}</td>
                <td className="border px-4 py-2 text-gray-800">{entry.thursday}</td>
                <td className="border px-4 py-2 text-gray-800">{entry.friday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTable;
