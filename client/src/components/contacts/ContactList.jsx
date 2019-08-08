import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

const ContactList = props => {
  const ctx = useContext(ContactContext);

  const { contacts, filtered } = ctx;

  if (contacts.length < 1) {
    return <h3>No contacts</h3>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(f => (
              <CSSTransition key={f.id} classNames="item" timeout={500}>
                <ContactItem contact={f} />
              </CSSTransition>
            ))
          : contacts.map(c => (
              <CSSTransition key={c.id} classNames="item" timeout={500}>
                <ContactItem contact={c} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

ContactList.propTypes = {};

export default ContactList;
