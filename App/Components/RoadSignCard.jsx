import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

const RoadSignCard = ({ icon, title, description }) => {
  return (
    <CardContainer>
      <IconContainer>
        <StyledImage source={icon} />
      </IconContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentContainer>
    </CardContainer>
  );
};

// Styled Components
const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
  gap: 12px;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.Image`
  height: 50px;
  width: 50px;
`;

const ContentContainer = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

const Description = styled.Text`
  color: #555;
`;

export default RoadSignCard;
