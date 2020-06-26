import React from 'react';

import classes from './App.module.css';
import ProductData from './ProductData';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.App_header}>
        <nav className={classes.Topbar}>
          <img src="./amazon-logo.png" alt="Amazon logo" />
        </nav>
        <div className={classes.info_header}>
          <p>An amazon store app clone by anjola adeuyi "AJ Productionss"</p>
        </div>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src={ProductData.colorOptions[1].imageUrl} />
        </div>
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>
            {ProductData.description}
          </p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            <img
              className={[
                classes.ProductImage,
                classes.SelectedProductImage,
              ].join(' ')}
              src={ProductData.colorOptions[0].imageUrl}
              alt={ProductData.colorOptions[0].styleName}
            />
            <img
              className={classes.ProductImage}
              src={ProductData.colorOptions[1].imageUrl}
              alt={ProductData.colorOptions[1].styleName}
            />
            <img
              className={classes.ProductImage}
              src={ProductData.colorOptions[2].imageUrl}
              alt={ProductData.colorOptions[2].styleName}
            />
            <img
              className={classes.ProductImage}
              src={ProductData.colorOptions[3].imageUrl}
              alt={ProductData.colorOptions[3].styleName}
            />
          </div>
        </div>
      </div>

      <footer className={classes.App_footer}>
        <nav className={classes.Bottombar}>
          <img src="./amazon-logo.png" alt="Amazon logo" />
        </nav>
      </footer>
    </div>
  );
}

export default App;
