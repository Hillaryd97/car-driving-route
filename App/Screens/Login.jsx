import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Dimensions, View } from "react-native";

const { width, height } = Dimensions.get("window");

const Login = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ScreenContainer>
      <BackgroundWrapper
        source={require("../../assets/Images/pageBG.png")}
        resizeMode="stretch"
      >
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </BackButton>
        <TitleText>Welcome Back!</TitleText>

        <SocialButton onPress={() => {}}>
          <FontAwesome name="facebook" size={20} color="#fff" />
          <SocialButtonText>CONTINUE WITH FACEBOOK</SocialButtonText>
          <View></View>
        </SocialButton>

        <SocialButton white onPress={() => {}}>
          <SocialIcon source={require("../../assets/Images/google.png")} />
          <SocialButtonText color="#3f414e">
            CONTINUE WITH GOOGLE
          </SocialButtonText>
          <View></View>
        </SocialButton>

        <SubtitleText>OR LOG IN WITH EMAIL</SubtitleText>

        <TextInputField
          placeholder="Email"
          inputMode="email"
          keyboardType="email-address"
        />
        <TextInputField
          placeholder="Password"
          inputMode="password"
          secureTextEntry
        />

        <ActionButton onPress={() => navigation.navigate("HomeScreen")}>
          <ActionButtonText>LOG IN</ActionButtonText>
        </ActionButton>

        <ForgotPasswordText>Forgot Password?</ForgotPasswordText>

        <FooterContainer onPress={() => navigation.navigate("Register")}>
          <FooterText>
            DON'T HAVE AN ACCOUNT?{" "}
            <FooterHighlightText>REGISTER</FooterHighlightText>
          </FooterText>
        </FooterContainer>
      </BackgroundWrapper>
    </ScreenContainer>
  );
};

// Styled Components
const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

const BackgroundWrapper = styled.ImageBackground`
  flex: 1;
  padding: 20px;
`;

const BackButton = styled.Pressable`
  border-radius: 25px;
  border: 0.5px solid #777;
  align-items: center;
  justify-content: center;
  width: ${width * 0.1}px;
  height: ${width * 0.1}px;
  margin-top: ${height * 0.05}px;
`;

const TitleText = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: #3f414e;
  text-align: center;
  margin: 14px 0px 28px 0px;
`;

const SubtitleText = styled.Text`
  font-size: 14px;
  color: #a1a4b2;
  text-align: center;
  font-weight: 700;
  padding: 20px 0px;
`;

const TextInputField = styled.TextInput`
  padding: 20px 24px;
  background: #f2f3f7;
  border-radius: 14px;
  margin: 8px 0px;
`;

const SocialButton = styled.Pressable`
  background: ${({ white }) => (white ? "#fff" : "#7583ca")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 28px;
  margin: 8px 0px;
  border-radius: 38px;
  border: ${({ white }) => (white ? "0.5px solid #666" : "none")};
`;

const SocialIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const SocialButtonText = styled.Text`
  font-size: 14px;
  color: ${({ color }) => color || "#fff"};
  text-align: center;
  font-weight: 600;
`;

const ActionButton = styled.Pressable`
  background: #8e97fd;
  width: 100%;
  padding: 16px 0px;
  margin: 10px 0px 14px 0px;
  border-radius: 38px;
`;

const ActionButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  text-align: center;
  font-weight: 600;
`;

const ForgotPasswordText = styled.Text`
  font-weight: 700;
  color: #555;
  text-align: center;
  margin: 6px 0px;
`;

const FooterContainer = styled.Pressable`
  margin-top: ${height * 0.09}px;
`;

const FooterText = styled.Text`
  font-size: 16px;
  color: #a1a4b2;
  text-align: center;
  font-weight: 600;
`;

const FooterHighlightText = styled.Text`
  color: #8e97fd;
`;

export default Login;
