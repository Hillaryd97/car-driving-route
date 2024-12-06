import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons"; // For Facebook icon
import { AntDesign } from "@expo/vector-icons"; // For Google icon

const Register = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ScreenContainer>
      <BackgroundWrapper
        source={require("../../assets/Images/pageBG.png")}
        resizeMode="stretch"
      >
        <TitleText>Create your account</TitleText>
        <SocialButton onPress={() => {}}>
          <FontAwesome
            name="facebook"
            size={20}
            color="#fff"
            style={{ marginRight: 12 }}
          />
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
        <TextInputField placeholder="Name" />
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
        <PrivacyPolicyContainer>
          <PolicyText>
            I have read the{" "}
            <Text style={{ color: "#8E97FD" }}>Privacy Policy</Text>
          </PolicyText>
          <Checkbox
            onPress={() => setIsChecked(!isChecked)}
            isChecked={isChecked}
          >
            {isChecked && <CheckboxTick />}
          </Checkbox>
        </PrivacyPolicyContainer>
        <ActionButton onPress={() => navigation.navigate("HomeScreen")}>
          <ActionButtonText>GET STARTED</ActionButtonText>
        </ActionButton>
        <FooterContainer onPress={() => navigation.navigate("Login")}>
          <FooterText>
            HAVE AN ACCOUNT?{" "}
            <FooterHighlightText>LOGIN</FooterHighlightText>
          </FooterText>
        </FooterContainer>
      </BackgroundWrapper>
    </ScreenContainer>
  );
};

// Styled Components
const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
`;
const FooterHighlightText = styled.Text`
  color: #8e97fd;
`;
const BackgroundWrapper = styled.ImageBackground`
  flex: 1;
  padding: 0px 20px;
`;

const TitleText = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: #3f414e;
  text-align: center;
  margin: 86px 0px 10px 0px;
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
  padding: 16px 28px;
  margin: 8px 0px;
  border-radius: 38px;
  justify-content: space-between;
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

const PrivacyPolicyContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 12px 0px;
  justify-content: space-between;
`;

const Checkbox = styled.Pressable`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-color: #666;
  border-radius: 4px;
  margin-right: 8px;
  justifycontent: space-between;
  align-items: center;
`;

const CheckboxTick = styled.View`
  width: 12px;
  height: 12px;
  background-color: #444;
`;

const PolicyText = styled.Text`
  font-size: 14px;
  color: #a1a4b2;
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
`;

const FooterContainer = styled.Pressable`
  margin-top: 20px;
`;

const FooterText = styled.Text`
  font-size: 16px;
  color: #a1a4b2;
  text-align: center;
  font-weight: 600;
`;

export default Register;
