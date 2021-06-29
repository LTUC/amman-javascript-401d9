import React from 'react';
import { SettingsContext } from '../context/settings-context';
import { ThemeContext } from '../context/theme-context';

class Content extends React.Component {
    // when you want to use multiple contexts in a class component,
    // you can't use the static contextType identifire.
    // static contextType = SettingsContext

    render() {
        return (
            <div>
                <strong>Rendered from Class Component</strong>
                <SettingsContext.Consumer>
                    {
                        settingsContext => (
                            <React.Fragment>
                                <h1>{settingsContext.title}</h1>
                                <div>
                                    <a href={`http://www.twitter.com/${settingsContext.twitter}`} target="_blank">
                                        @{settingsContext.twitter}
                                    </a>
                                </div>
                            </React.Fragment>
                        )
                    }
                </SettingsContext.Consumer>
                <hr />
                <ThemeContext.Consumer>
                    {
                        themeContext => (
                            <h2>Current Theme Mode: {themeContext.mode}</h2>
                        )
                    }
                </ThemeContext.Consumer>
            </div>
        );
    }
}

export default Content;