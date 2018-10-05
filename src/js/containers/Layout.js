import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router';
import VideoList from "./VideoList";
import Video from "./Video";
import VideoForm from './VideoForm';
import Menu from "../components/Menu";

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Menu />
                <Switch>
                    <Route exact path="/" component={VideoList}/>
                    <Route exact path="/videos/new" component={VideoForm}/>
                    <Route exact path="/videos/:id" component={Video}/>
                </Switch>
            </div>
        );
    }

}

export default withRouter(Layout);