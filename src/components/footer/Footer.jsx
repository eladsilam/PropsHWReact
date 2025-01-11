
import PropTypes from 'prop-types';

import classes from './footer.module.css'

export default function  Footer({year, name}) {
  return (
    <footer className={classes.footer}>
      {/* inside {} we write JavaScript */}
      &copy; {year} {name}
    </footer>
  );
}

Footer.propTypes = {
  year: PropTypes.number,
  name: PropTypes.string,
};


