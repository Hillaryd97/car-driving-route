import { View, Text } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

const TestRouteCard = ({ routeName, time, distance, session }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("MapScreen");
  };
  return (
    <Container onPress={handlePress}>
      <FlexRow>
        <IconContainer>
          <FontAwesome5 name="car" size={24} color="black" />
        </IconContainer>
        <TitleText>{routeName}</TitleText>
      </FlexRow>
      <FlexRow>
        <View>
          <Text>To Finish</Text>
          <BoldText>{time} min</BoldText>
        </View>
        <View>
          <Text>Distance</Text>
          <BoldText>{distance} mi</BoldText>
        </View>
        <View>
          <Text>Session</Text>
          <BoldText>{session}</BoldText>
        </View>
      </FlexRow>
    </Container>
  );
};

const TitleText = styled.Text`
  font-weight: 700;
  font-size: 18px;
`;
const BoldText = styled.Text`
  font-weight: 700;
  margin: 2px 0px
`;

const IconContainer = styled.View`
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #eee;
`;
const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: between;
  margin: 8px;
  align-content: center;
  width: 100%;
  gap: 14px;
`;

const Container = styled.Pressable`
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 8px 16px;
  margin: 6px 10px;
`;
export default TestRouteCard;
