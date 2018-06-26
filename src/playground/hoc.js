import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdiminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdiminWarning(Info);

const requireAuthtication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view the info</p>}
        </div>
    );
}

const AuthInfo = requireAuthtication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));