import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, List} from '../../components';
import {Fire} from '../../config';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation, route}) => {
  const [listDoctor, setListDoctor] = useState([]);
  const itemCategory = route.params;

  useEffect(() => {
    callDoctorByCategory(itemCategory.category);
  }, [itemCategory.category]);

  const callDoctorByCategory = category => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setListDoctor(data);
        }
      });
  };
  return (
    <View style={styles.page}>
      <Header
        title={`Pilih ${itemCategory.category}`}
        type="dark"
        onPress={() => navigation.goBack()}
      />
      {listDoctor.map(doctor => {
        return (
          <List
            type="next"
            key={doctor.id}
            profile={{uri: doctor.data.photo}}
            name={doctor.data.fullName}
            desc={doctor.data.gender}
            onPress={() => navigation.navigate('DoctorProfile', doctor)}
          />
        );
      })}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
