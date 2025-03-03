import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

function Item({name, price}) {
  return (
    <View key={name}>
      <Text>{name}</Text>
      <Text>{price} €</Text>
    </View>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
