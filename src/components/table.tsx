import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchBillData } from '../api.ts';

const Table: React.FC = () => {
    const [data, setData] = useState([]); // State to store the fetched data
    const router = useRouter();

    useEffect(() => {
        fetchData(); // Fetch data when the component mounts
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetchBillData(); // Fetch data from the API
            const data = await response.json();
            setData(data); // Update the state with the fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <table className="border">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Units Used</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.date}</td>
                        <td>{item.units}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
