import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NearbyDrivers from './components/screens/NearbyDrivers';
import Driver from './components/screens/Driver';
import Info from './components/screens/Info';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import LoginAs from './components/screens/LoginAs';
import DriverProfile from './components/screens/DriverProfile';
import Location from './components/screens/Confirm';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useState, useEffect } from 'react';
import DriverActivate from './components/screens/DriverActivate';
import DriverLogin from './components/screens/DriverLogin';

// ... (imports)

const Drawer = createDrawerNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(loggedIn);
      setLoggedIn(!!user); // Update the state based on user existence.
    });

    return () => unsubscribe(); // Cleanup the effect.

  }, []); // Dependency array is empty to run the effect only once on mount.

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="LoginAs"
          component={LoginAs}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Nearby Drivers"
          component={NearbyDrivers}
        />
        <Drawer.Screen
          name="Driver"
          component={Info}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Hire Driver"
          component={Driver}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Driver Profile"
          component={DriverProfile}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="DriverActivate"
          component={DriverActivate}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />

        <Drawer.Screen
          name="DriverLogin"
          component={DriverLogin}
          options={{ headerShown: false }}
        />



      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// ... (styles)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
