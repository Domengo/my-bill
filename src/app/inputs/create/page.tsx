
// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// export default function BillForm() {
//     const [startDate, setStartDate] = useState(new Date());
//     const [fields, setFields] = useState([{ label: '', value: '' }]);

//     function handleChange(i, event) {
//         const values = [...fields];
//         values[i].value = event.target.value;
//         setFields(values);
//     }

//     function handleAdd() {
//         const values = [...fields];
//         values.push({ label: '', value: '' });
//         setFields(values);
//     }

//     function handleRemove(i) {
//         const values = [...fields];
//         values.splice(i, 1);
//         setFields(values);
//     }

//     return (
//         <div className="container mx-auto">
//             <form className="space-y-4">
//                 <div>
//                     <label>Date:</label>
//                     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//                 </div>
//                 <div>
//                     <label>Start Reading:</label>
//                     <input type="number" className="border-2" />
//                 </div>
//                 <div>
//                     <label>End Reading:</label>
//                     <input type="number" className="border-2" />
//                 </div>
//                 {fields.map((field, idx) => (
//                     <div key={`${field}-${idx}`}>
//                         <label>Label:</label>
//                         <input type="text" value={field.label} onChange={(e) => handleChange(idx, e)} />
//                         <input type="text" value={field.value} onChange={(e) => handleChange(idx, e)} />
//                         <button type="button" onClick={() => handleRemove(idx)}>-</button>
//                     </div>
//                 ))}
//                 <div>
//                     <label>Total Units Used:</label>
//                     <input type="number" className="border-2" />
//                 </div>
//                 <button type="button" onClick={() => handleAdd()}>+</button>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }
'use client'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BillForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [fields, setFields] = useState([{ label: '', value: '' }]);

    function handleChange(i, event) {
        const values = [...fields];
        values[i].value = event.target.value;
        setFields(values);
    }

    function handleAdd() {
        const values = [...fields];
        values.push({ label: '', value: '' });
        setFields(values);
    }

    function handleRemove(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }

    return (
        <div className="container mx-auto">
            <form className="space-y-4">
                <div>
                    <label>Date:</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                {fields.map((field, idx) => (
                    <div key={`${field}-${idx}`} className="flex items-center space-x-2">
                        <input type="text" value={field.label} onChange={(e) => handleChange(idx, e)} className="border-2 p-1" placeholder="Custom Label" />
                        <input type="number" value={field.value} onChange={(e) => handleChange(idx, e)} className="border-2 p-1" placeholder="Number" />
                        <button type="button" onClick={() => handleRemove(idx)} className="bg-red-500 text-white p-1 rounded">-</button>
                    </div>
                ))}
                <button type="button" onClick={() => handleAdd()} className="bg-green-500 text-white p-1 rounded">+</button>
                <button type="submit" className="bg-blue-500 text-white p-1 rounded mt-4">Submit</button>
            </form>
        </div>
    );
}
