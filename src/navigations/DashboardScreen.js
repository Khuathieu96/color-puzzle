// import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView
} from "react-native";
import Carousel from "react-native-snap-carousel";
import BasicMode from "../containers/dashboard/BasicMode";
import ChallengeMode from "../containers/dashboard/ChallengeMode";
import CreateMode from "../containers/dashboard/CreateMode";
import LeaderBoard from "../containers/dashboard/LeaderBoard";
import { useTheme } from "../context/ThemeContext/ThemeContext";
import { useCreateStyle } from "../context/ThemeContext/useCreateStyle";
import { AntDesign, Ionicons, Entypo } from "react-native-vector-icons";
import DialogSetting from "../containers/dashboard/DialogSetting";

const sliderWidth = Dimensions.get("screen").width;
const _renderItem = ({ item, index }) => {
  const Component = item.component;
  return <Component />;
};

const dataModeGame = [
  {
    title: "Basic Mode",
    text: "Relaxing and elegant. No pressure.",
    component: BasicMode
  },
  {
    title: "Leader board",
    text: "Are you a Color Master?",
    component: LeaderBoard
  },
  {
    title: "Challenge Mode",
    text: "Challenge yourself and win rewards",
    component: ChallengeMode
  },
  {
    title: "Creative mode",
    text: "Create your own puzzles!",
    component: CreateMode
  }
];

const DashboardScreen = ({ navigation }) => {
  const carouselRef = React.createRef();
  const { state } = useTheme();

  const styles = useCreateStyle(getStyles);
  const [activeMode, setActiveMode] = useState(0);
  const [openSetting, setOpenSetting] = useState(false);

  const activeTab = dataModeGame[activeMode];
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.level}>
          <AntDesign name="hearto" size={30} /> {"  "}1
        </Text>
        <Text style={styles.name}>COLOR PUZZLE</Text>
        <Text style={styles.more} onPress={() => setOpenSetting(true)}>
          <Ionicons name="ellipsis-vertical" size={30} />
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.line}>_____________________</Text>

        <View style={styles.dots}>
          <Entypo
            name="dot-single"
            size={30}
            color={
              activeMode === 0
                ? state.color.text.blue
                : state.color.background.gray
            }
          />
          <Entypo
            name="dot-single"
            size={30}
            color={
              activeMode === 1
                ? state.color.text.blue
                : state.color.background.gray
            }
          />
          <Entypo
            name="dot-single"
            size={30}
            color={
              activeMode === 2
                ? state.color.text.blue
                : state.color.background.gray
            }
          />
          <Entypo
            name="dot-single"
            size={30}
            color={
              activeMode === 3
                ? state.color.text.blue
                : state.color.background.gray
            }
          />
        </View>
        <Text style={styles.line}>_____________________</Text>
      </View>
      <View style={styles.tab__carousel}>
        <AntDesign
          name="left"
          size={30}
          color={
            activeMode !== 0
              ? state.color.text.gray
              : state.color.background.yellow
          }
          onPress={() => {
            carouselRef.current.snapToPrev();
            // console.log(
            //   "carouselRef.current.",
            //   carouselRef.current?.currentIndex
            // );
          }}
        />

        <View style={styles.text__tab__carousel}>
          <Text style={styles.game__name}>{activeTab.title}</Text>
          <Text style={styles.game__name__descript}>{activeTab.text}</Text>
        </View>
        <AntDesign
          name="right"
          size={30}
          color={
            activeMode !== dataModeGame.length - 1
              ? state.color.text.gray
              : state.color.background.yellow
          }
          onPress={() => {
            carouselRef.current.snapToNext();
          }}
        />
      </View>
      <Carousel
        ref={carouselRef}
        data={dataModeGame}
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        // onBeforeSnapToItem={a => console.log("onBeforeSnapToItem", a)}
        onSnapToItem={a => setActiveMode(a)}
      />
      {openSetting && (
        <DialogSetting
          open={openSetting}
          onClose={() => setOpenSetting(false)}
        />
      )}
    </View>
  );
};

const getStyles = theme => {
  return StyleSheet.create({
    root: {
      flex: 2,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.color.background.yellow
    },
    line: { color: theme.color.line.grayYellow },
    dots: {
      flexDirection: "row"
    },
    game__name: {
      color: theme.color.text.blue,
      ...theme.text.body
    },
    game__name__descript: {
      color: theme.color.text.gray,
      ...theme.text.body
    },
    tab__carousel: {
      width: "100%",

      color: theme.color.text.red,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 12
    },
    text__tab__carousel: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },

    name: {
      flex: 2,
      color: theme.color.text.blue,
      ...theme.text.header1,
      textAlign: "center"
    },
    level: {
      flex: 2,
      color: theme.color.text.gray,
      ...theme.text.header1
    },
    more: {
      flex: 2,
      color: theme.color.text.red,
      textAlign: "right"
    },
    header: {
      width: "100%",
      height: 100,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 12,
      paddingTop: 24
    }
  });
};

export default DashboardScreen;
