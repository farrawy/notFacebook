import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import LikeImage from "../../assets/images/like.png";

const FeedPost = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View
      style={[
        styles.post,
        { backgroundColor: colors.light.background.default },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: post.User.image }} style={styles.profileImage} />
        <View>
          <Text
            style={[styles.name, { color: colors.light.typography.primary }]}
          >
            {post.User.name}
          </Text>
          <Text
            style={[
              styles.subtitle,
              { color: colors.light.typography.secondary },
            ]}
          >
            {post.createdAt}
          </Text>
        </View>

        <Entypo
          name="dots-three-horizontal"
          size={18}
          color={colors.light.typography.secondary}
          style={styles.icon}
        />
      </View>

      {/* Body */}
      <Text
        style={[styles.description, { color: colors.light.typography.primary }]}
      >
        {post.description}
      </Text>

      {post.image && (
        <Image source={{ uri: post.image }} style={styles.image} />
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.statsRow}>
          <Image source={LikeImage} style={styles.likeIcon} />
          <Text
            style={[styles.likeBy, { color: colors.light.typography.primary }]}
          >
            You and {post.numberOfLikes} others
          </Text>
          <Text
            style={[
              styles.shares,
              { color: colors.light.typography.secondary },
            ]}
          >
            {post.numberOfShares} shares
          </Text>
        </View>
        {/* Buttons Row */}
        <View style={styles.buttonsRow}>
          {/* Like */}
          <Pressable
            style={styles.iconButton}
            onPress={() => setIsLiked(!isLiked)}
          >
            <AntDesign
              name={isLiked ? "like1" : "like2"}
              size={18}
              color={isLiked ? "royalblue" : colors.light.buttons.active}
            />

            <Text
              style={[
                styles.iconButtonText,
                { color: colors.light.typography.secondary },
              ]}
            >
              Like
            </Text>
          </Pressable>

          {/* Comment */}
          <View style={styles.iconButton}>
            <FontAwesome5
              name="comment-alt"
              size={18}
              color={colors.light.buttons.active}
            />

            <Text
              style={[
                styles.iconButtonText,
                { color: colors.light.typography.secondary },
              ]}
            >
              Comment
            </Text>
          </View>

          {/* Share */}
          <View style={styles.iconButton}>
            <MaterialCommunityIcons
              name="share-outline"
              size={24}
              color={colors.light.buttons.active}
            />

            <Text
              style={[
                styles.iconButtonText,
                { color: colors.light.typography.secondary },
              ]}
            >
              Share
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedPost;

const styles = StyleSheet.create({
  //! Header
  post: {
    width: "100%",
    marginBottom: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {},
  icon: {
    marginLeft: "auto",
  },

  //! Body
  description: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },

  //! Footer
  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    paddingVertical: 10,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likeBy: {},
  shares: {
    marginLeft: "auto",
  },

  // Buttons row
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    marginLeft: 5,
  },
});
