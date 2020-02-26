//Stores
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';

//Styles
const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 35
    }
});

//main component
export default class extends Component {

    constructor(props) {
        super(props);
        this.state = { longitud: '', checked: 'first', };
    }

    render() {
        const { checked } = this.state;
        return (
            <View style={styles.body}>
                <TextInput
                    style={{ height: 30, fontSize: 20, borderColor: 'gray', borderBottomWidth: 2, width: 150 }}
                    placeholder="Longitud"
                    placeholderTextColor='#929395'
                    underlineColorAndroid='#000'
                    onChangeText={(longitud) => this.setState({ longitud })}
                    value={this.state.text}
                />
                <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'first' }); }}
          color='#000'
        />
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'second' }); }}
        />
            </View>
        );
    }
}
