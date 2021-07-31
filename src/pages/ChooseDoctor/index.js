import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor10,
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor9,
} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={DummyDoctor4}
        name="Alexander Janie"
        desc="Wanita"
        onPress={() => navigation.navigate("Chatting")}
      />
      <List
        type="next"
        profile={DummyDoctor6}
        name="John McParker Steve"
        desc="Pria"
      />
      <List
        type="next"
        profile={DummyDoctor9}
        name="Nairobi Putri Hayza"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor10}
        name="James Rivillia"
        desc="Pria"
      />
      <List
        type="next"
        profile={DummyDoctor5}
        name="Liu Yue Tian Park"
        desc="Wanita"
      />
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
