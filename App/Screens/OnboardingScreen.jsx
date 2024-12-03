import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenContainer>
      <BackgroundWrapper
        source={require("../../assets/Images/onboardingBg.png")}
        resizeMode="cover"
      >
        <TitleText>Real Driving Test Routes</TitleText>
        <ImageWrapper>
          <CenterImage
            source={require("../../assets/Images/onboardingImage.png")}
            resizeMode="contain"
          />
        </ImageWrapper>
        <MainText>What are what we do</MainText>
        <SecondaryText>
          Lorem ipsum dolor lorem ipsum dolor
        </SecondaryText>
        <PrimaryButton onPress={() => navigation.navigate("Register")}>
          <PrimaryButtonText>Continue</PrimaryButtonText>
        </PrimaryButton>
        {/* <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <FooterText>
            ALREADY HAVE AN ACCOUNT?{" "}
            <Text style={{ color: "#8e97fd" }}>LOG IN</Text>
          </FooterText>
        </TouchableOpacity> */}
      </BackgroundWrapper>
    </ScreenContainer>
  );
};

// Styled Components with Better Names
const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
`;

const BackgroundWrapper = styled.ImageBackground`
  flex: 1;
  padding: 0px 20px;
`;

const ImageWrapper = styled.View`
  padding: 0 60px;
  width: 100%;
  align-items: center;
`;

const CenterImage = styled.Image`
  width: 100%;
  max-width: 300px;
  margin: 20px 0;
`;

const TitleText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #444;
  text-align: center;
  margin: 28px 0px;
`;

const MainText = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: #3f414e;
  text-align: center;
  margin: 72px 0px 10px 0px;
`;

const SecondaryText = styled.Text`
  font-size: 16px;
  color: #a1a4b2;
  text-align: center;
`;

const PrimaryButton = styled.TouchableOpacity`
  background: #8e97fd;
  width: 100%;
  text-align: center;
  padding: 16px 0px;
  margin: 70px 0px 14px 0px;
  border-radius: 38px;
`;

const PrimaryButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
`;

const FooterText = styled.Text`
  font-size: 16px;
  color: #444;
  text-align: center;
  font-weight: 600;
`;

export default OnboardingScreen;
