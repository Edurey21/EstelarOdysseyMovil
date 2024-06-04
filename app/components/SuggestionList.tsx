import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Suggestion {
  nombre: string;
  apellido: string;
  email: string;
  planeta: string;
  nave: string;
  mision: string;
  recursos: string;
}

interface SuggestionListProps {
  suggestions: Suggestion[];
}

const SuggestionList: React.FC<SuggestionListProps> = ({ suggestions }) => {
  if (!suggestions.length) {
    return <Text style={styles.noSuggestions}>No hay sugerencias disponibles.</Text>;
  }

  return (
    <View style={styles.container}>
      {suggestions.map((suggestion, index) => (
        <View key={index} style={styles.suggestionItem}>
          <Text><Text style={styles.bold}>Nombre:</Text> {suggestion.nombre}</Text>
          <Text><Text style={styles.bold}>Apellido:</Text> {suggestion.apellido}</Text>
          <Text><Text style={styles.bold}>Email:</Text> {suggestion.email}</Text>
          <Text><Text style={styles.bold}>Planeta:</Text> {suggestion.planeta}</Text>
          <Text><Text style={styles.bold}>Nave:</Text> {suggestion.nave}</Text>
          <Text><Text style={styles.bold}>Misión:</Text> {suggestion.mision}</Text>
          <Text><Text style={styles.bold}>Recursos:</Text> {suggestion.recursos}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#0d0d0d',
    borderRadius: 10,
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    margin: 'auto',
    maxWidth: 800,
  },
  noSuggestions: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
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
  bold: {
    fontWeight: 'bold',
    color: '#00cc99',
  },
});

export default SuggestionList;
