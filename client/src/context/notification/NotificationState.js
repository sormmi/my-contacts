import React, { useReducer } from 'react';
import uuid from 'uuid';
import NotificationContext from './notificationContext';
import notificationReducer from './notificationReducer';

import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../types';

const NotificationState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(notificationReducer, initialState);

  // Set alert
  const setNotification = (msg, type, timeout = 2500) => {
    const id = uuid.v4();
    dispatch({ type: SET_NOTIFICATION, payload: { msg, type, id } });

    setTimeout(() => dispatch({ type: REMOVE_NOTIFICATION, payload: id }), timeout);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications: state,
        setNotification
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationState;
