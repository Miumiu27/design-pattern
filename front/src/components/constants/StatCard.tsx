import React from 'react';

interface StatCardProps {
    title: string;
    count: number;
    icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, count, icon }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500 w-12 h-12 mb-2">
                {icon}
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-1 text-center">{title}</h2>
            <p className="text-sm text-gray-500">{count} documents</p>
        </div>
    );
};

export default StatCard;
