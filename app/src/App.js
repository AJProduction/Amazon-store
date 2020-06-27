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
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  };

  onColorOptionClick = (pos) => {
    this.setState({ currentPreviewImagePos: pos });
  };

  onFeatureItemClick = (pos) => {
    // let updatedState = false;
    // if (pos === 1) {
    //   updatedState = true;
    // }
    // this.setState({ showHeartBeatSection: updatedState });
    this.setState({ currentSelectedFeature: pos });
  };
  render() {
    return (
      <div className={classes.App}>
        <Topbar />

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            {/* Product Preview Component  */}
            <ProductPreview
              currentPreviewImage={
                this.state.productData.colorOptions[
                  this.state.currentPreviewImagePos
                ].imageUrl
              }
              currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>

          <div className={classes.ProductData}>
            <ProductDetails
              data={this.state.productData}
              onColorOptionClick={this.onColorOptionClick}
              currentPreviewImagePos={this.state.currentPreviewImagePos}
              onFeatureItemClick={this.onFeatureItemClick}
              currentSelectedFeature={this.currentSelectedFeature}
            />
          </div>
        </div>

        <FooterNav />
      </div>
    );
  }
}

export default App;
