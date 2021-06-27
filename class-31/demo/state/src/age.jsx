import React, { useState } from 'react';

const Age = (props) => {
    const [age, setAge] = useState(props.age || 0);
    // constructor = this.state = {}
    // setState()

    return (
        <div>
            <h2>{age}</h2>
        </div>
    );
}

export default Age;