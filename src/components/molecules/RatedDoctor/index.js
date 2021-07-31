import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconStar } from '../../../assets';
import { colors, fonts } from '../../../utils';

const RatedDoctor = ({onPress, name, desc, avatar}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.avatar}></Image>
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{desc}</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 50 / 2,
  },
  profile: {
    flex: 1,
  },
  name: {
      fontFamily: fonts.primary[600],
      color: colors.text.primary,
      fontSize: 16
  },
  category: {
      fontSize: 12,
      fontFamily: fonts.primary[400],
      color: colors.text.secondary,
      marginTop: 2,
  },
  rate: {
    flexDirection: 'row',
  },
});
