import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home'
import AboutUs from './about'

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home/:id" component={Home} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route exact path="/contact-us" render={() => <p>this is rendered for contact us</p>} />
                    <Route path="/contact-us/:id" render={() => <p>this is rendered for contact us with an id</p>} />
                    <Route path="*">
                        <div>404</div>
                    </Route>
                </Switch>
            </main>
        );
    }
}

export default Main;