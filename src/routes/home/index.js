import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';

export default {

  path: '/',

  async action() {
    const products = [
	    {
	  	  productTitle: '1Test Title Test Title Test Title Test Title',
	  	  productImageSrc: 'apple-touch-icon.png',
	  	  productPrice: 15005,
		  productEmiPrice: 350,
		  productFeature: [
	      	'20.1 MP',
	      	'Sensor Tpe CCD',
	      	'LCD Size 2.7',
	      ],
		  productRating: {
		    numberOfRatings: 120,
		    averageRating: 3,
		  },
		  isNew: true,
		  isPopular: true,
		  productType: 'camera',
		},
		{
	  	  productTitle: '2Test Title Test Title Test Title Test Title',
	  	  productImageSrc: 'cam1.jpeg',
	  	  productPrice: 15000,
		  productEmiPrice: 350,
		  productFeature: [
	      	'20.1 MP',
	      	'Sensor Tpe CCD',
	      	'LCD Size 2.7',
	      ],
		  productRating: {
		    numberOfRatings: 120,
		    averageRating: 3,
		  },
		  isNew: true,
		  isPopular: true,
		  productType: 'camera',
		},
		{
	  	  productTitle: 'aTest Title Test Title Test Title Test Title',
	  	  productImageSrc: 'cam2.jpeg',
	  	  productPrice: 15080,
		  productEmiPrice: 350,
		  productFeature: [
	      	'20.1 MP',
	      	'Sensor Tpe CCD',
	      	'LCD Size 2.7',
	      ],
		  productRating: {
		    numberOfRatings: 120,
		    averageRating: 3,
		  },
		  isNew: false,
		  isPopular: true,
		  productType: 'camera',
		},
		{
	  	  productTitle: '13Test Title Test Title Test Title Test Title',
	  	  productImageSrc: 'cam3.jpeg',
	  	  productPrice: 15000,
		  productEmiPrice: 350,
		  productFeature: [
	      	'20.1 MP',
	      	'Sensor Tpe CCD',
	      	'LCD Size 2.7',
	      ],
		  productRating: {
		    numberOfRatings: 120,
		    averageRating: 3,
		  },
		},
		{
	  	  productTitle: '23Test Title Test Title Test Title Test Title',
	  	  productImageSrc: 'cam1.jpeg',
	  	  productPrice: 15001,
		  productEmiPrice: 350,
		  productFeature: [
	      	'20.1 MP',
	      	'Sensor Tpe CCD',
	      	'LCD Size 2.7',
	      ],
		  productRating: {
		    numberOfRatings: 120,
		    averageRating: 3,
		  },
		  isNew: false,
		  isPopular: true,
		  productType: 'normal',
		}
	];
    return <Home products={products} />;
  },

};
