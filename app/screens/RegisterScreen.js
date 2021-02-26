import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput, Alert } from "react-native";
import Screen from "../components/Screen";
import colors from '../components/colors';

class RegisterScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
        }
    }

    Register() {
        console.log("check data")
        return fetch("http://10.0.2.2:3333/api/1.0.0/user",
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then((response) => {
                Alert.alert("User Created!");
                console.log(response.status)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <Screen style={styles.screen}>
                <View>
                    <TextInput placeholder="First name" onChangeText={(text_input) => { this.setState({ first_name: text_input }) }} />
                    <TextInput placeholder="Last name" onChangeText={(text_input) => { this.setState({ last_name: text_input }) }} />
                    <TextInput placeholder="Username" onChangeText={(text_input) => { this.setState({ email: text_input }) }} />
                    <TextInput placeholder="Password" onChangeText={(text_input) => { this.setState({ password: text_input }) }} />
                    <Button title="Register" onPress={() => { this.Register() }} />
                </View>
            </Screen>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.white,
    },
});

export default RegisterScreen;