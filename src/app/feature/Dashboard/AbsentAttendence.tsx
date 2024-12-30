// src/components/AbsentAttendence.tsx
import React from 'react';

interface Absence {
    date: string;
    leaveType: 'Absent' | 'On Leave';
}

interface AbsentAttendenceProps {
    absences: Absence[];
}

const AbsentAttendence: React.FC<AbsentAttendenceProps> = ({ absences }) => {
    return (
        <div className="max-w-lg bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Absence Record</h2>
            <div className="space-y-4">
                {absences.length === 0 ? (
                    <p className="text-gray-500">No absences recorded.</p>
                ) : (
                    absences.map((absence, index) => {
                        const absenceDate = new Date(absence.date);
                        const dayOfWeek = absenceDate.toLocaleDateString('en-US', { weekday: 'long' }); // Get the day of the week
                        const formattedDate = absenceDate.toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                        }); // Format as '6 Jan'

                        return (
                            <div key={index} className={`flex justify-between items-center ${(index < absences.length - 1) ? "border-b" : ""} pb-4`}>
                                <div className="text-gray-700">
                                    <p className="font-medium">{formattedDate}</p>
                                    <p className="text-sm text-gray-500">{dayOfWeek}</p> {/* Show day below date */}
                                </div>
                                <div className={`text-sm ${absence.leaveType === 'Absent' ? 'text-red-500' : 'text-yellow-500'}`}>
                                    {absence.leaveType}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default AbsentAttendence;
