// import PropTypes from 'prop-types';

export function List({ contactId, name, number, onClick }) {
  return (
    <>
      <p>
        {name}: {number}{' '}
      </p>
      <button type="button" onClick={() => onClick(contactId)}>
        Delete
      </button>
    </>
  );
}
