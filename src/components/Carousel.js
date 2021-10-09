import React,{useRef} from "react";
import {View} from "react-native";
import CarouselComp from "react-native-snap-carousel";
import CarouselItem, { ITEM_WIDTH} from "./CarouselItem";
import { SCREEN_WIDTH } from "../Constants/Constants";
import appData from './appData';


const Carousel =()=>{ 
  const isCarousel =useRef(null);
  return (
    <View>
    <CarouselComp 
    layout="default"
    layoutcardoffset={18}
    ref={isCarousel}
          data={appData}
          renderItem={CarouselItem}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={ITEM_WIDTH}
          
 
    
    />
    </View>
    
  )
}
export default Carousel;
