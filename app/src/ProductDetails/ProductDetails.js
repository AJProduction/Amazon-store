import React from 'react';

import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.ProductImage];
    if (pos === 0) {
      classArr.push(classes.SelectedProductImage);
    }
    return (
      <img
        key={pos}
        className={classArr.join(' ')}
        src={item.imageUrl}
        alt={item.styleName}
      />
    );
  });

  const featureList = props.data.featureList.map((list, pos) => {
    const classArr = [classes.FeatureItem];
    if (pos === 0) {
      classArr.push(classes.SelectedFeatureItem);
    }
    return (
      <button key={pos} className={classArr.join(' ')}>
        {list}
      </button>
    );
  });
  return (
    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{props.data.title}</h1>
      <p className={classes.ProductDescription}>{props.data.description}</p>

      <h3 className={classes.SectionHeading}>Select Color</h3>
      <div>
        {colorOptions}

        {/* <img
          className={[classes.ProductImage, classes.SelectedProductImage].join(
            ' '
          )}
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
        /> */}
      </div>
      <h3 className={classes.SectionHeading}>Features</h3>
      <div>
        {featureList}
        {/* <button
          className={[classes.FeatureItem, classes.SelectedFeatureItem].join(
            ' '
          )}
        >
          Time
        </button> */}
      </div>

      <button className={classes.PrimaryButton}>Buy Now</button>
    </div>
  );
};

export default ProductDetails;
