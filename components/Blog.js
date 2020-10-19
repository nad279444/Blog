import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Blog({
  title1,
  title2,
  title3,
  src,
  profileImage,
  name,
  time,
  navigation,
  item
  
}) {
  return (
    <View style={styles.container}>
      <View style={styles.outerContainer}>
        <View style={styles.specificContainer}>
          <View>
            <View style={styles.rectWidth}></View>
            <View style={styles.rectLength}></View>
          </View>
          <View>
            <View style={styles.imageContainer}>
              <Image source={src} style={{ width: 100, height: 130 }} />
              <View style={styles.innerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Beauty',item)}>
                  <Text style={styles.headerText}> {title1}</Text>
                  <Text style={styles.headerText}> {title2}</Text>
                  <Text style={styles.headerText}> {title3}</Text>
                </TouchableOpacity>

                <Image source={profileImage} style={styles.profileImage} />
                <View style={styles.profileTextContainer}>
                  <Text style={styles.profileText}> {name}</Text>
                  <Entypo name="dot-single" size={24} color="grey" />
                  <Text style={styles.profileText}> {time}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rectWidth: {
    width: 115,
    height: 10,
    backgroundColor: "pink",
    borderColor: "black",
  },
  rectLength: {
    width: 10,
    height: 80,
    backgroundColor: "pink",
    borderColor: "black",
  },
  imageContainer: {
    position: "absolute",
    left: 15,
    bottom: -55,
    flexDirection: "row",
  },
  profileTextContainer: {
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 30,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    position: "absolute",
    top: 100,
    left: 5,
  },
  innerContainer: {
    paddingLeft: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  outerContainer: {
    marginTop: 20,
    paddingLeft: 10,
    paddingTop: 10,
    width: 450,
    height: 200,
    borderColor: "black",
    backgroundColor: "white",
  },
  specificContainer: {
    marginTop: 20,
  },
  container: {
    backgroundColor: "#e6e9fa",
  },
});
