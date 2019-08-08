import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

const ContactList = props => {
  const ctx = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = ctx;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts && contacts.length < 1) {
    return <h3>No contacts</h3>;
  }

  return (
    <Fragment>
      { contacts !== null && !loading ? 
        (<TransitionGroup>
        {filtered !== null
          ? filtered.map(f => (
              <CSSTransition key={f._id} classNames="item" timeout={500}>
                <ContactItem contact={f} />
              </CSSTransition>
            ))
          : contacts.map(c => (
              <CSSTransition key={c._id} classNames="item" timeout={500}>
                <ContactItem contact={c} />
              </CSSTransition>
            ))}
      </TransitionGroup>) 
      : <Spinner />
    }
      
    </Fragment>
  );
};

export default ContactList;
