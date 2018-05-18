import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// Examples of hoc (Higher order component) pattern. This function returns a component that is the hoc.
const withAdminInfo = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private info. Please don't share it.</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const withAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to continue</p>
      }
    </div>
  );
};

const AdminInfo = withAdminInfo(Info);
const AuthInfo = withAuthentication(Info);

//ReactDOM.render(<AdminInfo info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));
