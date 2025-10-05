import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const AsyncStorageExemplo =() => {

    const [valor, setValor] = useState('');
    const [armazenarValor, setArmazenarValor] = useState('');


    const salvarDado = async() => {
        try{
            await AsyncStorage.setItem("minha chave", valor);

        } catch (e) {
            console.error("Falha ao salvar o dado: ", e)
        }
    }

    const buscarDado = async () => {
        try {
            const dado = await AsyncStorage.getItem("minhaChave");
            if (dado !== null) {
                setArmazenarValor(dado);
            }

        } catch (e) {
            console.error("Falha ao buscar os dados: ", e);

        }
    }


    return (<View>
        <TextInput
        placeholder="Entre com um valor"
        value={valor}
        onChangeText={setValor}
        style={{ borderWidth: 1, marginBottom: 10}}    

        />
        <Button title="Salvar Dado" onPress={salvarDado}/>
        <Button title="Retornar Dado" onPress={buscarDado}/>

        <text> Valor Armazenado: {armazenarValor} </text>



    </View>);


}
export default AsyncStorageExemplo;