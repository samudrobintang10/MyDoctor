import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconRemovePhoto } from '../../../assets';
import { colors, fonts } from '../../../utils';

const Profile = ({name, desc, photo, isRemove, onPress}) => {
  return (
    <View style={styles.container}>
      {!isRemove && ( 
      <View style={styles.borderProfile}>
        <Image source={photo} style={styles.avatar} />
        {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
      </View>
      )}
      {isRemove && (
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
          {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
        </TouchableOpacity>
      )}
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  removePhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
    left: 94,
    top: 92,
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    marginTop: 16,
    color: colors.text.primary,
    textAlign: 'center',
  },
  profession: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    marginTop: 2,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
