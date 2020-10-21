import React from "react";
import Blog from "../components/Blog";
import {  View,FlatList } from "react-native";

export default function Data({navigation}) {
  const BlogData = [
    {
      title1: "Does dry in January ",
      title2: "Actually Improve Your",
      title3: "Health ?",
      src:    require('../assets/f.jpg'),
      profileImage: require("../assets/sweater.jpg"),
      name: "Leonardo",
      time: "4 minute read",
      key: 45344668,
    },

    {
      title1: "How to Seem Like You ",
      title2: "Always Have A Shot ",
      title3: "Together ",
      src:    require('../assets/fl.jpg'),
      profileImage: require("../assets/sweater.jpg"),
      name: "Rafael",
      time: "4 minute read",
      key: 4534465768786,
    },

    {
      title1: "Is CrossPlatform  ",
      title2: "The Future Of",
      title3: "Mobile ?",
      src:    require('../assets/flo.jpg'),
      profileImage: require("../assets/sweater.jpg"),
      name: "Donatello",
      time: "3 minute read",
      key: 444677687868,
    },

    {
      title1: "The Most Beautiful",
      title2: "Flowers Smell The",
      title3: "Worst",
      src:    require("../assets/flow.jpg"),
      profileImage: require("../assets/sweater.jpg"),
      name: "Michael",
      time: "6 minute read",
      key: 34465768786890,
    },



  ];
  return (
    <View>
      <FlatList
        data={BlogData}
        renderItem={({ item }) => {
          return (
            <Blog 
            title1={item.title1} 
            title2={item.title2} 
            title3={item.title3} 
            src={item.src}
            profileImage={item.profileImage} 
            name={item.name} 
            time={item.time}
            navigation={navigation}
            item={item}
            />
          );
        }}
        keyExtractor={(item) => item.key.toString()}
      />
    </View>
  );
}

