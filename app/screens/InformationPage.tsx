import React from 'react';
import { View, Text, Pressable, StyleSheet, Image, ImageBackground, ScrollView, FlatList } from 'react-native';

interface InformationPageProps {
  onClose: () => void;
}

const informationData = [
  {
    key: '1',
    title: 'Biografía del Creador',
    content: 'Aaron Eduardo Avila Milanes es un apasionado desarrollador y diseñador de juegos con un profundo amor por la exploración espacial y la creación de experiencias inmersivas. Su visión es transportar a los jugadores a mundos desconocidos y permitirles vivir aventuras inolvidables.',
  },
  {
    key: '2',
    title: 'Estelar Odyssey',
    content: 'Estelar Odyssey: Explorando lo Inexplorado es un juego de simulación espacial que permite a los jugadores descubrir nuevas galaxias, gestionar su propia tripulación y personalizar su nave espacial para adaptarse a diferentes misiones y desafíos intergalácticos.',
  },
];

const imageCarousel = [
  require('../images/image1.png'),
  require('../images/image2.png'),
  require('../images/image3.png'), // Add more images as needed
];

const featuresList = [
  'Exploración de mundos desconocidos',
  'Gestión de recursos y tripulación',
  'Interacción social y cooperativa',
  'Personalización de la nave espacial',
];

const InformationPage: React.FC<InformationPageProps> = ({ onClose }) => {
  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>CREADOR DE ESTELAR ODYSSEY</Text>
        <View style={styles.namesContainer}>
          <Text style={styles.name}>Aaron Eduardo Avila Milanes</Text>
        </View>
        
        <FlatList
          data={informationData}
          renderItem={({ item }) => (
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>{item.title}</Text>
              <Text style={styles.infoContent}>{item.content}</Text>
            </View>
          )}
          keyExtractor={item => item.key}
          contentContainerStyle={styles.infoList}
        />
        
        <View style={styles.carouselContainer}>
          <Text style={styles.carouselTitle}>Galería de Imágenes</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {imageCarousel.map((image, index) => (
              <Image key={index} source={image} style={styles.carouselImage} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>Características del Juego</Text>
          {featuresList.map((feature, index) => (
            <Text key={index} style={styles.featureItem}>- {feature}</Text>
          ))}
        </View>
        
        <Pressable style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Cerrar</Text>
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
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00ffcc',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  namesContainer: {
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  infoList: {
    width: '100%',
  },
  infoBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00ffcc',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  infoContent: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  carouselContainer: {
    width: '100%',
    marginBottom: 20,
  },
  carouselTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00ffcc',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  carouselImage: {
    width: 250,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
  },
  featuresTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00ffcc',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  featureItem: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  button: {
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

export default InformationPage;
