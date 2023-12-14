import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { drivers } from '../apis/DATA';
import DriverContainer from './Container';
import { auth } from '../../config/firebase';
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const NearbyDrivers = ({ navigation }) => {
    //const auth =getAuth();

    const goBackToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={goBackToLogin}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                }}
            >
                <Text style={{ fontSize: 16, color: 'blue' }}>
                    Go Back to Login
                </Text>
            </TouchableOpacity>

            <FlatList
                data={drivers}
                keyExtractor={(item) => item.driverId}
                renderItem={({ item }) => {
                    return <DriverContainer driver={item} navigation={navigation} />;
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default NearbyDrivers;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: '#d6d8db',
    },
});
