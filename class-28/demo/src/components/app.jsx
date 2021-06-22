import React from 'react';
import If from './if';
import Else from './else';
import Modal from './modal';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
        }
    }

    toggle = () => {
        //if true then return false else return true
        this.setState({ flag: !this.state.flag });
    }

    render() {
        return (
            <React.Fragment>
                {/* this.props.onClick = toggle method */}
                <button onClick={this.toggle}>toggle modal</button>
                {/* if flag is true, then show the modal */}
                <If condition={this.state.flag}>{/*props.condition = true*/}
                    <Modal onClose={this.toggle}>
                        <strong>This is a Modal</strong>
                        <ul>
                            <li>one</li>
                            <li>two</li>
                            <li>three</li>
                            <li>four</li>
                            <li>five</li>
                        </ul>
                    </Modal>
                </If>
                {/* else hide the modal */}
                <Else condition={this.state.flag}>
                    <p>The toggle is off (no popup) :(</p>
                </Else>
            </React.Fragment>
        );
    }
}

export default App;