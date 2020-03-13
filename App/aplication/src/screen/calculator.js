//Stores
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Dimensions, Button } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import ToggleSwitch from 'toggle-switch-react-native'

// tabless
const tabla517STrifasica = [29.00, 20.00, 12.00, 7.50, 5.10, 3.00, 1.96, 1.28, 0.96, 0.73, 0.54, 0.42, 0.35, 0.31, 0.27, 0.23, 0.20, 0.18, 0.16]
const tabla517SMonofasica = [34.00, 23.00, 14.00, 8.70, 5.80, 3.50, 3.31, 1.52, 1.12, 0.82, 0.63, 0.49, 0.41, 0.36, 0.32, 0.26, 0.23, 0.20, 0.19]
const tablas517S = [1, 1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500]

const tabla53aS = [1.0, 1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500]
const tabla53aPvc = [12, 15.5, 21, 28, 36, 50, 68, 89, 111, 134, 171, 207, 239, 272, 310, 364, 419, 502, 578]
const tabla53bPvc = [13.5, 17.5, 24, 32, 41, 57, 76, 101, 125, 151, 192, 232, 269, 309, 353, 415, 473, 566, 651]

const tabla534a = [16, 20, 27, 36, 48, 66, 88, 116, 144, 175, 222, 268, 311, 353, 402, 474, 545, 652, 750]
const tabla534b = [18, 23, 31, 42, 54, 74, 100, 132, 163, 198, 252, 305, 353, 406, 462, 543, 620, 742, 852]

const tabla56 = [10, 15, 20, 25, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80]
const tabla56Pvc = [1.22, 1.17, 1.12, 1.07, 0.93, 0.87, 0.79, 0.71, 0.61, 0.5]
const tabla56Otros = [1.15, 1.12, 1.08, 1.04, 0.98, 0.96, 0.94, 0.92, 0.87, 0.84, 0.8, 0.72, 0.61]

const tabla591 = [1, 0.92, 0.85, 0.82, 0.8, 0.79]
const tabla592 = [0.94, 0.87, 0.81, 0.78, 0.76, 0.75]
const tabla593 = [0.91, 0.84, 0.78, 0.74, 0.72, 0.71]
const tabla594 = [0.88, 0.81, 0.76, 0.73, 0.71, 0.7]
const tabla595 = [0.87, 0.8, 0.75, 0.72, 0.7, 0.69]
const tabla596 = [0.86, 0.79, 0.74, 0.72, 0.7, 0.68]

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
        flex: 1.5
    },
    box2: {
        backgroundColor: '#fff',
        flex: 1.5
    },
    box3: {
        backgroundColor: '#e3aa1a',
        flex: 2
    },
    box4: {
        backgroundColor: '#e3aa1a',
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    box5: {
        backgroundColor: '#fff',
        flex: 3
    }
});

//OPciones radio button
var props_longitud = [
    { label: 'M  ', value: 0 },
    { label: 'Km', value: 1 }
];
var props_aislante = [
    { label: 'PVC ', value: 0 },
    { label: 'PET ', value: 1 },
    { label: 'EPR ', value: 2 },
    { label: 'XLPE', value: 3 },
];
//main component
export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            longitud: '',
            tipo_longitud: 0,
            tension: '',
            temperatura: '',
            aislante: 0,
            monofasico: false,
            montaje: true,
            horizontal: '',
            vertical: '',
            demanda: '',
            voltaje: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, styles.box1]}>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 25, justifyContent: 'center', alignContent: 'center' }}>
                        <TextInput
                            style={{ height: 40, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 170, marginRight: 35 }}
                            placeholder="Longitud"
                            placeholderTextColor='#929395'
                            onChangeText={(longitud) => longitud > 0 ? this.setState({ longitud }) : alert("Datos incorrectos. Debe ser mayor a 0")}
                            value={this.state.text}
                            keyboardType={'numeric'}
                            returnKeyType={'done'}
                        />
                        <RadioForm
                            radio_props={props_longitud}
                            initial={this.state.tipo_longitud}
                            formHorizontal={true}
                            onPress={(tipo_longitud) => { this.setState({ tipo_longitud }) }}
                            buttonColor={'#000'}
                            selectedButtonColor={'gray'}
                            labelColor={'#000'}
                        />
                    </View>
                </View>
                <View style={[styles.box, styles.box2]}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                        <Text style={{ marginTop: 1, marginLeft: 20, fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>Caida de Tensión</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 20, alignContent: 'center', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', padding: 0 }}>
                                <TextInput
                                    style={{ height: 30, fontSize: 20, borderColor: 'gray', borderBottomWidth: 2, width: 100 }}
                                    onChangeText={(tension) => (tension > 0 && tension <= 5) ? this.setState({ tension }) : alert("No debe superar el 5%")}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                                <Text style={{ fontWeight: '600', marginRight: 10 }}>%</Text>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 0, marginRight: 10 }}>
                                <TextInput
                                    placeholder='Voltaje'
                                    style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, textAlign: 'center' }}
                                    onChangeText={(voltaje) => this.setState({ voltaje })}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                                <Text style={{ fontSize: 18, fontWeight: '600', marginRight: 10 }}>V</Text>
                                <TextInput
                                    placeholder='Temperatura'
                                    style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 100, textAlign: 'center' }}
                                    onChangeText={(temperatura) => (temperatura > 0 && temperatura <= 60) ? this.setState({ temperatura }) : alert("No debe superar 60 C")}
                                    value={this.state.text}
                                    keyboardType={'numeric'}
                                    returnKeyType={'done'}
                                />
                                <Text style={{ fontSize: 18, fontWeight: '600' }}>°C</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.box, styles.box3]}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center', marginLeft: 15, marginTop: 20 }}>
                        <Text style={{ fontSize: 20, marginLeft: 10, marginBottom: 10, fontWeight: 'bold' }}>Aislante</Text>
                        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                            <RadioForm
                                radio_props={props_aislante}
                                initial={this.state.aislante}
                                formHorizontal={true}
                                onPress={(aislante) => { this.setState({ aislante }) }}
                                buttonColor={'#000'}
                                selectedButtonColor={'gray'}
                                labelColor={'#000'}
                            />
                        </View>
                    </View>
                </View>
                <View style={[styles.box, styles.box5]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'column', marginTop: 10, marginLeft: 10, marginRight: 20 }}>
                            <View style={{ marginBottom: 15 }}>
                                <Text style={{ marginBottom: 5, fontWeight: 'bold', fontSize: 20 }}>Monofasico</Text>
                                <ToggleSwitch
                                    isOn={this.state.monofasico}
                                    onColor="gray"
                                    offColor="green"
                                    label="Si"
                                    labelStyle={{ color: "black", fontWeight: "600", fontSize: 14 }}
                                    size="medium"
                                    onToggle={() => {
                                        const monofasico = !this.state.monofasico
                                        this.setState({ monofasico })
                                    }}
                                />
                            </View>
                            <View>
                                <Text style={{ marginBottom: 5, fontWeight: 'bold', fontSize: 20 }}>Forma de montar</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <ToggleSwitch
                                        isOn={this.state.montaje}
                                        onColor="gray"
                                        offColor="green"
                                        label="1-7"
                                        labelStyle={{ color: "black", fontWeight: "600", fontSize: 14, marginRight: 2 }}
                                        size="medium"
                                        onToggle={() => {
                                            const montaje = !this.state.montaje
                                            this.setState({ montaje })
                                        }}
                                    />
                                    <Text style={{ color: "black", fontWeight: "600", fontSize: 14, marginLeft: 5, marginTop: 3 }}>8-13</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', marginTop: 10, marginLeft: 30 }}>
                            <View>
                                <Text style={{ color: "black", fontWeight: "900", fontSize: 20, marginLeft: 10 }}># Tubos</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: '600', marginTop: 10, fontSize: 15 }}>H: </Text>
                                    <TextInput
                                        style={{ height: 30, fontSize: 20, borderColor: 'gray', borderBottomWidth: 2, width: 90, textAlign: 'center' }}
                                        onChangeText={(horizontal) => (horizontal >= 1 && horizontal <= 6) ? this.setState({ horizontal }) : alert("No debe superar 6")}
                                        value={this.state.text}
                                        keyboardType={'numeric'}
                                        returnKeyType={'done'}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: '600', marginTop: 10, fontSize: 15 }}>V: </Text>
                                    <TextInput
                                        style={{ height: 30, fontSize: 20, borderColor: 'gray', borderBottomWidth: 2, width: 90, textAlign: 'center' }}
                                        onChangeText={(vertical) => (vertical >= 1 && vertical <= 6) ? this.setState({ vertical }) : alert("nodebe superar a 6")}
                                        value={this.state.text}
                                        keyboardType={'numeric'}
                                        returnKeyType={'done'}
                                    />
                                </View>
                                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                    <TextInput
                                        placeholder='Demanda maxima'
                                        style={{ height: 30, fontSize: 13, borderColor: 'gray', borderBottomWidth: 2, width: 110, textAlign: 'center' }}
                                        onChangeText={(demanda) => this.setState({ demanda })}
                                        value={this.state.text}
                                        keyboardType={'numeric'}
                                        returnKeyType={'done'}
                                    />
                                    <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: '600' }}>KW</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.box, styles.box4]}>
                    <View style={{ marginTop: 25, width: 250, height: 100 }}>
                        <Button
                            title="Calcular cable"
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

        );
    }
}

const calcular = (longitud, tension, voltaje, temperatura, horizontal, vertical, aislante, monofasico, montaje, tipo_longitud, demanda) => {
    const valores = {
        longitud: parseInt(longitud, 10),
        tension: parseInt(tension, 10),
        voltaje: parseInt(voltaje, 10),
        temperatura: parseInt(temperatura, 10),
        horizontal: parseInt(horizontal, 10),
        vertical: parseInt(vertical, 10),
        aislante: parseInt(aislante),
        monofasico: monofasico,
        montaje: montaje,
        tipo_longitud: tipo_longitud,
        demanda: parseInt(demanda)
    }
    if (valores.tipo_longitud === 1)
        valores.longitud = valores.longitud * 1000

    valores.longitud <= 40
        ? menorIgualCuarenta(valores)
        : mayorCuarenta(valores)
}

const menorIgualCuarenta = (valores) => {
    const corriente = (
        valores.monofasico === false
            ? (valores.demanda * 1000) / (0.9 * valores.voltaje)
            : (valores.demanda * 1000) / (0.9 * valores.voltaje * Math.sqrt(3))
    )
    const fa = factorDeAgrupamiento(valores.horizontal, valores.vertical)
    const fc = factorCorreccionTemperatura(valores.temperatura, valores.aislante)
    const corrienteCorreccion = Math.round(corriente / (fa * fc))
    const S = validarPorCorriente(corrienteCorreccion, valores.aislante, valores.montaje)
    const voltajePermitido = valores.voltaje * (valores.tension / 100)
    const K = calcularK(S, valores.monofasico)
    const voltajeCalculado = K * corrienteCorreccion * (valores.longitud / 1000)
    voltajeCalculado <= voltajePermitido
        ? alert("EL tamano de su cables es: " + S + " mm²")
        : alert("Conflicto con los datos")
}

const calcularK = (S, monofasico) => {
    if (monofasico === false) {
        var x
        for (x = 0; tablas517S.length; x++) {
            if (tablas517S[x] === S)
                return tabla517SMonofasica[x]
        }
    } else {
        var x
        for (x = 0; tablas517S.length; x++) {
            if (tablas517S[x] === S)
                return tabla517STrifasica[x]
        }
    }
}

const mayorCuarenta = (valores) => {
    const corriente = (
        valores.monofasico === false
            ? (valores.demanda * 1000) / (0.9 * valores.voltaje)
            : (valores.demanda * 1000) / (0.9 * valores.voltaje * Math.sqrt(3))
    )
    const voltajePermitido = valores.voltaje * (valores.tension / 100)
    const K = voltajePermitido / (corriente * (valores.longitud / 1000))
    const S = calcularSMayorCuartenta(K, valores.monofasico)
    const fa = factorDeAgrupamiento(valores.horizontal, valores.vertical)
    const fc = factorCorreccionTemperatura(valores.temperatura, valores.aislante)
    const corrienteCorreccion = Math.round(corriente / (fa * fc))
    const S2 = validarPorCorriente(corrienteCorreccion, valores.aislante, valores.montaje)
    if (S >= S2)
        alert("El tamano del cable es: " + S + " mm²")
    if (S2 >= S)
        alert("El tamano del cable es: " + S2 + " mm²")
}

const calcularSMayorCuartenta = (K, valor) => {
    if (valor === false) {
        var x;
        for (x = 0; x < tabla517SMonofasica.length; x++) {
            if (tabla517SMonofasica[x] <= K)
                return tablas517S[x]
        }
    } else {
        var x;
        for (x = 0; x < tabla517STrifasica.length; x++) {
            if (tabla517STrifasica[x] <= K)
                return tablas517S[x]
        }
    }
}

const validarPorCorriente = (corriente, aislante, montar) => {
    if (aislante === 0) {
        if (montar === false) {
            var x
            for (x = 0; x < tabla53aPvc.length; x++) {
                if (tabla53aPvc[x] > corriente)
                    return tabla53aS[x]
            }
        } else {
            var x
            for (x = 0; x < tabla53bPvc.length; x++) {
                if (tabla53bPvc[x] > corriente)
                    return tabla53aS[x]
            }
        }
    } else {
        if (montar === false) {
            var x
            for (x = 0; x < tabla534a.length; x++) {
                if (tabla534a[x] > corriente)
                    return tabla53aS[x]
            }
        } else {
            var x
            for (x = 0; x < tabla534b.length; x++) {
                if (tabla534b[x] > corriente)
                    return tabla53aS[x]
            }
        }
    }
}

const factorDeAgrupamiento = (horizontal, vertical) => {
    if (horizontal === 1)
        return tabla591[vertical - 1]
    else if (horizontal === 2)
        return tabla592[vertical - 1]
    else if (horizontal === 3)
        return tabla593[vertical - 1]
    else if (horizontal === 4)
        return tabla594[vertical - 1]
    else if (horizontal === 5)
        return tabla595[vertical - 1]
    else if (horizontal === 6)
        return tabla596[vertical - 1]
}

const factorCorreccionTemperatura = (temperatura, aislante) => {
    if (aislante === 0) {
        var x
        for (x = 0; x < tabla56.length; x++) {
            if (tabla56[x] >= temperatura)
                return tabla56Pvc[x]
        }
    } else {
        var x
        for (x = 0; x < tabla56.length; x++) {
            if (tabla56[x] >= temperatura)
                return tabla56Otros[x]
        }
    }
}
