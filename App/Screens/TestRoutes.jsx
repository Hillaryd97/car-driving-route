import { View, Text, ScrollView } from "react-native";
import React from "react";
import TestRouteCard from "../Components/TestRouteCard";
import Feather from "@expo/vector-icons/Feather";
import styled from "styled-components";
const TestRoutes = () => {
  return (
    <ScrollView>
      <Container>
        <FlexRow>
          <IconContainer>
            <Feather name="send" size={20} color="black" />
          </IconContainer>
          <TitleText>Navigate to Test Center</TitleText>
        </FlexRow>
        <Text>
          Units 36 - 37 Evans Easypace, Earls Road, Grangemouth, Stirling and
          Failkirk, FK3 BUU
        </Text>
      </Container>
      <TestRouteCard
        routeName={"Car Test Route 01"}
        distance={8.85}
        time={28}
        session={0}
      />
      <TestRouteCard
        routeName={"Car Test Route 02"}
        distance={7.34}
        time={23}
        session={0}
      />
      <TestRouteCard
        routeName={"Car Test Route 03"}
        distance={8.66}
        time={27}
        session={0}
      />
      <TestRouteCard
        routeName={"Car Test Route 04"}
        distance={5.15}
        time={20}
        session={0}
      />
    </ScrollView>
  );
};

export default TestRoutes;

const TitleText = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;

const IconContainer = styled.View`
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #eee;
`;
const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 6px 0px;
  width: 100%;
  gap: 14px;
`;

const Container = styled.Pressable`
  border-radius: 12px;
  background-color: #fff;
  padding: 8px 16px;
  margin: 6px 10px;
`;
