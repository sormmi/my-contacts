import React, { useContext } from 'react';
import NotificationContext from '../../context/notification/notificationContext';
import PropTypes from 'prop-types';

const Notifications = props => {
  const notificationContext = useContext(NotificationContext);
  return (
    notificationContext.notifications.length > 0 &&
    notificationContext.notifications.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    ))
  );
};

Notifications.propTypes = {};

export default Notifications;
