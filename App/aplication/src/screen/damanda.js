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
            largoG: '',
            total: 0
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
                                placeholder="Ancho (m)"
                                placeholderTextColor='#929395'
                                onChangeText={(anchoH) => this.setState({ anchoH })}
                                value={this.state.text}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                            />
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, textAlign: 'center', marginRight: 20 }}
                                placeholder="Largo (m)"
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
                                onChangeText={(numeroB) => this.setState({ numeroB })}
                                value={this.state.text}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                            />
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: '#000', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                placeholder="Ancho (m)"
                                placeholderTextColor='#000'
                                onChangeText={(anchoB) => this.setState({ anchoB })}
                                value={this.state.text}
                                keyboardType={'numeric'}
                                returnKeyType={'done'}
                            />
                            <TextInput
                                style={{ height: 30, fontSize: 15, borderColor: '#000', borderBottomWidth: 2, width: 100, textAlign: 'center', marginRight: 20 }}
                                placeholder="Largo (m)"
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
                                    placeholder="Ancho (m)"
                                    placeholderTextColor='#000'
                                    onChangeText={(anchoP) => this.setState({ anchoP })}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                                <TextInput
                                    style={{ height: 30, fontSize: 15, borderColor: '#000', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                    placeholder="Largo (m)"
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
                                    placeholder="Ancho (m)"
                                    placeholderTextColor='#929395'
                                    onChangeText={(anchoC) => this.setState({ anchoC })}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                                <TextInput
                                    style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                    placeholder="Largo (m)"
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
                                    placeholder="Ancho (m)"
                                    placeholderTextColor='#929395'
                                    onChangeText={(anchoS) => this.setState({ anchoS })}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                                <TextInput
                                    style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                    placeholder="Largo (m)"
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
                                    placeholder="Ancho (m)"
                                    placeholderTextColor='#929395'
                                    onChangeText={(anchoG) => this.setState({ anchoG })}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                                <TextInput
                                    style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, marginRight: 20, textAlign: 'center' }}
                                    placeholder="Largo (m)"
                                    placeholderTextColor='#929395'
                                    onChangeText={(largoG) => this.setState({ largoG })}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.box, styles.box4]}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 200, marginRight: 3 }}>
                            <Button
                                title="Calcular bombillas"
                                onPress={
                                    () => {
                                        (this.state.anchoH != '' && this.state.numeroH != '' && this.state.largoH != '' &&
                                            this.state.anchoB != '' && this.state.numeroB != '' && this.state.largoB &&
                                            this.state.anchoP != '' && this.state.largoP != '' && this.state.anchoC != '' &&
                                            this.state.largoC != '' && this.state.anchoS != '' &&
                                            this.state.largoS != '' && this.state.anchoG != '' && this.state.largoG != '')
                                            ? CalcularBombillas(this.state.anchoH, this.state.numeroH, this.state.largoH, this.state.anchoB, this.state.numeroB,
                                                this.state.largoB, this.state.anchoP, this.state.largoP, this.state.anchoC, this.state.largoC, this.state.anchoS,
                                                this.state.largoS, this.state.anchoG, this.state.largoG)
                                            : alert("Complete los datos")
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
                                        (this.state.anchoH != '' && this.state.numeroH != '' && this.state.largoH != '' &&
                                            this.state.anchoB != '' && this.state.numeroB != '' && this.state.largoB &&
                                            this.state.anchoP != '' && this.state.largoP != '' && this.state.anchoC != '' &&
                                            this.state.largoC != '' && this.state.anchoS != '' &&
                                            this.state.largoS != '' && this.state.anchoG != '' && this.state.largoG != '')
                                            ? calcularTomas(this.state.anchoH, this.state.numeroH, this.state.largoH, this.state.anchoB, this.state.numeroB,
                                                this.state.largoB, this.state.anchoP, this.state.largoP, this.state.anchoC, this.state.largoC, this.state.anchoS,
                                                this.state.largoS, this.state.anchoG, this.state.largoG)
                                            : alert("Complete los datos")
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

const CalcularBombillas = (anchoH, numeroH, largoH, anchoB, numeroB, largoB, anchoP, largoP, anchoC, largoC, anchoS, largoS, anchoG, largoG) => {
    let valores = {
        anchoH: parseFloat(anchoH),
        numeroH: parseFloat(numeroH),
        largoH: parseFloat(largoH),
        anchoB: parseFloat(anchoB),
        numeroB: parseFloat(numeroB),
        largoB: parseFloat(largoB),
        anchoP: parseFloat(anchoP),
        largoP: parseFloat(largoP),
        anchoC: parseFloat(anchoC),
        largoC: parseFloat(largoC),
        anchoS: parseFloat(anchoS),
        largoS: parseFloat(largoS),
        anchoG: parseFloat(anchoG),
        largoG: parseFloat(largoG)
    }
    let superficieTotal = ((valores.numeroH * valores.anchoH * valores.largoH) + (valores.numeroB * valores.anchoB * valores.largoB) + (valores.anchoP * valores.largoP) +
        (valores.anchoC * valores.largoC) + (valores.anchoS * valores.largoS) + (valores.anchoG * valores.largoG))
    let nivel = determinarNovel(superficieTotal)
    let bombillas = determinarBombillas(valores, nivel)
    alert("Bombillas \nPor cada habitacion: "+bombillas.habitacion+"\nPor cada bano: "+bombillas.bano+"\nPor el patio: "+bombillas.patio+ 
            "\nPor la cocina: "+bombillas.cocina+"\nPor la Sala: "+bombillas.sala+"\nPor el garaje: "+bombillas.garaje)
}

const determinarNovel = (superficieTotal) => {
    if (superficieTotal <= 80)
        return 1;
    else if (superficieTotal <= 140)
        return 2;
    else
        return 3;
}

const determinarBombillas = (valores, nivel) => {
    if (nivel == 1) {
        let habitacion = (valores.anchoH * valores.largoH * 10) / 100
        let bano = (valores.anchoB * valores.largoB * 10) / 100
        let patio = (valores.anchoP * valores.largoP * 10) / 100
        let cocina = (valores.anchoC * valores.largoC * 10) / 100
        let sala = (valores.anchoS * valores.largoS * 10) / 100
        let garaje = (valores.anchoG * valores.largoG * 10) / 100
        return { habitacion: Math.ceil(habitacion), bano: Math.ceil(bano), patio: Math.ceil(patio), cocina: Math.ceil(cocina), sala: Math.ceil(sala), garaje: Math.ceil(garaje) };
    } else if (nivel == 2) {
        let habitacion = (valores.anchoH * valores.largoH * 15) / 100
        let bano = (valores.anchoB * valores.largoB * 15) / 100
        let patio = (valores.anchoP * valores.largoP * 15) / 100
        let cocina = (valores.anchoC * valores.largoC * 15) / 100
        let sala = (valores.anchoS * valores.largoS * 15) / 100
        let garaje = (valores.anchoG * valores.largoG * 15) / 100
        return { habitacion: Math.ceil(habitacion), bano: Math.ceil(bano), patio: Math.ceil(patio), cocina: Math.ceil(cocina), sala: Math.ceil(sala), garaje: Math.ceil(garaje) };
    }
    else {
        let habitacion = (valores.anchoH * valores.largoH * 20) / 100
        let bano = (valores.anchoB * valores.largoB * 20) / 100
        let patio = (valores.anchoP * valores.largoP * 20) / 100
        let cocina = (valores.anchoC * valores.largoC * 20) / 100
        let sala = (valores.anchoS * valores.largoS * 20) / 100
        let garaje = (valores.anchoG * valores.largoG * 20) / 100
        return { habitacion: Math.ceil(habitacion), bano: Math.ceil(bano), patio: Math.ceil(patio), cocina: Math.ceil(cocina), sala: Math.ceil(sala), garaje: Math.ceil(garaje) };
    }
}

const calcularTomas = (anchoH, numeroH, largoH, anchoB, numeroB, largoB, anchoP, largoP, anchoC, largoC, anchoS, largoS, anchoG, largoG) => {
    let valores = {
        anchoH: parseFloat(anchoH),
        numeroH: parseFloat(numeroH),
        largoH: parseFloat(largoH),
        anchoB: parseFloat(anchoB),
        numeroB: parseFloat(numeroB),
        largoB: parseFloat(largoB),
        anchoP: parseFloat(anchoP),
        largoP: parseFloat(largoP),
        anchoC: parseFloat(anchoC),
        largoC: parseFloat(largoC),
        anchoS: parseFloat(anchoS),
        largoS: parseFloat(largoS),
        anchoG: parseFloat(anchoG),
        largoG: parseFloat(largoG)
    }
    let tomas = {
        habitacion: determinarTomasHabitacion(valores),
        bano: 1,
        patio: determinarTomasPatio(valores),
        cocina: determinarTomasCocina(valores),
        sala: determinarTomasSala(valores),
        garaje: determinarTomasGaraje(valores)
    }
    alert("Tomas\nPor cada habitacion: "+tomas.habitacion+"\nPor cada bano: "+tomas.bano+"\nPor el patio: "+tomas.patio+
            "\nPor la cocina: "+tomas.cocina+"\nPor la sala: "+tomas.sala+"\nPOr el Garaje: "+tomas.garaje)
}

const determinarTomasHabitacion = (valores) => {
    let perimetro = Math.ceil((2 * valores.anchoH + 2 * valores.largoH) / 5)
    let area = Math.ceil((valores.largoH * valores.anchoH) / 10)
    if(perimetro > area)
        return perimetro;
    else    
        return area;
}

const determinarTomasBano = (valores) => {
    let perimetro = Math.ceil((2 * valores.anchoB + 2 * valores.largoB) / 5)
    let area = Math.ceil((valores.largoB * valores.anchoB) / 10)
    if(perimetro > area)
        return perimetro;
    else    
        return area;
}

const determinarTomasPatio = (valores) => {
    let perimetro = Math.ceil((2 * valores.anchoP + 2 * valores.largoP) / 5)
    let area = Math.ceil((valores.largoP * valores.anchoP) / 10)
    if(perimetro > area)
        return perimetro;
    else    
        return area;
}

const determinarTomasCocina = (valores) => {
    let perimetro = Math.ceil((2 * valores.anchoC + 2 * valores.largoC) / 5)
    let area = Math.ceil((valores.largoC * valores.anchoC) / 10)
    if(perimetro > area)
        return perimetro;
    else    
        return area;
}

const determinarTomasSala = (valores) => {
    let perimetro = Math.ceil((2 * valores.anchoS + 2 * valores.largoS) / 5)
    let area = Math.ceil((valores.largoS * valores.anchoS) / 10)
    if(perimetro > area)
        return perimetro;
    else    
        return area;
}

const determinarTomasGaraje = (valores) => {
    let perimetro = Math.ceil((2 * valores.anchoG + 2 * valores.largoG) / 5)
    let area = Math.ceil((valores.largoG * valores.anchoG) / 10)
    if(perimetro > area)
        return perimetro;
    else    
        return area;
}