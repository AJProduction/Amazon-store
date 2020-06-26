import React from 'react';

import classes from './ProductPreview.module.css';
import ProductData from '../ProductData';

const ProductPreview = (props) => {
  const currentHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : '0' + new Date().getHours();
  const currentMinute =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : '0' + new Date().getMinutes();
  return (
    <div className={classes.ProductPreview}>
      <img
        src={props.currentPreviewImage}
        alt={ProductData.colorOptions[1].styleName}
      />

      {props.showHeartBeatSection ? (
        <div className={classes.HeartBeatSection}>
          <i class="fas fa-heartbeat"></i>
          <p>78</p>
        </div>
      ) : (
        <div className={classes.TimeSection}>
          <p>{`${currentHour}:${currentMinute}`}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
