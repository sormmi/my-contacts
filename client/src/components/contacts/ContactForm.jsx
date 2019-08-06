import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import PropTypes from 'prop-types';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current  } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

  const clearAll = () => {
      clearCurrent();
  }

  const onSubmit = e => {
    e.preventDefault();

    if (current === null) {
        addContact(contact);
    } else {
        updateContact(contact);
    }
    clearAll();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input type="text" placeholder="name" name="name" value={name} onChange={onChange} />
      <input type="email" placeholder="email" name="email" value={email} onChange={onChange} />
      <input type="text" placeholder="phone" name="phone" value={phone} onChange={onChange} />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        onChange={onChange}
        checked={type === 'personal'}
      />{' '}
      Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        onChange={onChange}
        checked={type === 'professional'}
      />{' '}
      Professional
      <div>
        <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block" />
      </div>
      { current && <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
          </div>}
    </form>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
