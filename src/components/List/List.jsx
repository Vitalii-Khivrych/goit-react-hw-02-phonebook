import PropTypes from 'prop-types';
import s from './List.module.css';

export function List({ name, number, onClick }) {
  return (
    <>
      <p className={s.text}>
        {name}: {number}{' '}
      </p>
      <button className={s.btn} type="button" onClick={onClick}>
        Delete
      </button>
    </>
  );
}

List.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
