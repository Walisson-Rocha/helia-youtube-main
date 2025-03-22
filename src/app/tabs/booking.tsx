import { StyleSheet, Text, TextInput, View, Pressable, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Reserva() {
  const router = useRouter();
  const params = useLocalSearchParams(); // Para receber os dados do hotel

  function handleBack() {
    router.back();
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleBack}>
          <Text style={styles.backButton}>Voltar</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Reserva</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.hotelName}>{params.name}</Text>
        <Text style={styles.hotelLocation}>{params.location}</Text>
        <Text style={styles.hotelPrice}>{params.price} / noite</Text>

        {/* Formulário de Reserva */}
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput style={styles.input} placeholder="Digite seu nome" placeholderTextColor="#757575" />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu telefone"
          placeholderTextColor="#757575"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Data de Chegada</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#757575"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Data de Saída</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#757575"
          keyboardType="numeric"
        />

        <Pressable style={styles.reserveButton}>
          <Text style={styles.reserveButtonText}>Confirmar Reserva</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    color: "#1ab65c",
    fontSize: 16,
    marginRight: 20,
  },
  headerTitle: {
    color: "#f4f4f4",
    fontSize: 24,
    fontWeight: "800",
  },
  content: {
    alignItems: "center",
  },
  hotelName: {
    color: "#f4f4f4",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 10,
  },
  hotelLocation: {
    color: "#f4f4f4",
    fontSize: 18,
    marginBottom: 10,
  },
  hotelPrice: {
    color: "#1ab65c",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 20,
  },
  label: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#1f222a",
    borderRadius: 12,
    paddingHorizontal: 15,
    color: "#f4f4f4",
    marginBottom: 15,
  },
  reserveButton: {
    backgroundColor: "#1ab65c",
    width: "100%",
    height: 56,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  reserveButtonText: {
    color: "#f4f4f4",
    fontSize: 18,
    fontWeight: "800",
  },
});