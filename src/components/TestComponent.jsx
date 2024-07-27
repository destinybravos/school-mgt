import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestComponent = () => {
    // const [changing_number, setChanging] = useState(0)
    const [departments, setDepartment] = useState([]);

    let fetchDeprtments = () => {
        axios.get('http://localhost/school-mgt/api/')
        .then((res) => {
            setDepartment(res.data);
        })
    }

    useEffect(() => {
        fetchDeprtments();
    }, []);
    
    return (
        <>
            {(departments && departments.length > 0) && <select name="dept" id="dept" className='block w-full my-2 text-black px-3 py-1 rounded-md'>
                { departments.map((department, i) => (
                    <option value="" key={i}> { department } </option>
                )) }
            </select>}

            {/* <button onClick={() => setChanging(changing_number + 1)}>
                Increement
            </button>

            <div className='my-5 text-3xl'>
                { changing_number }
            </div> */}
        </>
    )
}

export default TestComponent