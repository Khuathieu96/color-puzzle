import React, { useState } from "react";
import { Alert, StyleSheet, Text, Pressable, View } from "react-native";
import Modal from "react-native-modal";
import { FontAwesome, Feather, AntDesign } from "react-native-vector-icons";
import { useTheme } from "../../context/ThemeContext/ThemeContext";
import { useCreateStyle } from "../../context/ThemeContext/useCreateStyle";

const Tab = ({ label, icon, onClick, odd }) => {
  const styles = useCreateStyle(getStyles);
  return (
    <Pressable onPress={onClick} style={styles.tab}>
      <Text
        style={
          odd
            ? { ...styles.tab__text, ...styles.backgroundLight }
            : styles.tab__text
        }
      >
        {label}
      </Text>
      <View
        style={
          odd
            ? { ...styles.tab__icon, ...styles.backgroundLightIcon }
            : styles.tab__icon
        }
      >
        {icon}
      </View>
    </Pressable>
  );
};

const DialogSetting = ({ open, onClose, onAgree, onCancel }) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const { state } = useTheme();
  const styles = useCreateStyle(getStyles);
  return (
    <Modal isVisible={open} onBackdropPress={onClose}>
      <View style={styles.centeredView}>
        <Tab
          label={"Sound: ON"}
          icon={
            <AntDesign name="sound" size={30} color={state.color.text.blue} />
          }
          onClick={() => {}}
        />
        <Tab
          label={"Remove Ads"}
          odd
          icon={
            <AntDesign name="delete" size={30} color={state.color.text.blue} />
          }
          onClick={() => {}}
        />
        <Tab
          label={"Give Us 5 stars"}
          icon={
            <AntDesign name="staro" size={30} color={state.color.text.blue} />
          }
          onClick={() => {}}
        />
        <Tab
          odd
          label={"More Games"}
          icon={
            <AntDesign name="codepen" size={30} color={state.color.text.blue} />
          }
          onClick={() => {}}
        />
        <Tab
          label={"Share with Friends"}
          icon={
            <AntDesign
              name="sharealt"
              size={30}
              color={state.color.text.blue}
            />
          }
          onClick={() => {}}
        />
        {/* <Tab />
          <Tab /> */}
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
    tab__text: {
      flex: 1,
      height: "100%",
      padding: 26,
      textAlign: "center",
      backgroundColor: theme.color.background.blueMiddle,
      color: theme.color.text.blue,
      ...theme.text.header2Medium
    },
    backgroundLight: {
      backgroundColor: theme.color.background.blueLight
    },
    backgroundLightIcon: {
      backgroundColor: theme.color.text.blueLight
    },
    tab__icon: {
      height: "100%",
      padding: 26,
      textAlign: "center",
      backgroundColor: theme.color.background.blueBold,

      ...theme.text.header2Medium
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      width: "100%",
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF"
    },
    buttonClose: {
      backgroundColor: "#2196F3"
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default DialogSetting;
