import React, { useState } from 'react';
import useFrom from '../hooks/form';

const Food = () => {
    const [formData, setFormData] = useState({});
    // const [values, setValues] = useState({});

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(values);
    // }

    // const handleChange = (e) => {
    //     setValues({ ...values, [e.target.name]: e.target.value })
    // }

    const [handleSubmit, handleChange, handleInput, values] = useFrom(cb);

    function cb(food) {
        // after 5 seconds we got the call back from the hook
        // that's mean that the hook work is done
        console.log(food);

        setFormData(food);
    }

    return (
        <React.Fragment>
            <h2>Food Component</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="food" onChange={handleChange} placeholder="food" />
                <input type="number" name="calories" {...handleInput} placeholder="calories" />
                <button>Submit Food!!</button>
            </form>

            <hr />

            <strong>Here are the values from food state. the values will change as we go</strong>
            {
                Object.keys(values).map((key, idx) => <p key={idx}>{key} - {values[key]}</p>)
            }

            <hr />

            <strong>Here is the values from the form AFTER it is submited(this will be updated from the call back funtion)</strong>
            {
                Object.keys(formData).map((key, idx) => <p key={idx}>{key} - {formData[key]}</p>)
            }
        </React.Fragment>
    );
}

export default Food;