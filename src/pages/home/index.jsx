import React from "react";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import imageSrc from "./assets/hoodie.png";
import { Link } from "react-router-dom";

const Main = styled.main`
  padding: 0 10px 85px;

  @media (min-width: 375px) {
    padding: 0 25px 85px;
  }

  @media (min-width: 1024px) {
    padding: 0 100px 85px;
    display: flex;
    justify-content: space-evenly;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;

  @media (min-width: 1024px) {
    font-size: 3rem;
    margin: 60px 0 25px;
  }

  @media (min-width: 1440px) {
    font-size: 4rem;
    margin: 120px 0 25px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const BackgroundCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: blur(40px);
  z-index: -1;
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${(props) => (props.yPos ? `calc(50% - ${props.yPos})` : "50%")};
  left: ${(props) => (props.xPos ? `calc(50% + ${props.xPos})` : "50%")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#B4ADEA"};
  opacity: ${(props) => (props.opacity ? props.opacity : 0.5)};

  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
    filter: blur(60px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: calc(50% - 60px) 50%;
  position: relative;
  bottom: 50px;

  @media (min-width: 1024px) {
    bottom: 0;
  }

  @media (min-width: 1440px) {
    bottom: 50px;
    height: 750px;
  }
`;

const Text = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  width: 75%;
  position: relative;
  bottom: 50px;

  @media (min-width: 1024px) {
    bottom: 0;
  }

  @media (min-width: 1440px) {
    font-size: 1rem;
  }
`;

const Button = styled(Link)`
  width: 139px;
  height: 44px;
  background: #9381ff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
    margin-top: 50px;
  }

  @media (min-width: 1440px) {
    margin-top: 60px;
    width: 172px;
    height: 54px;
    font-size: 1.1rem;
  }
`;

const Left = styled.div``;

const Right = styled.div`
  max-width: 50%;
`;

export default function Home() {
  const isTablet = useMediaQuery("(max-width:1023px)");

  return (
    <Main>
      {isTablet ? (
        <>
          <Title>
            Lorem ipsum <br /> dolor sit.
          </Title>
          <ImageContainer>
            <Image src={imageSrc} />
            <BackgroundCircle xPos="-100px" yPos="60px" />
            <BackgroundCircle xPos="80px" yPos="-50px" opacity="0.8" />
            <BackgroundCircle
              backgroundColor="#ECD444"
              xPos="50px"
              yPos="80px"
            />
          </ImageContainer>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consequat massa vel vestibulum auctor. Nullam rhoncus malesuada
            orci, ac mollis.
          </Text>
          <Button to="shop">Shop now</Button>
        </>
      ) : (
        <>
          <Left>
            <Title>
              Lorem ipsum <br /> dolor sit.
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consequat massa vel vestibulum auctor. <br /> Nullam rhoncus
              malesuada orci, ac mollis.
            </Text>
            <Button to="shop">Shop now</Button>
          </Left>
          <Right>
            <ImageContainer>
              <Image src={imageSrc} />
              <BackgroundCircle xPos="-100px" yPos="60px" />
              <BackgroundCircle xPos="80px" yPos="-50px" opacity="0.8" />
              <BackgroundCircle
                backgroundColor="#ECD444"
                xPos="50px"
                yPos="80px"
              />
            </ImageContainer>
          </Right>
        </>
      )}
    </Main>
  );
}
