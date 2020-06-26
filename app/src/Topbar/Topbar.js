import React from 'react';

import classes from './Topbar.module.css';

const Topbar = () => {
  return (
    <header>
      <nav className={classes.Topbar}>
        <img src="./amazon-logo.png" alt="Amazon logo" />
      </nav>
      <div className={classes.info_header}>
        <p>An amazon store app clone by anjola adeuyi "AJ Productionss"</p>
      </div>
    </header>
  );
};

export default Topbar;
