import React from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground, ScrollView } from 'react-native';

interface AdministradorHomePageProps {
  onLogout: () => void;
}

const AdministradorHomePage: React.FC<AdministradorHomePageProps> = ({ onLogout }) => {
  const suggestions = [
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      usuario: 'juan_perez123',
      planeta: 'Marte',
      nave: 'Explorador X1',
      mision: 'Recolectar minerales',
      recursos: 'Oxígeno, Agua'
    },
    {
      nombre: 'Ana',
      apellido: 'Gómez',
      usuario: 'ana_gomez456',
      planeta: 'Júpiter',
      nave: 'Viajero Z2',
      mision: 'Investigación atmosférica',
      recursos: 'Combustible, Provisiones'
    },
    {
      nombre: 'Carlos',
      apellido: 'López',
      usuario: 'carlos_lopez789',
      planeta: 'Saturno',
      nave: 'Aventurero S3',
      mision: 'Estudio de anillos',
      recursos: 'Herramientas científicas, Energía'
    },
    {
      nombre: 'María',
      apellido: 'Martínez',
      usuario: 'maria_martinez321',
      planeta: 'Venus',
      nave: 'Explorador V1',
      mision: 'Cartografiar la superficie',
      recursos: 'Drones, Cámaras'
    },
    {
      nombre: 'Pedro',
      apellido: 'Ramírez',
      usuario: 'pedro_ramirez654',
      planeta: 'Neptuno',
      nave: 'Aventurero N2',
      mision: 'Estudiar el clima',
      recursos: 'Estaciones meteorológicas, Energía'
    },
    {
      nombre: 'Lucía',
      apellido: 'Sánchez',
      usuario: 'lucia_sanchez987',
      planeta: 'Mercurio',
      nave: 'Viajero M3',
      mision: 'Investigación geológica',
      recursos: 'Herramientas geológicas, Oxígeno'
    },
  ];

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Panel de Administrador</Text>
        <View style={styles.content}>
          <Text style={styles.text}>
            Bienvenido al panel de administrador de Estelar Odyssey. Aquí podrás gestionar la información del juego y estar al tanto de todas las novedades.
          </Text>
          <Text style={styles.subtitle}>Últimas Actualizaciones del Juego:</Text>
          <Text style={styles.text}>
            - Nuevo sistema de misiones implementado.
          </Text>
          <Text style={styles.text}>
            - Mejoras en la jugabilidad y gráficos.
          </Text>
          <Text style={styles.text}>
            - Nuevas galaxias disponibles para la exploración.
          </Text>
          <Text style={styles.text}>
            - Eventos especiales programados para este mes.
          </Text>
        </View>
        <View style={styles.suggestionsContainer}>
          <Text style={styles.subtitle}>Sugerencias Recientes:</Text>
          {suggestions.map((suggestion, index) => (
            <View key={index} style={styles.suggestionItem}>
              <Text style={styles.suggestionText}><Text style={styles.bold}>Nombre:</Text> {suggestion.nombre}</Text>
              <Text style={styles.suggestionText}><Text style={styles.bold}>Apellido:</Text> {suggestion.apellido}</Text>
              <Text style={styles.suggestionText}><Text style={styles.bold}>Usuario:</Text> {suggestion.usuario}</Text>
              <Text style={styles.suggestionText}><Text style={styles.bold}>Planeta:</Text> {suggestion.planeta}</Text>
              <Text style={styles.suggestionText}><Text style={styles.bold}>Nave:</Text> {suggestion.nave}</Text>
              <Text style={styles.suggestionText}><Text style={styles.bold}>Misión:</Text> {suggestion.mision}</Text>
              <Text style={styles.suggestionText}><Text style={styles.bold}>Recursos:</Text> {suggestion.recursos}</Text>
            </View>
          ))}
        </View>
        <Pressable style={styles.button} onPress={onLogout}>
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 16,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#00ffcc',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    width: '100%',
    marginBottom: 20,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00cc99',
    textAlign: 'center',
    marginBottom: 10,
  },
  suggestionsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  suggestionItem: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginBottom: 20,
  },
  suggestionText: {
    color: '#ffffff',
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
    color: '#00cc99',
  },
  button: {
    marginTop: 10,
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

export default AdministradorHomePage;
