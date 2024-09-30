import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";
import { firestore } from "../Firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

export default function Home({ navigation }) {

  const [motos, setMotos] = useState([]);

  // Função para deletar uma moto
  async function deleteMotos(id) {
    try {
      await deleteDoc(doc(firestore, "tbMotos", id));
      Alert.alert("A Moto foi deletada.");
    } catch (error) {
      console.error("Erro ao deletar.", error);
    }
  }

  // Carrega os dados de motos da Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'tbMotos'), (querySnapshot) => {
      const lista = [];
      querySnapshot.forEach((doc) => {
        lista.push({ ...doc.data(), id: doc.id });
      });
      setMotos(lista);
    });
    return () => unsubscribe();
  }, []);

  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.titulo}>Lista de Motos</Text>
      </View>

      <FlatList
        data={motos} // Corrigido para motos
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={estilo.Motos}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("alterarMoto", {
                    id: item.id,
                    nomeMoto: item.nomeMoto,
                    montadoraMoto: item.montadoraMoto,
                    valorMoto: item.valorMoto
                  })
                }
              >
                <View style={estilo.itens}>
                  <Text>Moto: <Text>{item.nomeMoto}</Text></Text>
                  <Text>Montadora: <Text>{item.montadoraMoto}</Text></Text>
                  <Text>Valor: <Text>{item.valorMoto}</Text></Text>
                </View>
              </TouchableOpacity>

              <View style={estilo.botaodeletar}>
                <TouchableOpacity onPress={() => { deleteMotos(item.id); }}>
                  <Text>X</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />

      {/* Botão para cadastrar uma nova moto */}
      <TouchableOpacity style={estilo.addbutton} onPress={() => navigation.navigate("cadastrarMoto")}>
        <Text style={{ fontSize: 30 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    marginTop: 50,
    fontSize: 30,
  },
  itens: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
  },
  tituloMotos: {
    fontSize: 13,
    color: '#fff'
  },
  textoMotos: {
    fontSize: 15,
    fontWeight: "bold",
  },
  Motos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#0000CD',
    borderRadius: 10
  },
  botaodeletar: {
    textAlignVertical: 'center',
    marginVertical: 10,
  },
  addbutton: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    position: 'absolute',
    right: 20,
    bottom: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  }
});
