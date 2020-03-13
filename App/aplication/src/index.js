import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

var { height } = Dimensions.get('window');

var box_count = 2;
var box_height = height / box_count;

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    box: {
        height: box_height,
    },
    box1: {
        backgroundColor: '#fff',
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -10
    },
    box2: {
        backgroundColor: '#e3aa1a',
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -10,
        marginTop: -10
    }
});

export default class extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, styles.box1]}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Bombillas')}
                    >
                        <Image
                            style={{ width: 230, height: 230 }}
                            source={require('../assets/bonbillas.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={[styles.box, styles.box2]}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Calculadora')}
                    >
                        <Image
                            style={{ width: 250, height: 250 }}
                            source={require('../assets/calculadora.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}