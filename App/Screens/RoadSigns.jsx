import React from "react";
import { View, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";
import RoadSignCard from "../Components/RoadSignCard";

const RoadSigns = () => {
  return (
    <ScreenContainer>
      <Header>
        <Title>Traffic Signs</Title>
        <StyledTextInput
          label="Search Traffic Signs"
          placeholder="Search by title or description"
          mode="outlined"
          activeOutlineColor="#8e97fd"
        />
      </Header>
      <CardContainer>
        <RoadSignCard
          icon={require("../../assets/Images/traffic-sign.png")}
          title="Priority Sign"
          description="Indicates which driver has the right of way at an intersection or road segment."
        />
        <Divider />
        <RoadSignCard
          icon={require("../../assets/Images/no-turn-right.png")}
          title="No Right Turn"
          description="Prohibits making a right turn at the upcoming intersection or road."
        />
        <Divider />
        <RoadSignCard
          icon={require("../../assets/Images/forbidden.png")}
          title="No Entry"
          description="Restricts vehicles from entering a particular street or area."
        />
        <Divider />
        <RoadSignCard
          icon={require("../../assets/Images/yield.png")}
          title="Yield"
          description="Requires drivers to slow down and give the right of way to other vehicles or pedestrians."
        />
        <Divider />
        <RoadSignCard
          icon={require("../../assets/Images/speed-limit.png")}
          title="Speed Limit"
          description="Indicates the maximum or minimum speed that vehicles are allowed to travel."
        />
        <Divider />
        <RoadSignCard
          icon={require("../../assets/Images/one-way.png")}
          title="One-Way Street"
          description="Indicates that traffic on the road flows in only one direction."
        />
      </CardContainer>
    </ScreenContainer>
  );
};

// Styled Components
const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;

const Header = styled.View`
  margin-bottom: 16px;
`;

const Title = styled.Text`
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 16px;
`;

const StyledTextInput = styled(TextInput)`
  margin-bottom: 12px;
  border-radius: 6px;
`;

const CardContainer = styled(ScrollView).attrs({
  contentContainerStyle: {
    alignItems: "center",
    paddingHorizontal: 8,
  },
})`
  flex-grow: 1; 
`;

const Divider = styled.View`
  width: 90%;
  height: 1px;
  background-color: #e0e0e0;
  margin-vertical: 12px;
`;

export default RoadSigns;
