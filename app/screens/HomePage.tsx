import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Pressable, ImageBackground } from 'react-native';

interface HomePageProps {
  onShowInformation: () => void;
  onShowGames: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onShowInformation, onShowGames }) => {
  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image source={require('../images/logo.png')} style={styles.logo} />
          <Text style={styles.title}>Bienvenido a Estelar Odyssey: Explorando lo Inexplorado</Text>
          <Text style={styles.subtitle}>Embárcate en una Odisea Estelar</Text>
          <Text style={styles.description}>
            Explora lo inexplorado, descubre nuevos mundos y civilizaciones, y lidera tu propia tripulación en Estelar Odyssey, el juego de simulación de exploración espacial más inmersivo. Aventuras intergalácticas te esperan.
          </Text>
          <Image source={require('../images/image1.png')} style={styles.image} />
        </View>
        <View style={styles.services}>
          <Text style={styles.sectionTitle}>Servicios que ofrecemos</Text>
          <View style={styles.service}>
            <Text style={styles.serviceTitle}>Exploración Espacial Inmersiva</Text>
            <Text style={styles.serviceDescription}>
              Desde descubrir nuevas galaxias hasta interactuar con mundos alienígenas, nuestra experiencia de exploración espacial inmersiva te llevará a descubrir lo desconocido de manera emocionante y cautivadora.
            </Text>
          </View>
          <View style={styles.service}>
            <Text style={styles.serviceTitle}>Gestión Estratégica</Text>
            <Text style={styles.serviceDescription}>
              En Estelar Odyssey: Explorando lo Inexplorado, el éxito de tu viaje espacial depende de tu habilidad para gestionar recursos, tripulación y nave espacial. La gestión estratégica es clave para el éxito de tu viaje.
            </Text>
          </View>
          <View style={styles.service}>
            <Text style={styles.serviceTitle}>Interacción Social y Cooperativa</Text>
            <Text style={styles.serviceDescription}>
              En Estelar Odyssey: Explorando lo Inexplorado, la interacción social y cooperativa es esencial para el éxito del viaje. Únete a equipos espaciales, forma alianzas y explora lo desconocido juntos.
            </Text>
          </View>
          <View style={styles.service}>
            <Text style={styles.serviceTitle}>Personalización de la Nave Espacial</Text>
            <Text style={styles.serviceDescription}>
              En Estelar Odyssey: Explorando lo Inexplorado, la personalización de la nave espacial es una parte esencial de la experiencia de juego. Personaliza tu nave espacial para adaptarla a tus necesidades y estilo de juego.
            </Text>
          </View>
        </View>
        <View style={styles.discover}>
          <Text style={styles.sectionTitle}>Descubriendo Nuevos Mundos: El Éxito de la Misión Estelar</Text>
          <Text style={styles.description}>
            Acompáñanos en un viaje hacia lo desconocido y descubre cómo Estelar Odyssey permitió a los jugadores explorar nuevos mundos, gestionar recursos y tripulación, y forjar relaciones intergalácticas, todo mientras disfrutan de una experiencia de juego inmersiva.
          </Text>
          <Text style={styles.listItem}>- Exploración de mundos desconocidos</Text>
          <Text style={styles.listItem}>- Gestión de recursos y tripulación</Text>
          <View style={styles.imageContainer}>
            <Image source={require('../images/image2.png')} style={styles.image} />
          </View>
        </View>
        <Pressable style={styles.button} onPress={onShowInformation}>
          <Text style={styles.buttonText}>Información</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onShowGames}>
          <Text style={styles.buttonText}>Jugar</Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 16,
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    width: '100%',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#00ffcc',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#00cc99',
    textShadowColor: '#00cc99',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#ffffff',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 16,
    borderRadius: 10,
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  services: {
    marginBottom: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#00ffcc',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  service: {
    marginBottom: 16,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#00cc99',
    textShadowColor: '#00cc99',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  discover: {
    marginBottom: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    width: '100%',
  },
  listItem: {
    fontSize: 16,
    marginBottom: 8,
    color: '#00cc99',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#0d0d0d',
    borderColor: '#00ffcc',
    borderWidth: 2,
    alignItems: 'center',
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
  },
  buttonText: {
    color: '#00ffcc',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
});

export default HomePage;
