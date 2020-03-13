import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TextInput } from 'react-native';

var { height } = Dimensions.get('window');

var box_count = 5;
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
        flex: 1,
        marginBottom: 10
    },
    box2: {
        backgroundColor: '#e3aa1a',
        flex: 1,
    },
    box3: {
        backgroundColor: '#fff',
        flex: 1
    },
    box4: {
        backgroundColor: '#e3aa1a',
        flex: 1
    }
});

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numeroH: '',
            anchoH: '',
            largoH: '',
            numeroB: '',
            anchoB: '',
            largoH: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, styles.box1]}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center', margin: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
                            Datos para los calculos
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                            Habitaciones
                        </Text>
                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 80, marginRight: 20, textAlign: 'center' }}
                                placeholder="Numero"
                                placeholderTextColor='#929395'
                                onChangeText={(numeroH) => this.setState({ numeroH })}
                                value={this.state.text}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                            />
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 80, marginRight: 20, textAlign: 'center' }}
                                placeholder="Ancho"
                                placeholderTextColor='#929395'
                                onChangeText={(anchoH) => this.setState({ anchoH })}
                                value={this.state.text}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                            />
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 80, textAlign: 'center', marginRight: 20 }}
                                placeholder="Largo"
                                placeholderTextColor='#929395'
                                onChangeText={(largoH) => this.setState({ largoH })}
                                value={this.state.text}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                            />
                        </View>
                    </View>
                </View>
                <View style={[styles.box, styles.box2]}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center', marginLeft: 20, marginTop: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                            Banos
                        </Text>
                        <View style={{ marginTop: 5, flexDirection: 'row' }}>
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 80, marginRight: 20, textAlign: 'center' }}
                                placeholder="Numero"
                                placeholderTextColor='#929395'
                                onChangeText={(numeroB) => tBis.setState({ numeroB })}
                                value={this.state.text}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                            />
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 80, marginRight: 20, textAlign: 'center' }}
                                placeholder="Ancho"
                                placeholderTextColor='#929395'
                                onChangeText={(anchoB) => this.setState({ anchoB })}
                                value={this.state.text}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                            />
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 80, textAlign: 'center', marginRight: 20 }}
                                placeholder="Largo"
                                placeholderTextColor='#929395'
                                onChangeText={(largoB) => this.setState({ largoB })}
                                value={this.state.text}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                            />
                        </View>
                    </View>
                </View>
                <View style={[styles.box, styles.box3]}></View>
                <View style={[styles.box, styles.box4]}></View>
            </View>
        );
    }
}