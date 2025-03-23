import React, { useState, useEffect } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  BellRinging,
  Bookmark,
  ChatsTeardrop,
  FadersHorizontal,
  MagnifyingGlass,
} from "phosphor-react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location"; // Para obter a localização atual

export default function MapScreen() {
  const { width } = Dimensions.get("window");
  const [region, setRegion] = useState({
    latitude: -15.7801,
    longitude: -47.9292,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permissão para acessar a localização foi negada");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  const handleSearch = () => {
    // Aqui você pode integrar uma API de geocodificação para buscar o endereço
    // e atualizar a região do mapa com as novas coordenadas.
    console.log("Buscar localização:", searchQuery);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar />

        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <ChatsTeardrop size={30} color="#1AB65C" weight="duotone" />
            <Text style={styles.headerLeftText}>EasyStay</Text>
          </View>
          <View style={styles.headerRight}>
            <BellRinging size={30} color="#f4f4f4" weight="duotone" />
            <Bookmark size={30} color="#f4f4f4" weight="duotone" />
          </View>
        </View>

        <Text style={styles.userName}>Localização</Text>

        <View style={styles.inputContainer}>
          <MagnifyingGlass size={32} color="#757575" weight="thin" />
          <TextInput
            style={styles.input}
            placeholderTextColor="#757575"
            placeholder="Procure por local"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <FadersHorizontal size={32} color="#1AB65C" weight="thin" />
        </View>

        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={region}
            onRegionChangeComplete={setRegion}
          >
            <Marker
              coordinate={{
                latitude: region.latitude,
                longitude: region.longitude,
              }}
              title="Sua Localização"
              description="Você está aqui"
            />
          </MapView>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>Buscar</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Favoritos</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A20",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerLeftText: {
    color: "#f4f4f4",
    fontWeight: "800",
    fontSize: 24,
  },
  userName: {
    paddingTop: 30,
    paddingBottom: 30,
    color: "#f4f4f4",
    fontSize: 25,
    fontWeight: "800",
  },
  inputContainer: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    backgroundColor: "#1f222a",
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    color: "#F4f4f4",
  },
  mapContainer: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden", // Para garantir que o mapa respeite as bordas arredondadas
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "#1AB65C",
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "600",
  },
});
