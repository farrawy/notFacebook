import { FlatList, Pressable, StyleSheet, Image, Text } from "react-native";
import React from "react";
import posts from "../../../assets/data/posts.json";
import FeedPost from "../../components/FeedPost";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const img = "https://ahmed-elfarra.netlify.app/assets/img/Ahmed-2.png";

const FeedScreen = () => {
  const createPost = () => {
    navigation.navigate("Create Post");
  };
  const navigation = useNavigation();
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <FeedPost post={item} />}
      ListHeaderComponent={() => (
        <Pressable onPress={createPost} style={styles.header}>
          <Image source={{ uri: img }} style={styles.profileImage} />
          <Text style={styles.name}>What's on your mind?</Text>
          <Entypo
            name="images"
            size={24}
            color="limegreen"
            style={styles.icon}
          />
        </Pressable>
      )}
    />
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
});
