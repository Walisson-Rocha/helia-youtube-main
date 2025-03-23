import { StyleSheet, Text, View, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { User, EnvelopeSimple } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
export default function Profile() {
  const { name, email } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Perfil do Usuário</Text>
      </View>

      {/* Ícone do Usuário */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarBackground}>
          <User size={64} color="#1ab65c" weight="fill" />
        </View>
      </View>

      {/* Informações do Usuário */}
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <User size={24} color="#1ab65c" weight="fill" />
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{name}</Text>
        </View>

        <View style={styles.infoItem}>
          <EnvelopeSimple size={24} color="#1ab65c" weight="fill" />
          <Text style={styles.label}>E-mail:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
      </View>

      {/* Botão de Editar Perfil (opcional) */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    color: "#f4f4f4",
    fontSize: 28,
    fontWeight: "700",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  avatarBackground: {
    backgroundColor: "#1f222a",
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#1ab65c",
  },
  infoContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#1f222a",
    padding: 15,
    borderRadius: 12,
    gap: 10,
  },
  label: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 10,
  },
  value: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "400",
    flex: 1,
  },
  editButton: {
    backgroundColor: "#1ab65c",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30,
  },
  editButtonText: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "600",
  },
});