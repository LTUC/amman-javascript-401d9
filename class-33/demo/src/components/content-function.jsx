import React, { useContext } from 'react';
import { SettingsContext } from '../context/settings-context';
import { ThemeContext } from '../context/theme-context';

const Content = (props) => {
    // when yo want to use mutliple contexts in a function component
    // simply use mlutiple useContext() calls to initate them
    const settingsContext = useContext(SettingsContext);
    const themeContext = useContext(ThemeContext);

    return (
        <div>
            <strong>Rendered from Function Component</strong>
            <h1>{settingsContext.title}</h1>
            <div>
                <a href={`http://www.twitter.com/${settingsContext.twitter}`} target="_blank">
                    @{settingsContext.twitter}
                </a>
            </div>

            <hr />

            <h2>Current Theme Mode: {themeContext.mode}</h2>
        </div>
    );
}

export default Content;