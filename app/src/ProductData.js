const ProductData = {
  title: 'Apple Watch Series 3 (GPS, 38mm) - The Smartest Watch',
  description:
    'The Apple Watch Series 3 has Retina display, GPS, Swimproof, Optical heart sensor, Stores music, Emergency SOS, S3 chip with dual-core processor and the App Store on your wrist',
  colorOptions: [
    {
      styleName: 'Black Strap',
      imageUrl: './productImage/productImage0.png',
    },
    {
      styleName: 'Red Strap',
      imageUrl: './productImage/productImage1.png',
    },
    {
      styleName: 'Blue Strap',
      imageUrl: './productImage/productImage2.png',
    },
    {
      styleName: 'Purple Strap',
      imageUrl: './productImage/productImage3.png',
    },
  ],
  featureList: ['Time', 'Heart Rate'],
};

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;
