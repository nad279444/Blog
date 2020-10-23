import React from "react";
import { View, StyleSheet, Text, Image} from "react-native";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  EvilIcons,
  Entypo
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DetailedBlog({ route, navigation }) {
  console.log(route.params);
  return (
    <View style={styles.blogContainer}>
      <View>
        <View style={styles.headerWidth}>
          <View style={styles.headerIcon}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="less-than"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerText}>Beauty</Text>
        </View>
        <View style={styles.headerLength}></View>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <SimpleLineIcons name="earphones" size={18} color="#46474a" />
        </View>
        <View style={styles.icon}>
          <EvilIcons name="heart" size={30} color="#46474a" />
        </View>
        <View style={styles.icon}>
          <EvilIcons name="share-google" size={30} color="#46474a" />
        </View>
      </View>
      <Image source={route.params.src} style={styles.blogImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{route.params.title1}</Text>
        <Text style={styles.title}>{route.params.title2}</Text>
        <Text style={styles.title}>{route.params.title3}</Text>
      </View>
      <View style={styles.profileContainer}>
      <Image source={route.params.profileImage} style={styles.profileImage} />
         
        <Text style={styles.profileText}>{route.params.name}</Text>
        <View style={styles.dot}><Entypo name="dot-single" size={24} color="grey" /></View>
        <Text  style={styles.profileText}>{route.params.time}</Text>
      </View>
      <Text style={styles.paragraph}>Sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants (plants of the division Magnoliophyta, also called angiosperms). The biological function of a flower is to facilitate reproduction, usually by providing a mechanism for the union of sperm with eggs. Flowers may facilitate outcrossing (fusion of sperm and eggs from different individuals in a population) resulting from cross pollination or allow selfing (fusion of sperm and egg from the same flower</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWidth: {
    width: 190,
    height: 70,
    backgroundColor: "pink",
    borderColor: "black",
    flexDirection: "row",
  },
  headerLength: {
    width: 10,
    height: 70,
    backgroundColor: "pink",
    borderColor: "black",
  },
  blogContainer: {
    paddingTop: 24,
  },
  headerText: {
    fontSize: 20,
    marginTop: 27,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  headerIcon: {
    marginTop: 30,
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 60,
    left: 230,
  },
  icon: {
    marginLeft: 10,
    
  },
  blogImage: {
    width: 300,
    height: 200,
    position: "absolute",
    top: 100,
    left: 15,
  },
  titleContainer: {
    alignItems: "flex-start",
    marginTop: 150,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginLeft: 15,
    
  },
  profileContainer:{
    flexDirection: 'row',
    marginTop: 10
    
  },
  profileText: {
    fontWeight: 'bold',
    color:'grey',
    marginLeft: 5,
    marginTop: 5

  },
  paragraph: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 18
  },
  dot: {
    marginLeft: 1,
    marginTop: 3
  }
});
