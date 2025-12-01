import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {


  return (
    <View
      style={styles.container}
    >
      <Image source={require('./assets/foco.png')} />
      <View style={styles.actions}>
        <View style={styles.context}>
          <Pressable style={styles.contextButtonActive}><Text style={styles.contextButtonText}>Foco</Text></Pressable>
          <Pressable><Text style={styles.contextButtonText}>Pausa curta</Text></Pressable>
          <Pressable><Text style={styles.contextButtonText}>Pausa longa</Text></Pressable>
        </View>
        <Text style={styles.timer}>25:00</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto fictício e sem fins comerciais.</Text>
        <Text style={styles.footerText}>Desenvolvido por Renan</Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 32
  },
  actions: {
    backgroundColor: '#14448080',
    paddingVertical: 24,
    paddingHorizontal: 24,
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    fontWeight: 'bold',
    borderRadius: 8
  },
  contextButtonText: {
    color: '#fff',
    fontSize: 12.5,
    padding: 8,
  },
  timer: {
    fontSize: 54,
    fontWeight: 800,
    color: '#ffffff',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  }
})