import React from 'react';

class Starwars extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    {
                        // [<li>name1</li>,<li>name2</li>]
                        this.props.test.map((item, idx) => {
                            return (
                                <a href={item.url}>
                                    <li key={idx}>{item.name}</li>
                                </a>
                            );
                        })
                        // <li>name1</li>
                        // <li>name1</li>
                        // <li>name1</li>
                        // <li>name1</li>
                        // <li>name1</li>
                        // <li>name1</li>
                        /*
                            <u>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                            </u>
                            [<li>name</li>, <li>name</li>, ...]
                        */
                    }
                </ul>
            </React.Fragment>
        )
    }
}

export default Starwars;
