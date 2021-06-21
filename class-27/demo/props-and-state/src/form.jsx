import React from 'react';

class Form extends React.Component {
    
    handleSubmit = async e => {
        e.preventDefault();// this will stop the default behvior for the browser, and we can make sure that only react will handle the submit event.

        let raw = await fetch('https://swapi.dev/api/people');
        let data = await raw.json();
        console.log('.............. ', data);
        const count = data.count;
        const results = data.results;

        this.props.handler(results, count);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button type="submit">Get Starwars characters</button>
            </form>
        )
    }
}

export default Form;
