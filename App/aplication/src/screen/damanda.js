import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TextInput, Button } from 'react-native';

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
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5
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
            largoH: '',
            anchoP: '',
            largoP: '',
            anchoC: '',
            largoC: '',
            anchoS: '',
            largoS: '',
            anchoG: '',
            largoG: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, styles.box1]}>
                    <View style={{ flexDirection: 'column', margin: 20 }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20 }}>
                            Datos para los calculos
                        </Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Habitaciones
                        </Text>
                        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                placeholder="Numero"
                                placeholderTextColor='#929395'
                                onChangeText={(numeroH) => this.setState({ numeroH })}
                                value={this.state.text}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                            />
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                placeholder="Ancho"
                                placeholderTextColor='#929395'
                                onChangeText={(anchoH) => this.setState({ anchoH })}
                                value={this.state.text}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                            />
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, textAlign: 'center', marginRight: 20 }}
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
                    <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Banos
                        </Text>
                        <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: '#000', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                placeholder="Numero"
                                placeholderTextColor='#000'
                                onChangeText={(numeroB) => tBis.setState({ numeroB })}
                                value={this.state.text}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                            />
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: '#000', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                placeholder="Ancho"
                                placeholderTextColor='#000'
                                onChangeText={(anchoB) => this.setState({ anchoB })}
                                value={this.state.text}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                            />
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: '#000', borderBottomWidth: 2, width: 100, textAlign: 'center', marginRight: 20 }}
                                placeholder="Largo"
                                placeholderTextColor='#000'
                                onChangeText={(largoB) => this.setState({ largoB })}
                                value={this.state.text}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 25, }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 75 }}>Patio: </Text>
                            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: "flex-end", alignContent: 'center' }}>
                                <TextInput
                                    style={{ height: 30, fontSize: 15, borderColor: '#000', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                    placeholder="Ancho"
                                    placeholderTextColor='#000'
                                    onChangeText={(anchoP) => this.setState({ anchoP })}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                                <TextInput
                                    style={{ height: 30, fontSize: 15, borderColor: '#000', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                    placeholder="Largo"
                                    placeholderTextColor='#000'
                                    onChangeText={(largoP) => this.setState({ largoP })}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.box, styles.box3]}>
                    <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 15, }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 65 }}>Cocina: </Text>
                            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: "flex-end", alignContent: 'center' }}>
                                <TextInput
                                    style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                    placeholder="Ancho"
                                    placeholderTextColor='#929395'
                                    onChangeText={(anchoC) => this.setState({ anchoC })}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                                <TextInput
                                    style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                    placeholder="Largo"
                                    placeholderTextColor='#929395'
                                    onChangeText={(largoC) => this.setState({ largoC })}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 15, }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 85 }}>Sala: </Text>
                            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: "flex-end", alignContent: 'center' }}>
                                <TextInput
                                    style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                    placeholder="Ancho"
                                    placeholderTextColor='#929395'
                                    onChangeText={(anchoS) => this.setState({ anchoS })}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                                <TextInput
                                    style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                    placeholder="Largo"
                                    placeholderTextColor='#929395'
                                    onChangeText={(largoS) => this.setState({ largoS })}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 15, }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 65 }}>Garaje: </Text>
                            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: "flex-end", alignContent: 'center' }}>
                                <TextInput
                                    style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                    placeholder="Ancho"
                                    placeholderTextColor='#929395'
                                    onChangeText={(anchoD) => this.setState({ anchoD })}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                                <TextInput
                                    style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                    placeholder="Largo"
                                    placeholderTextColor='#929395'
                                    onChangeText={(largoD) => this.setState({ largoD })}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.box, styles.box4]}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{ width: 200, marginRight: 3 }}>
                            <Button
                                title="Calcular bombillas"
                                onPress={
                                    () => {
                                        (this.state.longitud !== '' && this.state.tension !== '' && this.state.voltaje !== ''
                                            && this.state.temperatura !== '' && this.state.horizontal !== '' && this.state.vertical !== '')
                                            ? calcular(
                                                this.state.longitud, this.state.tension,
                                                this.state.voltaje, this.state.temperatura,
                                                this.state.horizontal, this.state.vertical,
                                                this.state.aislante, this.state.monofasico, this.state.montaje, this.state.tipo_longitud, this.state.demanda)
                                            : alert("complete todos los campos")
                                    }
                                }
                                color="#000962"
                            />
                        </View>
                        <View style={{ width: 200 }}>
                            <Button
                                title="Calcular Tomas"
                                onPress={
                                    () => {
                                        (this.state.longitud !== '' && this.state.tension !== '' && this.state.voltaje !== ''
                                            && this.state.temperatura !== '' && this.state.horizontal !== '' && this.state.vertical !== '')
                                            ? calcular(
                                                this.state.longitud, this.state.tension,
                                                this.state.voltaje, this.state.temperatura,
                                                this.state.horizontal, this.state.vertical,
                                                this.state.aislante, this.state.monofasico, this.state.montaje, this.state.tipo_longitud, this.state.demanda)
                                            : alert("complete todos los campos")
                                    }
                                }
                                color="#000962"
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}