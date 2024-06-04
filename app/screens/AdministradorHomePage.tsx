import React from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';

interface AdministradorHomePageProps {
  onLogout: () => void;
}

const AdministradorHomePage: React.FC<AdministradorHomePageProps> = ({ onLogout }) => {
  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
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
        <Pressable style={styles.button} onPress={onLogout}>
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </Pressable>
      </View>
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
    flex: 1,
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
