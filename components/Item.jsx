import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

function Item({name, price}) {
  const handleTextClick = () => {
    alert(`${name} was added to cart!`);
  };

  return (
    <View key={name}>
      <Text  onPress={() => handleTextClick()}>{name}</Text>
      <Text>{price} €</Text>
    </View>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
