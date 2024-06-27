/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface MobileNumberInputProps {
    value?: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    label?: string;
    placeHolder?: string;
    keyboardType?: any;
}

const MobileNumberInput: React.FC<MobileNumberInputProps> = ({
    onChangeText,
    placeHolder,
    value,
    keyboardType,
}) => {

    return (
        <View style={styles.container}>
            <View style={styles.countryCodeContainer}>
                <Image
                    source={require('../../assets/flag.png')}
                    style={styles.flag}
                />
                <Text style={styles.callingCode}>+966</Text>
                <TouchableOpacity>
                    <Image source={require('../../assets/dropDown.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.separator}/>
            <TextInput
                style={styles.input}
                placeholder={placeHolder}
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E8ECEF',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        width: '100%',
    },
    countryCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flag: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    callingCode: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#02111A',
        marginRight: 5,
    },
    dropdownIcon: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#02111A',
    },
    separator: {
        width: 1,
        height: '100%',
        backgroundColor: '#C0C0C0',
        marginHorizontal: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#02111A',
    },
});

export default MobileNumberInput;
