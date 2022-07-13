import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Modal, TextInput } from "react-native";
import style from "./style";

const Popup = (props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.modalStatus}>
      <View style={style.popupWrapper}>
        <View style={style.popup}>
          <View
            style={[
              style.btn,
              {
                backgroundColor: "red",
                width: "15%",
                position: "absolute",
                right: 8,
                top: 8,
              },
            ]}
          >
            <TouchableOpacity onPress={() => props.setmodalStatus(false)}>
              <Text style={style.btntxt}>Close</Text>
            </TouchableOpacity>
          </View>
          {props.actKey !== "view" ? (
            <View style={{ marginTop: "10%", padding: "5%" }}>
              <Text>Add/Edit Note</Text>
              <TextInput
                multiline
                numberOfLines={4}
                style={style.input}
                onChangeText={props.onChangeText}
                value={props.note}
              />

              <View
                style={[
                  style.btn,
                  {
                    backgroundColor: "blue",
                    width: "20%",
                    marginTop: 18,
                  },
                ]}
              >
                {props.actKey == "new" ? (
                  <TouchableOpacity
                    disabled={!props.note}
                    onPress={() => [
                      props.addObjectValue(),
                      props.setmodalStatus(false),
                    ]}
                  >
                    <Text style={style.btntxt}>Submit</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    disabled={!props.note}
                    onPress={() => [
                      props.updateObjectValue(),
                      props.setmodalStatus(false),
                    ]}
                  >
                    <Text style={style.btntxt}>Update</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ) : (
            <View style={{ marginTop: "10%", padding: "5%" }}>
              <Text>Note</Text>
              <Text
                style={{
                  marginTop: 18,
                }}
              >
                {props.note}
              </Text>
              <View
                style={[
                  style.btn,
                  {
                    backgroundColor: "maroon",
                    width: "19%",
                    marginTop: 18,
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={() => [
                    props.removeValue(),
                    props.setmodalStatus(false),
                  ]}
                >
                  <Text style={style.btntxt}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default Popup;
