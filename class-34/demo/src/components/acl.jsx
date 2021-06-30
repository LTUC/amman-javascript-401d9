import React from 'react';
import { LoginContext } from '../context/auth';
import { If } from 'react-if';

class Acl extends React.Component {
    static contextType = LoginContext;

    render() {
        let okToRender = false;
        try {
            /*
                logged in user capabilities: read, delete
                edit button will have edit capability => this will be hidden
                delte button will have delete capability => this will be visibile
            
            */

            okToRender = this.context.loggedIn //this means the use must be logged in
                && this.props.capability// this means the user must have at least one capability
                ? this.context.user.capabilities.includes(this.props.capability)//check if the logged in user capabilities has the curren button allowed capability
                : false;
        } catch (error) {
            console.log('Not Authorized', error.message);
        }
        return (
            <If condition={okToRender}>
                {this.props.children}
            </If>
        );
    }
}

export default Acl;