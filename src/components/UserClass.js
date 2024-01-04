import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>{this.props.name}</div>
            </div>
        );
    }
}

export default UserClass;
