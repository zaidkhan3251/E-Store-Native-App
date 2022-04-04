import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const AddToCart=({product,quantity})=>{
  return (
    {type:"ADD_TO_CART",payload:{product,quantity}}
  )
}
export const Increment=(product)=>{
  return (
  { type: 'INC', payload: product.id }
  )
}
export const Decrement=(product)=>{
  return (
  { type: 'INC', payload: product.id }
  )
}
const styles = StyleSheet.create({})