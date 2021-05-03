import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacityBase,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Item, Picker } from 'native-base';
import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import EasyButton from '../../Shared/StyledComponents/EasyButton';
import Error from '../../Shared/Error';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-community/async-storage';
import baseURL from '../../assets/common/baseUrl';
import axios from 'axios';

const ProductForm = (props) => {
  const [pickerValue, setPicker] = useState();
  const [brand, setBrand] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [mainImage, setMainImage] = useState();
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);
  const [token, setToken] = useState();
  const [err, setError] = useState();
  const [countInStock, setCountInStock] = useState();
  const [rating, setRating] = useState();
  const [isFeatured, setIsFeature] = useState(false);
  const [richDescription, setRichDescription] = useState();
  const [numReviews, setNumReviews] = useState(0);
  const [item, setItem] = useState(null);

  return (
    <FormContainer>
      <View>
        <Image source={{ uri: mainImage }} />
        <TouchableOpacity>
          <Text>IMAGE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.label}>
        <Text style={{ textDecorationLine: 'underline' }}>Brand</Text>
      </View>
      <Input
        placeholder='Brand'
        name='brand'
        id='brand'
        value={brand}
        onChangeText={(text) => setBrand(text)}
      />
      <View style={styles.label}>
        <Text style={{ textDecorationLine: 'underline' }}>Name</Text>
      </View>
      <Input
        placeholder='Name'
        name='name'
        id='name'
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <View style={styles.label}>
        <Text style={{ textDecorationLine: 'underline' }}>Price</Text>
      </View>
      <Input
        placeholder='Price'
        name='price'
        id='price'
        value={brand}
        keyboardType={'numeric'}
        onChangeText={(text) => setPrice(text)}
      />
      <View style={styles.label}>
        <Text style={{ textDecorationLine: 'underline' }}>Stock</Text>
      </View>
      <Input
        placeholder='Stock'
        name='stock'
        id='stock'
        value={countInStock}
        keyboardType={'numeric'}
        onChangeText={(text) => setCountInStock(text)}
      />
      <View style={styles.label}>
        <Text style={{ textDecorationLine: 'underline' }}>Description</Text>
      </View>
      <Input
        placeholder='Description'
        name='description'
        id='description'
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  label: {
    width: '80%',
    marginTop: 10,
  },
});

export default ProductForm;
