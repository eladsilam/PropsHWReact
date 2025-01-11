import PropTypes from 'prop-types';

import classes from './header.module.css';

export default function Header({ text }) {
  return (
    <header className={classes.header}>
      <h1>{text}</h1>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string,
};
