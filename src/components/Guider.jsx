import React, { useRef } from "react";
import { Animated, Dimensions, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import {img1,img2,img3} from "../assets/index.js"

const DATA = [
    {
        Topic: "Lets Traveling",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img:img1
    },
    {
        Topic: "Navigation",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img:img2
    },
    {
        Topic: "Destination",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img:img3
    },
]


const renderItem = (item,index)=>{
    return(
        <View key={index}>
        <Image source={item.img} resizeMode="cover"
        style={{
            width:Dimensions.get('window').width,
            height:Dimensions.get('window').height}}
    />
        <View style={
            { position:"absolute",
            top:10,
            paddingLeft:30,
            paddingRight:30,
            alignItems:"center",
            justifyContent:"center",
            textAlign:"center",
            }}>
        <Text style={
            { 
            fontSize:30,
            color:"black",
            }
        }>{item.Topic}</Text>        
        <Text style={
            { 
            fontSize:16,
            color:"black",
            fontStyle:"italic"
            }
        }>{item.desc}</Text>
        </View>
        </View>
    )
}

function dotContainer(item){
    console.log("dotContainer")
    return (
    <View style={{
        flexDirection:"row",
        justifyContent:"space-evenly",
        width: Dimensions.get('window').width / 3,
        backgroundColor:"red",
    }}>
    {DATA.map((item,index)=>{
            const dotOpacity = scrollX.interpolate({
                inputRange: [index - 1 , index , index + 1],
                outputRange:[0.3,1,0.],
                extrapolate:"clamp"
            })
            console.log("dot opacity",dotOpacity);
            console.log("dotValue",dotValue);
            return <Animated.View key={index}
                style={{
                width:5,
                borderRadius:5,
                borderWidth:5,
                borderColor:"white",
                bottom:100,
                opacity:dotOpacity
                }}/>  
    })}
    </View> )
}

const Guider = ()=> {
    const scrollX = useRef(new Animated.Value(0)).current;
    const dotValue = Animated.divide(scrollX,Dimensions.get('window').width)
    return(
        
        <View style={{alignItems:"center",flex:1}}>
            <ScrollView 
            horizontal
            pagingEnabled
            decelerationRate={0}
            scrollEventThrottle={15}
            onScroll={(event)=>{scrollX.setValue(event.nativeEvent.contentOffset.x),
            console.log(scrollX)}}
            showsHorizontalScrollIndicator={false}
            style={{height:"100%"}}>
            {DATA.map((item,index)=>{
                return renderItem(item,index)
            })}
            </ScrollView>
            <View style={{
                position:"absolute",
                bottom:40,
                flexDirection:"row",
                justifyContent:"space-evenly",
                width: Dimensions.get('window').width / 3
            }}>
                {DATA.map((item,index)=>{
                    const dotOpacity = scrollX.interpolate({
                    inputRange: [index - 1 , index , index + 1],
                    outputRange:[0.3,1,0.],
                    extrapolate:"clamp"
                    })
                    console.log("dot opacity",dotOpacity);
                    console.log("dotValue",dotValue);
                    return <Animated.View key={index}
                        style={{
                        width:5,
                        borderRadius:5,
                        borderWidth:5,
                        borderColor:"white",
                        bottom:100,
                        opacity:dotOpacity
                }}/>  
            })}
            </View> 
            </View>
    )
}
export default Guider