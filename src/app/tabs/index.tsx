import { Image,Pressable,StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  FlatList, // Importando FlatList
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  BellRinging,
  Bookmark,
  ChatsTeardrop,
  FadersHorizontal,
  MagnifyingGlass,
  Star,
} from "phosphor-react-native"; // Importando os ícones necessários


const cardData = [
  {
    id: "1",
    title: "Pousada Espaço Mil",
    subtitle: "Corrente-PI",
    description: "oi90909090909",
    price: "R$ 420",
    image: require("../assets/mil.png"),
  },
  {
    id: "2",
    title: "Jeronimo Hotel",
    subtitle: "Corrente-PI",
    price: "R$ 420",
    image: require("../assets/jeronimo.png"),
  },
  {
    id: "3",
    title: "Pousada Papagayu´s",
    subtitle: "Posse, Goiás",
    price: "R$ 420",
    image: require("../assets/papa.png"),
  },
  {
    id: "4",
    title: "Ranchão",
    subtitle: "Correntina-BA",
    price: "R$ 420",
    image: require("../assets/papa.png"),
  },
  
  {
    id: "4",
    title: "Ranchão",
    subtitle: "Correntina-BA",
    price: "R$ 420",
    image: require("../assets/papa.png"),
  },

  {
    id: "1",
    title: "Pousada Espaço Mil",
    subtitle: "Corrente-PI",
    description: "oi90909090909",
    price: "R$ 420",
    image: require("../assets/mil.png"),
  },
  {
    id: "2",
    title: "Jeronimo Hotel",
    subtitle: "Corrente-PI",
    price: "R$ 420",
    image: require("../assets/jeronimo.png"),
  },
  {
    id: "3",
    title: "Pousada Papagayu´s",
    subtitle: "Posse, Goiás",
    price: "R$ 420",
    image: require("../assets/papa.png"),
  },
  {
    id: "4",
    title: "Ranchão",
    subtitle: "Correntina-BA",
    price: "R$ 420",
    image: require("../assets/papa.png"),
  },
  
  {
    id: "4",
    title: "Ranchão",
    subtitle: "Correntina-BA",
    price: "R$ 420",
    image: require("../assets/papa.png"),
  },

];

export default function Index() {
  const { width } = Dimensions.get("window");

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

        <Text style={styles.userName}>Olá, Walisson Rocha</Text>

        <View style={styles.inputContainer}>
          <MagnifyingGlass size={32} color="#757575" weight="thin" />
          <TextInput
            style={styles.input}
            placeholderTextColor="#757575"
            placeholder="Procure por casa aqui"
          />
          <FadersHorizontal size={32} color="#1AB65C" weight="thin" />
        </View>

        <View style={styles.cardsContainer}>
          <FlatList
            data={cardData}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Pressable style={styles.cardButton}>
                  <Image style={styles.cardImage} source={item.image} />

                  <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardSubTitle}>{item.subtitle}</Text>

                    <View style={styles.starsContainer}>
                      <Star size={16} color="#FFD700" weight="fill" />
                      <Star size={16} color="#FFD700" weight="fill" />
                      <Star size={16} color="#FFD700" weight="fill" />
                      <Star size={16} color="#757575" weight="fill" />
                      <Star size={16} color="#757575" weight="fill" />
                    </View>
                  </View>

                  <View style={styles.cardInfoBuy}>
                    <Text style={styles.cardInfoBuyText}>{item.price}</Text>
                    <Pressable
                      accessibilityLabel="Adicionar aos favoritos"
                      accessibilityHint="Este item será adicionado à sua lista de favoritos"
                    >
                      <Bookmark size={32} color="#F4F4F4" weight="bold" />
                    </Pressable>
                  </View>
                </Pressable>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
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
  cardsContainer: {
    width: "100%",
    flex: 1, // Permite que os cards ocupem o restante do espaço disponível
    marginBottom: 20, // Espaçamento inferior opcional
  },
  card: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    backgroundColor: "#1f222a",
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    padding: 15,
    justifyContent: "space-between",
    marginBottom: 15, // Separação entre os cards
  },
  cardButton: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 10,
  },
  cardImage: {
    height: 90,
    width: 90,
    borderRadius: 12,
  },
  cardInfo: {
    height: "100%",
    gap: 10,
  },
  cardTitle: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "400",
  },
  cardSubTitle: {
    color: "#f4f4f4",
    fontSize: 14,
    fontWeight: "300",
  },
  cardInfoBuy: {
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  cardInfoBuyText: {
    color: "#1ab65c",
    fontSize: 18,
    fontWeight: "800",
  },
  starsContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 5,
  },
});
