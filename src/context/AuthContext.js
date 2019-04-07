import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const { url, children } = props;

  // Use State to keep the values
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  // Make the context object:
  const authContext = {
    user,
    setUser,
    token,
    setToken
  };

  // pass the value in provider and return
  return <Context.Provider value={authContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.propTypes = {
  url: PropTypes.string
};

Provider.defaultProps = {
  url: ''
};
