import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <button className="btn btn-primary">
                        {this.props.title}
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;