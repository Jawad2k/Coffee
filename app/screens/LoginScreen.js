import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert } from "react-native";
import Screen from "../components/Screen";
import colors from '../components/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            token: ""
        }
    }

    Login() {
        console.log()
        return fetch("http://10.0.2.2:3333/api/1.0.0/user/login",
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then((response) => {
                console.log(response.status)
                if (response.status === 200) {
                    console.log("Login Successful")
                    return response.json()
                }
                else if (response.status === 400) {
                    console.log("Login Failed")
                    Alert.alert("Invalid email/password")
                }
                else if (response.status === 500) {
                    console.log("Login Failed")
                    Alert.alert("Server error")
                }
            })
            .then((responseJson) => {
                console.log(responseJson.token)
                Alert.alert("Login Success")
                this.saveToken(responseJson.token, responseJson.id)
                this.props.navigation.navigate("HomeScreen")
            })
    }

    Logout() {
        console.log()
        return fetch("http://10.0.2.2:3333/api/1.0.0/user/logout",
            {
                method: 'POST',
                headers: { "Content-Type": "application/json", "X-Authorization": this.state.token },

            })
            .then((response) => {
                if (response.status == "200") {
                    console.log("Logout Successful")
                    Alert.alert("Logout successful")
                }
                else {
                    console.log("Logout Failed " + response.status)
                }
            })
    }

    saveToken = async (token, id) => {
        try {
            await AsyncStorage.setItem('@token', token)
            await AsyncStorage.setItem('@id', String(id))
        } catch (e) {
            console.log("Something went wrong");
            console.log(e);
            // saving error
        }
        console.log(await AsyncStorage.getItem("@token"))
        console.log(await AsyncStorage.getItem("@id"))
    }

    render() {
        const { navigation } = this.props;
        return (
            <Screen style={styles.screen}>
                <View>
                    <TextInput placeholder="Username" onChangeText={(text_input) => { this.setState({ email: text_input }) }} />
                    <TextInput placeholder="Password" onChangeText={(text_input) => { this.setState({ password: text_input }) }} />
                    <Button title="Login" onPress={() => { this.Login() }} />
                    <Button title="Logout" onPress={() => { this.Logout() }} />
                    <Text>{this.state.email} {this.state.password}</Text>
                </View>
            </Screen>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.white,
    },
});

export default LoginScreen;