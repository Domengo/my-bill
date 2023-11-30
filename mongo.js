// Sure, here’s a basic example of how you might structure your Next.js application for this purpose.

// Firstly, you’ll need to install the necessary dependencies. In your project directory, run:

npm install next react react - dom
npm install--save mongoose

// Then, you can create the following files:

// pages/api/meterReadings.js - This is where you’ll handle the POST request to save meter readings.
// JavaScript
// AI-generated code. Review and use carefully. More info on FAQ.

import mongoose from 'mongoose';
import MeterReading from '../../models/MeterReading';

export default async (req, res) => {
    if (req.method === 'POST') {
        const meterReading = new MeterReading(req.body);
        await meterReading.save();
        res.status(200).json({ success: true, data: meterReading });
    } else {
        res.status(400).json({ success: false });
    }
};
// models/MeterReading.js - This is your Mongoose model for the meter readings.
// JavaScript


import mongoose from 'mongoose';

const MeterReadingSchema = new mongoose.Schema({
    reading: {
        type: Number,
        required: [true, 'Please add a reading'],
        unique: true,
        trim: true,
        max: [999999, 'Reading can not be more than 6 digits']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.MeterReading || mongoose.model('MeterReading', MeterReadingSchema);
// pages/admin.js - This is your admin panel where you’ll fetch and display the meter readings.
// JavaScript
// AI-generated code. Review and use carefully. More info on FAQ.

import useSWR from 'swr';
import MeterReadingTable from '../components/MeterReadingTable';

export default function Admin() {
    const { data, error } = useSWR('/api/meterReadings');

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return <MeterReadingTable readings={data} />;
}
// components/MeterReadingTable.js - This is a component to display the meter readings in a table.
// JavaScript
// AI-generated code. Review and use carefully. More info on FAQ.

export default function MeterReadingTable({ readings }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Reading</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {readings.map((reading) => (
                    <tr key={reading._id}>
                        <td>{reading.reading}</td>
                        <td>{new Date(reading.createdAt).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
// This is a very basic example and doesn’t include any error handling or form validation, 
// but it should give you a good starting point. You’ll also need to connect to your MongoDB 
// database using Mongoose. You can do this in your pages/api/meterReadings.js file before defining the API route. 
// Remember to replace <your-mongodb-uri> with your actual MongoDB URI.

// JavaScript
// AI-generated code. Review and use carefully. More info on FAQ.

mongoose.connect('<your-mongodb-uri>', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Please note that you’ll need to replace <your-mongodb-uri> with your actual MongoDB URI.
// Also, remember to add error handling and validation as necessary. This is just a basic example to get you started.
// You might also want to add more features, like authentication, more detailed meter reading data, etc.
// depending on your requirements. Happy coding! 🚀
import { Users } from "../../data/users";
export default function handler(req, res) {
    try {
        if (req.method !== 'POST') {
            res.status(405).send({ message: 'Only POST requests allowed' })
            return
        }
        const body = JSON.parse(JSON.stringify(req.body))
        const user = Users.find((user) => user.email === body.email && user.password === parseInt(body.password));
        if (!user) {
            res.status(404).send({ message: 'User does not exit!' })
            return
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(405).send({ message: `{error.message}` })
        return
    }
};