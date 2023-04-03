import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector, Cell, } from 'recharts';

const Deshbors = () => {
    let students = [
        { id: 1, name: "John Doe", math: 85, bangla: 90, english: 75 },
        { id: 2, name: "Jane Smith", math: 70, bangla: 80, english: 90 },
        { id: 3, name: "Bob Johnson", math: 95, bangla: 85, english: 80 },
        { id: 4, name: "Alice Lee", math: 60, bangla: 70, english: 65 },
        { id: 5, name: "David Brown", math: 80, bangla: 75, english: 85 },
        { id: 6, name: "Karen Davis", math: 90, bangla: 95, english: 80 },
        { id: 7, name: "Tom Wilson", math: 75, bangla: 80, english: 70 },
        { id: 8, name: "Samantha Green", math: 85, bangla: 90, english: 85 },
        { id: 9, name: "George Taylor", math: 70, bangla: 75, english: 80 },
        { id: 10, name: "Linda Martinez", math: 95, bangla: 85, english: 90 },
        { id: 11, name: "Mark Robinson", math: 75, bangla: 70, english: 80 },
        { id: 12, name: "Emily Hernandez", math: 80, bangla: 90, english: 85 }
      ];
      
    return (
        <div>
            <LineChart 
            width={1000}
            height={300}
            data={students}
            >
               <Line stroke="#8884e8" dataKey="bangla"></Line>
               <Line stroke="#8484d8" dataKey="math"></Line>
               <Line dataKey="english"></Line>
               <XAxis dataKey="name" />
               <YAxis />
               <Tooltip />
            </LineChart>

            <PieChart height={500} width={1000} data={students}>
            <Pie dataKey='math' cx="50%" cy="50%" outerRadius={60} fill="#8884d8"></Pie>
            </PieChart>
        </div>
    );
};

export default Deshbors;