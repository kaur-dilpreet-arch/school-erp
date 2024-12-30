import UpcomingEvents from './UpcomingEvents';
import AbsentAttendence from './AbsentAttendence';
import TimeTable from './TimeTable';
import Header from '../../shared/Header/Header';

interface Event {
    title: string;
    date: string;
    day: string;
    description: string;
}

interface Absence {
    date: string;
    leaveType: 'Absent' | 'On Leave';
}

const Dashboard = () => {
    const events: Event[] = [
        {
            title: 'Annual Function',
            date: '6 Jan',
            day: 'Monday',
            description: 'Annual Day of School',
        },
        {
            title: 'Lohri Celebration',
            date: '13 Jan',
            day: 'Monday',
            description: 'A day to celebrate Lohri with festivities.',
        }
    ];

    const studentAbsences: Absence[] = [
        {
            date: '2024-12-03',
            leaveType: 'On Leave',
        },
        {
            date: '2024-12-10',
            leaveType: 'Absent',
        },
    ];

    const timetable = [
        {
            time: '08:00 - 08:30',
            monday: 'Math',
            tuesday: 'Physics',
            wednesday: 'Chemistry',
            thursday: 'Biology',
            friday: 'English',
        },
        {
            time: '08:30 - 09:00',
            monday: 'English',
            tuesday: 'Math',
            wednesday: 'Physics',
            thursday: 'Chemistry',
            friday: 'History',
        },
        {
            time: '09:00 - 09:30',
            monday: 'History',
            tuesday: 'Biology',
            wednesday: 'Math',
            thursday: 'Physics',
            friday: 'Chemistry',
        },
        {
            time: '09:30 - 10:00',
            monday: 'Physics',
            tuesday: 'History',
            wednesday: 'Biology',
            thursday: 'Math',
            friday: 'Geography',
        },
        // Add more time slots as needed
    ];

    return (
        <Header>
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="bg-yellowLight shadow-lg rounded-lg p-6 w-full mb-6">
                    <h1 className="text-xl font-bold text-gray-800 mb-1">
                        Welcome, Dilpreet Kaur!
                    </h1>
                    <p className="text-gray-600">
                        Explore your dashboard to track assignments, view grades, and stay updated with school events.
                    </p>
                </div>
                <div className="mb-6">
                    <TimeTable timetable={timetable} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    <UpcomingEvents events={events} />
                    <AbsentAttendence absences={studentAbsences} />
                </div>
            </div>
        </Header>
    );
};

export default Dashboard;
