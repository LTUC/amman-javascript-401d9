import React from 'react';
import './modal.scss';

class Modal extends React.Component {
    componentDidMount() {
        console.log(">>>>>>>> component did mount");
    }

    componentWillUnmount() {
        console.log(">>>>>>>> goodbey component :(");
    }

    render() {
        console.log(">>>>>>>> Hello component from render :)");

        return (
            <React.Fragment>
                <div className="modal-background">
                    <div className="modal">
                        <section className="header">
                            <button onClick={this.props.onClose}>X</button>
                        </section>
                        <section className="main">
                            {this.props.children}
                        </section>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Modal;