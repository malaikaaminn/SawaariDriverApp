import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DriverActivate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver Profile</Text>
      <Button
        title="Activate Account"
        onPress={() => alert('Wait for requests to come through.')}
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default DriverActivate;
