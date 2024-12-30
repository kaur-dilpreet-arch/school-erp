import React from 'react';
import Header from '../../shared/Header/Header';

interface SubjectMark {
    subject: string;
    maxMarks: number;
    marksObtained: number;
}

interface ExamCardProps {
    title: string;
    marks: SubjectMark[];
}

const ExamCard: React.FC<ExamCardProps> = ({ title, marks }) => {
    const totalMarks = marks.reduce((acc, mark) => acc + mark.maxMarks, 0);
    const obtainedMarks = marks.reduce((acc, mark) => acc + mark.marksObtained, 0);
    const percentage = ((obtainedMarks / totalMarks) * 100).toFixed(2);

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full mb-6 relative z-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
            <table className="w-full text-left mb-4">
                <thead>
                    <tr className="text-gray-600">
                        <th className="pb-2">Subject</th>
                        <th className="pb-2">Max Marks</th>
                        <th className="pb-2">Marks Obtained</th>
                    </tr>
                </thead>
                <tbody>
                    {marks.map((mark, index) => (
                        <tr key={index} className="text-gray-700">
                            <td className="py-2">{mark.subject}</td>
                            <td className="py-2">{mark.maxMarks}</td>
                            <td className="py-2">{mark.marksObtained}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="font-semibold text-gray-700">Percentage: {percentage}%</p>
        </div>
    );
};

const MarkSheet: React.FC = () => {
    const subjects = ['Math', 'English', 'History', 'Physics', 'Biology', 'Chemistry', 'Geography'];

    const evaluations = [
        {
            title: '1st Evaluation',
            marks: subjects.map(subject => ({ subject, maxMarks: 100, marksObtained: Math.floor(Math.random() * 20) + 80 })),
        },
        {
            title: 'Half Yearly',
            marks: subjects.map(subject => ({ subject, maxMarks: 100, marksObtained: Math.floor(Math.random() * 20) + 80 })),
        },
        {
            title: '2nd Evaluation',
            marks: subjects.map(subject => ({ subject, maxMarks: 100, marksObtained: Math.floor(Math.random() * 20) + 80 })),
        },
    ];

    return (
        <Header>
            <div className="min-h-screen bg-gray-100 py-5">
                <h1 className="text-xl font-bold text-start text-gray-800 mb-3">Mark Sheet</h1>
                {evaluations.map((evaluation, index) => (
                    <ExamCard key={index} title={evaluation.title} marks={evaluation.marks} />
                ))}
            </div>
        </Header>
    );
};

export default MarkSheet;
