// import PropTypes from 'prop-types';
import { List } from './List/List';

export function ContactList({ data, onDeleteContact }) {
  return (
    <ul>
      {data.map(({ id, name, number }) => (
        <li key={id}>
          <List
            contactId={id}
            name={name}
            number={number}
            onClick={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
}
