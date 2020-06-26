import React, { Component } from 'react';

import classes from './App.module.css';

import ProductData from './ProductData';

import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import FooterNav from './FooterNav/FooterNav';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImage: ProductData.colorOptions[0].imageUrl,
    showHeartBeatSection: false,
  };

  render() {
    return (
      <div className={classes.App}>
        <Topbar />

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            {/* Product Preview Component  */}
            <ProductPreview
              currentPreviewImage={this.state.currentPreviewImage}
              showHeartBeatSection={this.state.showHeartBeatSection}
            />
          </div>

          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} />
          </div>
        </div>

        <FooterNav />
      </div>
    );
  }
}

export default App;
