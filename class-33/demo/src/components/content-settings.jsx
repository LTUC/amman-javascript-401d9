import React, { useContext } from 'react';
import { SettingsContext } from '../context/settings-context';

const ContentSettings = (props) => {

    // In function components, use useContext() to specify a context and use any state or methods exposed.
    // You can use any number of contexts in this way, each with their own reference
    const context = useContext(SettingsContext);

    return (
        <React.Fragment>
            <h2>Content Settings</h2>
            <label>
                <span>Change title</span>
                <input
                    placeholder="Title"
                    type="text"
                    name="title"
                    onChange={e => context.changeTitleTo(e.target.value)} />
            </label>
            <label>
                <span>Change Twitter</span>
                <input
                    placeholder="Twitter"
                    type="text"
                    name="title"
                    onChange={e => context.changeTwitterTo(e.target.value)} />
            </label>
        </React.Fragment>
    );
}

export default ContentSettings;