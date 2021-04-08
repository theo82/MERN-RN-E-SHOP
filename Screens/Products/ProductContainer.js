import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';

const data = require('../../assets/data/products.json');

import ProductList  from "../Products/ProductList";

const ProductContainer = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        setProducts(data);

        return () => {
            setProducts([])
        }
    }, [])

    return (
        <Container>
            <Header searchBar rounded >
                <Item>
                    <Icon name="ios-search"/>
                    <Input 
                        placeholder="Search"
                        // onFocus={}
                        // onChangeText = {(text) => }

                        
                    />
                </Item>
            </Header>
            
            <View style={styles.container}>
                    <Text>Product Container Screen</Text>
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