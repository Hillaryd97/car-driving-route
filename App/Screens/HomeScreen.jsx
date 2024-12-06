import { View, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import LocationCard from "../Components/LocationCard";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("TestRoutes");
  };

  return (
    <StyledSafeAreaView>
      <HeaderWrapper>
        <HeaderTitle>Hello User</HeaderTitle>
        <HeaderSubtitle>
          You are on schedule - Click Here for test ready
        </HeaderSubtitle>
      </HeaderWrapper>

      <CardContainer>
        <StyledBackgroundWrapper
          source={require("../../assets/Images/box2.png")}
          resizeMode="stretch"
        >
          <CardContent>
            <CardText> Total Practice: </CardText>
            <CardSubText> 13 Hours </CardSubText>
            <CardText> Test Center: </CardText>
            <CardSubText> St. Helens </CardSubText>
          </CardContent>
        </StyledBackgroundWrapper>

        <StyledBackgroundWrapper
          source={require("../../assets/Images/box1.png")}
          resizeMode="stretch"
        >
          <CardContent>
            <CardText> Your Test is in: </CardText>
            <CardSubText> 13 Days </CardSubText>
            <CardText> You Prepared </CardText>
            <CardSubText> 64% Ready </CardSubText>
          </CardContent>
        </StyledBackgroundWrapper>
      </CardContainer>

      <StyledTextInput
        label="Search Test Center"
        placeholder="Name, City, Address or Postcode"
        mode="outlined"
        activeOutlineColor="#8e97fd"
      />

      <ScrollView>

        <Pressable onPress={handlePress}>
          <LocationCard
            backgroundSource={require("../../assets/Images/box3.png")}
            title="Aberdeen North"
            address="Coventry Road, Bridge of Don"
          />
        </Pressable>
        <Pressable onPress={handlePress}>
          <LocationCard
            backgroundSource={require("../../assets/Images/box4.png")}
            title="Aberdeen North"
            address="Coventry Road, Bridge of Don"
            color="#000"
          />
        </Pressable>
        <Pressable onPress={handlePress}>
          <LocationCard
            backgroundSource={require("../../assets/Images/box3.png")}
            title="Aberdeen North"
            address="Coventry Road, Bridge of Don"
          />
        </Pressable>
        <Pressable onPress={handlePress}>
          <LocationCard
            backgroundSource={require("../../assets/Images/box4.png")}
            title="Aberdeen North"
            address="Coventry Road, Bridge of Don"
            color="#000"
          />
        </Pressable>
        <Pressable onPress={handlePress}>
          <LocationCard
            backgroundSource={require("../../assets/Images/box3.png")}
            title="Aberdeen North"
            address="Coventry Road, Bridge of Don"
          />
        </Pressable>
        <Pressable onPress={handlePress}>
          <LocationCard
            backgroundSource={require("../../assets/Images/box4.png")}
            title="Aberdeen North"
            address="Coventry Road, Bridge of Don"
            color="#000"
          />
        </Pressable>
        <Pressable onPress={handlePress}>
          <LocationCard
            backgroundSource={require("../../assets/Images/box3.png")}
            title="Aberdeen North"
            address="Coventry Road, Bridge of Don"
          />
        </Pressable>
        <Pressable onPress={handlePress}>
          <LocationCard
            backgroundSource={require("../../assets/Images/box4.png")}
            title="Aberdeen North"
            address="Coventry Road, Bridge of Don"
            color="#000"
          />
        </Pressable>
      </ScrollView>
    </StyledSafeAreaView>
  );
};

export default HomeScreen;

// Styled Components
const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  padding: 16px;
`;

const HeaderWrapper = styled(View)`
  margin-bottom: 16px;
`;

const HeaderTitle = styled.Text`
  font-weight: 700;
  font-size: 24px;
`;

const HeaderSubtitle = styled.Text`
  color: gray;
  font-size: 16px;
`;

const CardContainer = styled(View)`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 16px;
  gap: 10px;
`;

const StyledBackgroundWrapper = styled.ImageBackground`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
`;

const CardContent = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardText = styled.Text`
  text-align: center;
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;

const CardSubText = styled.Text`
  text-align: center;
  color: #333;
`;

const StyledTextInput = styled(TextInput)`
  margin-bottom: 12px;
  border-radius: 6px;
  margin-top: 16px;
`;
