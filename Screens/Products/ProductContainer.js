import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';

const data = require('../../assets/data/products.json');
const categories = require('../../assets/data/categories.json');

import ProductList  from "../Products/ProductList";
import SearchedProduct from './SearchedProducts';
import Banner from '../../Shared/Banner';

const ProductContainer = () => {
    const [ products, setProducts ] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitial] = useState([]);
    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(data);
        setCategories(categories);
        setActive(-1);
        setInitialState(data);

        return () => {
            setProducts([]);
            setProductsFiltered([])
            setFocus()
            setCategories([]);
            setActive();
            setInitialState();
        }
    }, [])

    const seachProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = () => {
        setFocus(true);
    }

    const onBlur = () => {
        setFocus(false);
    }

    return (
        <Container>
            <Header searchBar rounded >
                <Item>
                    <Icon name="ios-search"/>
                    <Input 
                        placeholder="Search"
                        onFocus={openList}
                        onChangeText = {(text) => seachProduct(text)}
                    />
                    {focus === true ? (
                        <Icon onPress={onBlur} name="ios-close" />
                    ): null}
                </Item>
            </Header>
            {focus === true ? (
                <SearchedProduct 
                    productsFiltered = {productsFiltered}
                />
            ) : (
            <View style={styles.container}>
                <View>
                    <Banner />
                </View>
                <View style={styles.listContainer}>
                    <FlatList 
                        numColumns={2}
                        keyExtractor = {(item) => item.name}
                        data = {products}
                        renderItem = {({item}) => <ProductList 
                            key={item.id} 
                            item={item}
                        />
                        }
                    />
                </View>
            </View>
            )}
            
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    listContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    }
  });

export default ProductContainer;