import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Product from '../../components/Product';
import Divider from 'material-ui/Divider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';

const styles = {
  radioButton: {
    marginBottom: 16,
    display: 'inline-flex',
    width: '157px',
  },
};
class Home extends React.Component {
  static propTypes = {
    products: React.PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
    };
  }

  sortByHighPrice = (array, key) => {
    return array.sort( function (a, b) {
        let x = a[key]; let y = b[key];
        return ( (x > y) ? -1 : ((x < y) ? 1 : 0));
    });
  }
  sortByLowPrice = (array, key) => {
    return array.sort( function (a, b) {
        let x = a[key]; let y = b[key];
        return ( (x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  isNewProduct = (_product) => {
    return _product.isNew == true;
  }

  handleSortByInput = (event, value) => {
    this.setState({ isNewCampaignSelected: value });
    if (value === 'lPrice') {
      this.state.products = this.sortByLowPrice(this.props.products, 'productPrice');
    } else if (value === 'hPrice') {
      this.state.products = this.sortByHighPrice(this.props.products, 'productPrice');
    } else if(value === 'newItem') {
      this.state.products = this.props.products.filter(this.isNewProduct);
    }
  };
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <TextField
            hintText="Camera"
            floatingLabelText="Search"
          />
          <Divider />
          <RadioButtonGroup
            name="sortBy" defaultSelected="relevance"
            onChange={this.handleSortByInput}
          >
            <RadioButton
              value="relevance"
              label="Relevance"
              style={styles.radioButton}
            />
            <RadioButton
              value="popular"
              label="Popular"
              style={styles.radioButton}
            />
            <RadioButton
              value="lPrice"
              label="Low Price"
              style={styles.radioButton}
            />
            <RadioButton
              value="hPrice"
              label="High Price"
              style={styles.radioButton}
            />
            <RadioButton
              value="newItem"
              label="New"
              style={styles.radioButton}
            />
          </RadioButtonGroup>
          {this.state.products.map((_product, index) => (
              <Product key={index} productDesc={_product} />
          ))}
        </div>
      </div>
    );
  }
}
export default withStyles(s)(Home);
