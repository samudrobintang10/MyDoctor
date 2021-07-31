import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';

const Link = ({title, size, align, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
    text: (size, align) => ({
      color: colors.text.secondary,
      fontSize: size,
      fontFamily: fonts.primary[400],
      textDecorationLine: 'underline',
      textAlign: align,
    }),
});
