import React from 'react';
import { ThemeContext } from '../context/theme-context';

class Theme extends React.Component {
    // When just using on context, you use contextType to identify the context provider
    // Then, you have access to this.context to use any state or methods exposed
    static contextType = ThemeContext;
    render() {
        return (
            <React.Fragment>
                <h2>Design Settings</h2>
                <button onClick={this.context.toggleMode}>{this.context.mode}</button>
            </React.Fragment>
        );
    }
}

export default Theme;