import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Header from '../Elements/Header';

class Parent extends Component {
    render() {
        return (
            <React.Fragment>
                <Header title={"TEACHER"} />
            </React.Fragment>
        );
    }
}

export default withRouter(Parent);