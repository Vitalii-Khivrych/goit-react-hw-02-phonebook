import PropTypes from 'prop-types';
import { List } from './List/List';
import s from './ContactList.module.css';

export function ContactList({ data, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {data.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
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

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
