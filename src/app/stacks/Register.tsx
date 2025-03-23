import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ArrowLeft,
  EnvelopeSimple,
  LockKey,
  User,
} from "phosphor-react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    // Simulação de salvamento dos dados do usuário
    const userData = { name, email, password };
    console.log("Dados do usuário:", userData);

    // Redirecionar para a tela de perfil
    router.navigate("./tabs/profile");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => router.back()}>
        <ArrowLeft size={32} color="#f4f4f4" weight="regular" />
      </TouchableOpacity>

      <Text style={styles.wellcome}>Crie sua conta</Text>

      <View style={styles.content}>
        <View style={styles.contentInput}>
          <User size={32} color="#757575" />
          <TextInput
            placeholder="Seu nome"
            style={styles.input}
            placeholderTextColor="#757575"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.contentInput}>
          <EnvelopeSimple size={32} color="#757575" />
          <TextInput
            placeholder="Seu e-mail"
            style={styles.input}
            placeholderTextColor="#757575"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.contentInput}>
          <LockKey size={32} color="#757575" />
          <TextInput
            placeholder="Sua senha"
            style={styles.input}
            placeholderTextColor="#757575"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <TouchableOpacity onPress={handleRegister} style={styles.buttonSignIn}>
        <Text style={styles.buttonSignInText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Já possui conta?</Text>
        <TouchableOpacity onPress={() => router.navigate("./login")}>
          <Text style={styles.footerButtonText}>Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    alignSelf: "flex-start",
    marginTop: 50,
  },
  wellcome: {
    color: "#f4f4f4",
    marginTop: 50,
    fontSize: 24,
    fontWeight: "600",
  },
  content: {
    width: "100%",
    marginTop: 50,
    alignItems: "center",
    gap: 20,
  },
  contentInput: {
    width: "100%",
    height: 56,
    backgroundColor: "#1f222a",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
  input: { flex: 1, color: "#757575" },
  buttonSignIn: {
    backgroundColor: "#1ab55c",
    width: "100%",
    height: 56,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonSignInText: { color: "#f4f4f4", fontSize: 16, fontWeight: "800" },
  footer: {
    marginTop: 50,
    flexDirection: "row",
    gap: 10,
  },
  footerText: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "400",
  },
  footerButtonText: {
    color: "#1ab55c",
    fontSize: 16,
    fontWeight: "400",
  },
});