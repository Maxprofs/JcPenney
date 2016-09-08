import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Product.css';
import Paper from '../../../node_modules/material-ui/Paper';
import Divider from 'material-ui/Divider';

const style = {
  height: 300,
  width: 250,
  margin: 20,
  textAlign: 'center',
  display: 'flex',
  'flex-direction': 'column',
};

function Product() {
  return (
    <div>
      <Paper style={style} zDepth={2}>
        <div className={s.title}>We want to implement product search and filter functionality</div>
        <Divider />
      </Paper>
    </div>
  );
}

Product.propTypes = {
  className: PropTypes.string,
};

export default withStyles(s)(Product);
