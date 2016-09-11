import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';

export default {

  path: '/',

  async action() {
    const products = [
	    {
	  	  productTitle: 'Test Title Test Title Test Title Test Title',
	  	  productImageSrc: '',
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
	  	  productTitle: 'Test Title Test Title Test Title Test Title',
	  	  productImageSrc: '',
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
	  	  productImageSrc: '',
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
	  	  productTitle: 'Test Title Test Title Test Title Test Title',
	  	  productImageSrc: '',
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
	  	  productTitle: 'Test Title Test Title Test Title Test Title',
	  	  productImageSrc: '',
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
