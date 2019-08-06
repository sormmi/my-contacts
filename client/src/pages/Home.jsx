import React from 'react';
import Contacts from '../components/contacts/ContactList';
import PropTypes from 'prop-types';
import ContactForm from '../components/contacts/ContactForm';
import ContactFilter from '../components/contacts/ContactFilter';

const Home = props => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
