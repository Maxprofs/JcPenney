import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Product.css';
import Paper from '../../../node_modules/material-ui/Paper';
import Divider from 'material-ui/Divider';
import Rater from 'react-rater';
import Checkbox from 'material-ui/Checkbox/Checkbox';

const style = {
  height: 400,
  width: 250,
  margin: 20,
  textAlign: 'center',
  display: 'flex',
  'flex-direction': 'column',
};

class Product extends React.Component {
  static propTypes = {
    productDesc: React.PropTypes.shape({
      productTitle: React.PropTypes.string,
      productImageSrc: React.PropTypes.string,
      productPrice: React.PropTypes.number,
      productEmiPrice: React.PropTypes.number,
      productFeature: React.PropTypes.array,
      productRating: React.PropTypes.shape({
        numberOfRatings: React.PropTypes.number,
        averageRating: React.PropTypes.number,
      }),
      isNew: React.PropTypes.bool,
      isPopular: React.PropTypes.bool,
      productType: React.PropTypes.string,
    }).isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.root}>
        <Paper style={style} zDepth={2}>
          <div className={s.title}>
            {this.props.productDesc.productTitle}
          </div>
          <img
            src={this.props.productDesc.productImageSrc}
            className={s.imageStyle} role="presentation"
          />
          <span className={s.spanStyle}>
            <Rater className={s.raterStyle}  total={5} rating={2} limit={4} />
            ({this.props.productDesc.productRating.numberOfRatings} ratings) >
          </span>
          <Divider />
          <span>
            <div className={s.priceDiv}>
              Rs. {this.props.productDesc.productPrice}
            </div>
            <div className={s.emiDiv}>
              EMI from Rs. {this.props.productDesc.productEmiPrice}
            </div>
          </span>
          <Divider />
          <ul>
            {this.props.productDesc.productFeature.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <Divider />
          <div className={s.addToCompareStyle}>
            <Checkbox className={s.checkboxStyle} />
            Add to compare
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(s)(Product);
