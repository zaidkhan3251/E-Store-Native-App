import * as React from 'react';
import { View, Text } from "react-native";
import { ImageSlider } from "react-native-image-slider-banner";

export default function Banner() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageSlider 
    data={[
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYngYEb8IloHjbOWpSTjqIvcHu4c72rOpAIeYKTmOuPhyGRISvrUQdghZtl86saZcAQ8&usqp=CAU'},
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHKsJivvY_yO5BzwtS-vKgbyGS14zcBO5IvBzlgecQ_RuosY4SENCOTqJ_s5mrlgGeCY&usqp=CAU'},
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SV0t9HM4n6LxuTO8xaWm-r1rsjBaYrTC67FIEIqsv9GWOt4r_t3vEDNPQxUBl4tPiGA&usqp=CAU'}
    ]}
    autoPlay={false}
    onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
/>
      </View>
    );
  }