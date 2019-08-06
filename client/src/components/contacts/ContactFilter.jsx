import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import PropTypes from 'prop-types';

const ContactFilter = props => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;

  const search = useRef('');

  useEffect(() => {
    if (filtered === null) {
      search.current.value = '';
    }
  });

  const onChange = e => {
    if (search.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input ref={search} type="text" placeholder="Filter contacts" onChange={onChange} />
    </form>
  );
};

ContactFilter.propTypes = {};

export default ContactFilter;
