import React from 'react';

const UserHoc = (WrappedComponent, arg1) => {
    return (props) => (
        <WrappedComponent {...props} />
    )
}

export default UserHoc;
