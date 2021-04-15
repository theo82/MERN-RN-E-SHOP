import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from '../Screens/Cart/Cart';
import CartCheckout from '../Screens/Cart/CartCheckout';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Cart'
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Checkout'
        component={CartCheckout}
        options={{
          title: 'Checkout',
        }}
      />
    </Stack.Navigator>
  );
}

export default function CartNavigator() {
  return <MyStack />;
}
