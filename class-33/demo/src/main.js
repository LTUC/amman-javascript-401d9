import React from 'react';
import ContentClass from './components/content-class';
import ContentFunction from './components/content-function';
import ContentSettings from './components/content-settings';
import ThemeSettings from './components/theme-settings';
import { ThemeContext } from './context/theme-context';

const styles = {
    dark: {
        background: '#444444',
        color: 'white'
    },
     light: {
        background: 'tomato',
        color: 'blue'
     }
}

class Main extends React.Component {
    static contextType = ThemeContext;

    render() {
        return (
            <main style={styles[this.context.mode]}>
                <section>
                    <ContentClass />
                    <ContentFunction />
                    <aside>
                        <ContentSettings />
                        <ThemeSettings />
                    </aside>
                </section>
            </main>
        );
    }
}

export default Main;