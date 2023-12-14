import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from '../../constants/Button';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';

const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const authInstance = getAuth();

    const loginUser = async () => {
        try {
            await signInWithEmailAndPassword(authInstance, email, password);
            navigation.navigate('Nearby Drivers');
        } catch (error) {
            if (
                error.code === "auth/invalid-email" ||
                error.code === "auth/wrong-password"
            ) {
                setError("Your email or password was incorrect");
            } else if (error.code === "auth/email-already-in-use") {
                setError("An account with this email already exists");
            } else {
                setError("There was a problem with your request");
                console.log(error.code);
            }
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        marginVertical: 12,
                        color: 'black'
                    }}>
                        Hi Welcome Back! 👋
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        color: 'black'
                    }}>Hello again you have been missed!</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        marginVertical: 8
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder='Enter your email address'
                            placeholderTextColor='black'
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        marginVertical: 8
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder='Enter your password'
                            placeholderTextColor='black'
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color='black' />
                                ) : (
                                    <Ionicons name="eye" size={24} color='black' />
                                )
                            }
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? 'blue' : undefined}
                    />
                    <Text>Remember Me</Text>
                </View>

                <Button
                    title="Login"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={loginUser} disabled={!email || !password}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: 'grey',
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Or Login with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: 'grey',
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: 'grey',
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />
                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: 'grey',
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />
                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: 'black' }}>Don't have an account ? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: 'blue',
                            marginLeft: 6
                        }}>Register</Text>
                    </TouchableOpacity>
                </View>

                {/* Go Back Button */}
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 20,
                    }}
                >
                    <Text style={{ fontSize: 16, color: 'blue' }}>
                        Go Back
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({});
