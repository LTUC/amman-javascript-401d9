import { useState } from 'react';

const useFrom = (callback) => {
    const [values, setValues] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        //api async calls
        // when the call is done, use the call back function
        callback(values);
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleInput = {
        onChange: (e) => {
            setValues({ ...values, [e.target.name]: e.target.value })
        }
    }

    return [
        handleSubmit,
        handleChange,
        handleInput,
        values
    ];
}

export default useFrom;