import React from 'react';

import classes from './FooterNav.module.css';

const FooterNav = () => {
  return (
    <footer className={classes.App_footer}>
      <nav className={classes.Bottombar}>
        <img src="./amazon-logo.png" alt="Amazon logo" />
      </nav>
    </footer>
  );
};

export default FooterNav;
