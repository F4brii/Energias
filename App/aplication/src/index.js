//Stores
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Dimensions, Button } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import ToggleSwitch from 'toggle-switch-react-native'

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
        flex: 1.5
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
            tipo_longitud: '',
            tension: '',
            temperatura: '',
            aislante: '',
            monofasico: false,
            montaje: false,
            horizontal: '',
            vertical: '',
            demanda: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, styles.box1]}>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 25, marginLeft: 20 }}>
                        <TextInput
                            style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 150, marginRight: 10 }}
                            placeholder="Longitud"
                            placeholderTextColor='#929395'
                            onChangeText={(longitud) => this.setState({ longitud })}
                            value={this.state.text}
                        />
                        <RadioForm
                            radio_props={props_longitud}
                            initial={0}
                            formHorizontal={true}
                            onPress={(tipo_longitud) => { this.setState({ tipo_longitud }) }}
                            buttonColor={'#000'}
                            selectedButtonColor={'gray'}
                            labelColor={'#000'}
                        />
                    </View>
                </View>
                <View style={[styles.box, styles.box2]}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ marginTop: 1, marginLeft: 20, fontSize: 17, marginBottom: 10, fontWeight: 'bold' }}>Caida de Tensión</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 15, alignContent: 'center', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', marginRight: 25, padding: 0 }}>
                                <TextInput
                                    style={{ height: 30, fontSize: 20, borderColor: 'gray', borderBottomWidth: 2, width: 100, marginRight: 10 }}
                                    onChangeText={(tension) => this.setState({ tension })}
                                    value={this.state.text}
                                />
                                <Text style={{ fontWeight: '600' }}>%</Text>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 0, marginRight: 10 }}>
                                <TextInput
                                    placeholder='Temperatura'
                                    style={{ height: 30, fontSize: 15, borderColor: 'gray', borderBottomWidth: 2, width: 120, textAlign: 'center' }}
                                    onChangeText={(temperatura) => this.setState({ temperatura })}
                                    value={this.state.text}
                                />
                                <Text style={{ fontSize: 18, fontWeight: '600' }}>°C</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.box, styles.box3]}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center', marginLeft: 15, marginTop: 10 }}>
                        <Text style={{ fontSize: 17, marginLeft: 10, marginBottom: 10, fontWeight: 'bold' }}>Aislante</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <RadioForm
                                radio_props={props_aislante}
                                initial={0}
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
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', marginTop: 10, marginLeft: 20 }}>
                            <View style={{ marginBottom: 15 }}>
                                <Text style={{ marginBottom: 5, fontWeight: 'bold', fontSize: 14 }}>Monofasico</Text>
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
                                <Text style={{ marginBottom: 5, fontWeight: 'bold', fontSize: 14 }}>Forma de montar</Text>
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
                                <Text style={{ color: "black", fontWeight: "900", fontSize: 14, marginLeft: 10 }}># Tubos</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: '600', marginTop: 10 }}>H: </Text>
                                    <TextInput
                                        style={{ height: 30, fontSize: 20, borderColor: 'gray', borderBottomWidth: 2, width: 60, textAlign: 'center' }}
                                        onChangeText={(horizontal) => this.setState({ horizontal })}
                                        value={this.state.text}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: '600', marginTop: 10 }}>V: </Text>
                                    <TextInput
                                        style={{ height: 30, fontSize: 20, borderColor: 'gray', borderBottomWidth: 2, width: 60, textAlign: 'center' }}
                                        onChangeText={(vertical) => this.setState({ vertical })}
                                        value={this.state.text}
                                    />
                                </View>
                                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                    <TextInput
                                        placeholder='Demanda maxima'
                                        style={{ height: 30, fontSize: 13, borderColor: 'gray', borderBottomWidth: 2, width: 110, textAlign: 'center' }}
                                        onChangeText={(demanda) => this.setState({ demanda })}
                                        value={this.state.text}
                                    />
                                    <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: '600' }}>KW</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.box, styles.box4]}>
                    <View style={{marginTop: 20}}>
                        <Button
                            title="Calcular cable"
                            onPress={() => alert('Simple Button pressed')}
                        />
                    </View>
                </View>
            </View>

        );
    }
}
