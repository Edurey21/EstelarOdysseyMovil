import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

interface SuggestionFormProps {
  onSubmit: (form: SuggestionFormState) => void;
}

interface SuggestionFormState {
  nombre: string;
  apellido: string;
  email: string;
  planeta: string;
  nave: string;
  mision: string;
  recursos: string;
}

const SuggestionForm: React.FC<SuggestionFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState<SuggestionFormState>({
    nombre: '',
    apellido: '',
    email: '',
    planeta: '',
    nave: '',
    mision: '',
    recursos: ''
  });

  const handleChange = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = () => {
    onSubmit(form);
    setForm({
      nombre: '',
      apellido: '',
      email: '',
      planeta: '',
      nave: '',
      mision: '',
      recursos: ''
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#00ffcc"
        value={form.nombre}
        onChangeText={(value) => handleChange('nombre', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        placeholderTextColor="#00ffcc"
        value={form.apellido}
        onChangeText={(value) => handleChange('apellido', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#00ffcc"
        value={form.email}
        onChangeText={(value) => handleChange('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Planeta"
        placeholderTextColor="#00ffcc"
        value={form.planeta}
        onChangeText={(value) => handleChange('planeta', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nave Espacial"
        placeholderTextColor="#00ffcc"
        value={form.nave}
        onChangeText={(value) => handleChange('nave', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Misión"
        placeholderTextColor="#00ffcc"
        value={form.mision}
        onChangeText={(value) => handleChange('mision', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Recursos"
        placeholderTextColor="#00ffcc"
        value={form.recursos}
        onChangeText={(value) => handleChange('recursos', value)}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: '#0d0d0d',
    color: '#ffffff',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
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

export default SuggestionForm;
