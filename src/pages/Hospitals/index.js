import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILHospitalBG } from '../../assets/illustration';
import { ListHospital } from '../../components';
import { Fire } from '../../config';
import { colors, fonts, showError } from '../../utils';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    Fire.database()
      .ref('hospitals/')
      .once('value')
      .then(res => {
        console.log('data: ', res.val());
        if (res.val()) {
          setHospitals(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }, []);
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {hospitals.map(item => {
          return (
            <ListHospital
              key={item.id}
              type={item.type}
              image={item.image}
              address={item.location}
              name={item.name}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
