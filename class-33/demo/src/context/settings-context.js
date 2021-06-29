import React, { useState } from 'react';

export const SettingsContext = React.createContext();

// const SettingsProvider = ({ children }) => {
const SettingsProvider = (props) => {
    const [title, setTitle] = useState('Ibrahim');
    const [twitter, setTwitter] = useState('ibr_ba6');

    const stateDetails = {
        title,
        twitter,
        changeTitleTo: setTitle,
        changeTwitterTo: setTwitter
    }

    return (
        <SettingsContext.Provider value={stateDetails}>
            {/* {childern} */}
            {props.children}
        </SettingsContext.Provider>
    );
}

export default SettingsProvider;