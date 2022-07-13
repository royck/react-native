import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import style from "./style";
import Popup from "./popup";
// import mockData from "./MOCK_DATA.json";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [mainData, setmaindata] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [actKey, setactKey] = useState("");
  const [actnote, onChangeNote] = React.useState("");
  const [actnotekey, onChangeNotekey] = React.useState("");

  // import all the data from async storage

  importData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      return setmaindata(result);
    } catch (error) {
      console.error(error);
    }
  };

  // add  the data from async storage

  addObjectValue = async () => {
    try {
      const jsonValues = JSON.stringify({ name: actnote });
      await AsyncStorage.setItem(
        (Math.max(...mainData.map((a) => a[0])) + 1).toString(),
        jsonValues
      );
      importData();
      onChangeNote(null);
    } catch (e) {
      // save error
    }

    console.log("Done.");
  };

  // update  the data from async storage

  updateObjectValue = async () => {
    try {
      const jsonValues = JSON.stringify({ name: actnote });
      await AsyncStorage.setItem(actnotekey, jsonValues);
      importData();
      onChangeNote(null);
    } catch (e) {
      // save error
    }

    console.log("Done.");
  };

  // remove  the data from async storage

  removeValue = async () => {
    try {
      await AsyncStorage.removeItem(actnotekey);
      importData();
    } catch (e) {
      // remove error
    }

    console.log("Done.");
  };

  // clear all the data from async storage
  clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log("Done.");
  };

  if (!mounted) {
    console.log("test");
    importData();
    // clearAll();
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <View style={style.mainwrapper}>
      <View style={style.headercontainer}>
        <Text style={style.name}>NOTE</Text>
        <View
          style={[style.btn, { backgroundColor: "blue", marginTop: "10%" }]}
        >
          <TouchableOpacity
            onPress={() => [setactKey("new"), setModalVisible(true)]}
          >
            <Text style={style.btntxt}>Add Note</Text>
          </TouchableOpacity>
        </View>
      </View>
      {mainData !== null ? (
        <ScrollView style={style.listcontiner}>
          {mainData
            .sort((a, b) => (a[0] > b[0] ? 1 : -1))
            .map((data, i) => (
              <View style={style.list} key={i}>
                <TouchableOpacity
                  style={{ width: "90%" }}
                  onPress={() => [
                    setactKey("view"),
                    setModalVisible(true),
                    onChangeNotekey(data[0]),
                    onChangeNote(JSON.parse(data[1]).name),
                  ]}
                >
                  <Text style={style.tskname}>{data[0]}</Text>
                  <Text style={style.tskname}>{JSON.parse(data[1]).name}</Text>
                </TouchableOpacity>
                <View style={[style.btn, { backgroundColor: "darkgreen" }]}>
                  <TouchableOpacity
                    onPress={() => [
                      setactKey("edit"),
                      setModalVisible(true),
                      onChangeNotekey(data[0]),
                      onChangeNote(JSON.parse(data[1]).name),
                    ]}
                  >
                    <Text style={style.btntxt}>edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
        </ScrollView>
      ) : null}
      <Popup
        actKey={actKey}
        modalStatus={modalVisible}
        setmodalStatus={setModalVisible}
        addObjectValue={addObjectValue}
        onChangeText={onChangeNote}
        note={actnote}
        removeValue={removeValue}
        updateObjectValue={updateObjectValue}
      />
    </View>
  );
};

export default Home;
