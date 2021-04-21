import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FormContainer from '../../Shared/Form/FormContainer';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <FormContainer title={'Login'}>
      <Input
        placeholder={'Enter email'}
        name={'email'}
        id={'email'}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder={'Enter email'}
        name={'password'}
        id={'password'}
        value={email}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonGroup}>
        <Button title='Login' />
      </View>
      <View style={({ marginTop: 40 }, styles.buttonGroup)}>
        <Text style={styles.middleText}>Don't have an account yet?</Text>
        <Button
          title='Register'
          onPress={() => props.navigation.navigate('Register')}
        />
      </View>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    width: '80%',
    alignItems: 'center',
  },
  middleText: {
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default Register;
