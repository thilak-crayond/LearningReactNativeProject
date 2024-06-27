/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTextInput from '../../components/input/index';
import MobileInput from '../../components/mobileInput';

function RegisterScreen(): React.JSX.Element {
    const [formState, setFormState] = useState({
        name: '',
        mobile: '',
        email: '',
        description: '',
        isFocused: {
            name: false,
            mobile: false,
            email: false,
            description: false,
        },
    });

    const handleInputChange = (key: string, value: string) => {
        setFormState({ ...formState, [key]: value });
    };

    const handleFocusChange = (key: string, value: boolean) => {
        setFormState((prevState) => ({
            ...prevState,
            isFocused: { ...prevState.isFocused, [key]: value },
        }));
    };

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.backgroundStyle}>
                <View style={styles.container}>
                    <Image source={require('../../assets/Group.png')} />
                    <Text style={styles.titleText}>Earn loyalty for every purchase</Text>
                    <View style={styles.drawerStyle}>
                        <Text style={styles.drawerTitle}>Profile details</Text>
                        <Text style={styles.descriptionText}>
                            Please provide your basic details to proceed further
                        </Text>
                        <View>
                            <CustomTextInput
                                label='Name'
                                value={formState.name}
                                onChangeText={(value: any) => handleInputChange('name', value)}
                                setIsFocused={(value: boolean) => handleFocusChange('name', value)}
                                isFocused={formState.isFocused.name}
                                placeHolder='Enter Your Name'
                            />
                            <MobileInput
                                value={formState.mobile}
                                label='Mobile'
                                onChangeText={(value: any) => handleInputChange('mobile', value)}
                                placeHolder='Enter Your Mobile Number'
                                keyboardType='phone-pad'
                            />
                            <CustomTextInput
                                label='Email'
                                value={formState.email}
                                onChangeText={(value: any) => handleInputChange('email', value)}
                                setIsFocused={(value: boolean) => handleFocusChange('email', value)}
                                isFocused={formState.isFocused.email}
                                placeHolder='Enter Your Email'
                            />
                            <CustomTextInput
                                label='Address'
                                value={formState.description}
                                onChangeText={(value: any) => handleInputChange('description', value)}
                                setIsFocused={(value: boolean) => handleFocusChange('description', value)}
                                isFocused={formState.isFocused.description}
                                placeHolder='Enter Address'
                                multiline={true}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() => Alert.alert('Button with adjusted color pressed')}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#CCEBE1',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#02111A',
        width: '50%',
        textAlign: 'center',
        marginTop: 12,
        marginBottom: 26,
    },
    drawerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#02111A',
        textAlign: 'center',
        marginTop: 12,
    },
    descriptionText: {
        color: '#4E585E',
        textAlign: 'center',
        fontSize: 14,
        paddingHorizontal: 72,
        marginTop: 12,
    },
    drawerStyle: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 16,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    buttonStyle: {
        marginTop: 20,
        backgroundColor: '#30AF89',
        borderRadius: 8,
        alignSelf: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 14,
        padding: 16,
    },
});

export default RegisterScreen;
