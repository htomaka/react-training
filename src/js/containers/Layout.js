import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router';
import Menu from "../components/Menu";
import routes from '../routes';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Menu />
                <Switch>
                    {
                        routes.map(route => {
                            return <Route key={route.path} {...route}/>
                        })
                    }
                </Switch>
            </div>
        );
    }

}

export default withRouter(Layout);