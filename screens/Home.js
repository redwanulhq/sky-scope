import React, { useState } from "react";
import bgImg from "../assets/bg.jpg";
import {
  Animated,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Fontisto";

const Home = () => {
  const [expandSearch, setExpandSearch] = useState(false);
  const windoWidth = useWindowDimensions().width;
  const widthValue = useState(new Animated.Value(50))[0];
  const [searchText, setSearchText] = useState("");

  const toggleExpand = () => {
    const targetWidth = expandSearch ? windoWidth - 30 : 50;

    Animated.timing(widthValue, {
      toValue: targetWidth,
      duration: 200,
      useNativeDriver: false,
    }).start();

    setExpandSearch(!expandSearch);
  };

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      <StatusBar style="light" />
      <ImageBackground
        blurRadius={70}
        source={bgImg}
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? 35 : 0,
        }}
      >
        <View style={{ padding: 15, alignItems: "flex-end" }}>
          <Animated.View
            style={{
              backgroundColor: "#fff",
              borderRadius: 25,
              width: widthValue,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={toggleExpand}>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 25,
                }}
              >
                <Icon name="search" size={20} />
              </View>
            </TouchableOpacity>
            {!expandSearch && (
              <TextInput
                style={{
                  height: 50,
                  width: windoWidth - 80,
                  fontSize: 20,
                }}
                autoFocus
                onChangeText={(newText) => setSearchText(newText)}
                defaultValue={""}
              />
            )}
          </Animated.View>
        </View>
        <Text style={{ color: "#fff" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut dicta
          eveniet officiis! Officia laborum, ullam beatae et necessitatibus
          tempore assumenda quidem commodi exercitationem eos libero, ut
          cupiditate cumque quos? In. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Non impedit, molestiae sequi vero assumenda commodi
          maxime minima in illo laborum? Sequi ratione distinctio aliquid iusto
          placeat autem maxime inventore obcaecati numquam eveniet officiis iste
          labore ea non deleniti, laborum sunt nobis excepturi voluptas. Placeat
          deleniti magnam doloremque beatae, consectetur minima itaque delectus
          adipisci perferendis corporis porro quidem quos repellendus eligendi
          accusantium temporibus, repellat distinctio quod a. Unde sunt minus
          voluptatem, optio itaque harum qui nobis non quos et vel labore sit
          recusandae dolores aut quaerat facere voluptate. Hic voluptas quaerat
          doloribus provident sed sit, ea sapiente soluta quidem vel, libero
          quibusdam incidunt. Fuga assumenda molestiae, totam maxime nihil illum
          dolor explicabo non alias libero eligendi dignissimos accusantium
          laboriosam delectus unde expedita eveniet odio quam quas a ullam
          ducimus! Ut quaerat illo deserunt animi, sint eveniet enim quod ad cum
          sunt placeat velit est ex eligendi corrupti natus. Iste suscipit
          facere exercitationem veritatis soluta ipsam nulla qui aliquam
          pariatur porro est odio atque quas odit, molestias ad neque autem
          placeat. Dignissimos illum facere deleniti, pariatur beatae rerum
          expedita dolore et sint, aspernatur similique fugiat est nisi
          quibusdam nam quidem obcaecati asperiores minima esse, maxime sapiente
          impedit eum vitae. Sit cupiditate impedit unde ab minus quam nihil
          nulla, officiis totam minima, quidem placeat at velit aliquam deserunt
          veritatis natus accusamus vitae sed porro cum, ipsa fugit. Distinctio
          esse quaerat beatae, aperiam repellat tenetur quidem possimus, numquam
          voluptatem natus at eum officia odio labore saepe? Totam soluta saepe
          assumenda, delectus, deserunt laborum sequi, omnis debitis provident
          earum dolore. Soluta perferendis officiis ea, vel atque veniam
          molestiae quod odio debitis iusto? Veniam, quae. Veniam, adipisci.
          Eaque excepturi aliquam eos sit asperiores sapiente, a modi fuga. A
          beatae fuga velit quasi expedita aperiam ea recusandae nulla harum
          eius saepe, necessitatibus eligendi modi repellat, reiciendis
          voluptatem!
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
