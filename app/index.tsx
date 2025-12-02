import { FocusButton } from "@/components/focus-button";
import { Footer } from "@/components/footer";
import { navigate } from "expo-router/build/global-state/routing";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')}></Image>
      <View style={styles.content}>
        <Text style={styles.title}>
          Otimize sua{'\n'}
          produtividade,{'\n'}
          <Text style={styles.titleBold}>
            mergulhe no que{'\n'}
            importa
          </Text>
        </Text>
        <Image source={require('../assets/images/home.png')}></Image>
        <FocusButton title='Quero iniciar!' onPress={() => navigate('/pomodoro')} />
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  content: {
    gap: 16
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 26
  },
  titleBold: {
    fontWeight: 'bold'
  }
})