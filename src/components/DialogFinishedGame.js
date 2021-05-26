import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  FlatList
} from "react-native";
import Modal from "react-native-modal";
import { FontAwesome, Feather, AntDesign } from "react-native-vector-icons";

import { useTheme } from "../context/ThemeContext/ThemeContext";
import { useCreateStyle } from "../context/ThemeContext/useCreateStyle";
import { dataColor } from "../utils/data";
import Button from "./Button";
import TextColumn from "./TextColumn";
import CardColor from "./CardColor";

const DialogFinishedGame = ({ open, onClose, onAgree, onCancel }) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const { state } = useTheme();
  const styles = useCreateStyle(getStyles);
  return (
    <Modal isVisible={open} onBackdropPress={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.header}>
          <TextColumn
            text="LEVEL"
            num={6}
            styleNum={{ color: state.color.text.white }}
          />
          <View style={styles.column__left}>
            <TextColumn
              text="YOUR MOVES"
              num={6}
              styleText={{ width: 100 }}
              styleNum={{ color: state.color.text.white }}
            />
            <TextColumn
              text="WORLD AVERAGE"
              num={4}
              styleText={{ width: 100 }}
              styleNum={{ color: state.color.text.white }}
            />
          </View>
        </View>
        <SafeAreaView style={styles.board__game}>
          <FlatList
            data={dataColor}
            numColumns={7}
            renderItem={({ item }) => <CardColor {...item} />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        <View style={styles.button__bar}>
          <Button
            icon={
              <AntDesign name="close" size={30} color={state.color.text.gray} />
            }
            style={styles.buttonClose}
          />
          <Button
            icon={
              <AntDesign
                name="picture"
                size={30}
                color={state.color.text.gray}
              />
            }
            style={styles.buttonImage}
          />
          <Button
            icon={
              <AntDesign
                name="sharealt"
                size={30}
                color={state.color.text.gray}
              />
            }
            style={styles.buttonShare}
          />
          <Button
            icon={
              <AntDesign
                name="reload1"
                size={30}
                color={state.color.text.gray}
              />
            }
            style={styles.buttonPlay}
            text="PLAY AGAIN"
          />
        </View>
      </View>
    </Modal>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    tab: {
      width: "100%",
      height: 82,
      display: "flex",
      flexDirection: "row"
    },
    buttonClose: {
      flex: 1,
      backgroundColor: theme.color.background.gray
    },
    buttonImage: {
      flex: 1,
      backgroundColor: theme.color.background.grayMiddle
    },
    buttonShare: {
      flex: 1,
      backgroundColor: theme.color.background.grayLight
    },
    buttonPlay: {
      flex: 3,
      backgroundColor: theme.color.background.whiteGray
    },
    button__bar: {
      flexDirection: "row"
    },

    centeredView: {
      flex: 1
    },

    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF"
    },

    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    header: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      // padding: 24
      paddingBottom: 24
    },

    board__game: {
      flex: 1,
      height: "100%"
    },
    column__left: {
      flexDirection: "row"
    }
  });

export default DialogFinishedGame;
