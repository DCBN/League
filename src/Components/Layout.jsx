import React, { Component } from 'react';
import AppContainer from '../Styles/AppContainer';

export class Layout extends Component {
    render() {
        return (
            <AppContainer>
                {
                    this.props.children
                }
            </AppContainer>
        )
    }
};

export default Layout;