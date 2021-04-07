import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

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
        <View>
            <Text>Product Container Screen</Text>
            <View style={{ margin: 100}}>
                <FlatList 
                    horizontal
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
    )
}

export default ProductContainer;