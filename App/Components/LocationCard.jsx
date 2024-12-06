import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const LocationCard = ({
  backgroundSource,
  title,
  address,
  color = "#fff",
}) => (
  <BackgroundWrapper
    source={backgroundSource}
    resizeMode="stretch"
    style={{
      marginBottom: 14,
    }}
  >
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
      }}
    >
      <View>
        <Text style={{ fontWeight: 700, color: color, fontSize: 20 }}>
          {title}
        </Text>
        <Text style={{ color: color, paddingTop: 2, fontSize: 12 }}>
          {address}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          padding: 12,
          width: 48,
          height: 48,
        }}
      >
        <FontAwesome name="location-arrow" size={24} color="gray" />
      </View>
    </View>
  </BackgroundWrapper>
);

export default LocationCard;

const BackgroundWrapper = styled.ImageBackground`
  flex: 1;
  padding: 0px 20px;
  border-radius: 10px;
`;
