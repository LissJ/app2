import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Usuario() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ESTILO.header}>
                <Text style={ESTILO.title}>
                    Meu perfil
                </Text>
            </View>
            <Image source={require("../assets/user.png")} style={ESTILO.user} />
            <View>
                <Text style={ESTILO.eu}>
                    Eu
                </Text>
                <Text style={ESTILO.usuario}>
                    @usuário
                </Text>
                <Text style={ESTILO.email}>
                    seuemail@gmail.com
                </Text>
                <TouchableOpacity style={ESTILO.button}>
                    <Image source={require("../assets/google.jpg")} style={ESTILO.google} />
                    <Text style={ESTILO.vinculoTexto}>
                        Vincule sua conta ao google.
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    header: {
        padding: 14,
        paddingTop: 58,
        backgroundColor: "#392de9"
    },
    user: {
        marginLeft: 155,
        marginTop: 45,
        width: 120,
        height: 120
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    },
    eu: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        display: "flex",
        justifyContent: "center",
    },
    usuario: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "300",
        color: "#000",
        display: "flex",
        justifyContent: "center",
    },
    email: {
        marginTop: 7,
        fontSize: 15,
        fontWeight: "300",
        color: "#000",
        display: "flex",
        justifyContent: "center",
    },
    google: {
        width: 40,
        height: 40
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 20,
        marginTop: 400,
        backgroundColor: '#392de9',
        // marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // alignSelf: "center",
        // textAlign: "center",
        // alignContent: "center",
    },
    vinculoTexto: {
        color: '#fff',
        fontWeight: "bold"
    }
})