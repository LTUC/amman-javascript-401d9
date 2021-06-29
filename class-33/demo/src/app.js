import React from 'react';
import './app.scss';
import SettingsContext  from './context/settings-context';
import ThemeContext  from './context/theme-context';
import Main from './main';

export default class App extends React.Component {
    render() {
        return (
            <ThemeContext>
                <SettingsContext>
                    <Main />
                </SettingsContext>
            </ThemeContext>
        );
    }
}