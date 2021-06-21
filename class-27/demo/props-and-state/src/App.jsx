import React from 'react';
import Form from './form';
import Starwars from './starwars';
import './test.scss';


/*
    prop name
    fn calculate
*/
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            count: 0
        }
    }

    handleForm = (results, count) => {
        console.log('from the parent handler', count);
        this.setState({ results, count });
    }

    render() {
        return (
            <React.Fragment>
                <div className="test-css-class">
                    <Form handler={this.handleForm} />
                    <Starwars test={this.state.results} />
                </div>
            </React.Fragment>
        )
    }
}

export default App;