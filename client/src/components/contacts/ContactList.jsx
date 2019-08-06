import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

const ContactList = props => {
  const ctx = useContext(ContactContext);

  const { contacts, filtered } = ctx;

  if (contacts.length < 1) {
    return <h4>No contacts added</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(f => <ContactItem contact={f} key={f.id} />)
        : contacts.map(c => <ContactItem contact={c} key={c.id} />)}
    </Fragment>
  );
};

ContactList.propTypes = {};

export default ContactList;
