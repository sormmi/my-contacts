import React, { useContext, useEffect } from 'react';
import Contacts from '../components/contacts/ContactList';
import ContactForm from '../components/contacts/ContactForm';
import ContactFilter from '../components/contacts/ContactFilter';
import AuthContext from '../context/auth/authContext';

const Home = props => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

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
