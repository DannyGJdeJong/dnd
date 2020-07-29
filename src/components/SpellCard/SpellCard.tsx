import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Spell from '../../models/Spell';

const Container = styled.div`
  border-radius: 10px;
  background: #696969;
  width: 300px;
  padding: 5px;
  margin: 10px;
  min-height: 302px;
  h1, h5, p {
    margin: 0;
  }
  p {
    font-size: 14px;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const ContainerInner = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  padding: 0px;
  margin: 0;
  display: flex;
  flex-flow: column;
`;

const Row = styled.div`
  margin: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TextBox = styled.div`
  background: #FFFFFF;
  flex: 1;
  margin: 2px;
  text-align: center;
`;

const SubText = styled.p`
  color: #FFFFFF;
  font-size: 10px;
  font-weight: 900;
`;

const TextBoxLarge = styled(TextBox)`
  flex: 99999;
  height: 100%;
  padding: 2px;
  p {
    text-align: left;
    margin-top: 10px;
  }
  p:first-child {
    margin-top: 0 !important;
  }
`;


const SpellCard: FunctionComponent<Spell> = ({ name, casting_time, range, components, duration, material, desc, level, higher_level, school }) => {
  return (
    <Container>
      <ContainerInner>
        <Row>
          <TextBox>
            <h1>{ name }</h1>
          </TextBox>
        </Row>
        <Row>
          <TextBox>
            <h5>Casting time</h5>
            <p>{ casting_time }</p>
          </TextBox>
          <TextBox>
            <h5>Range</h5>
            <p>{ range }</p>
          </TextBox>
        </Row>
        <Row>
          <TextBox>
            <h5>Components</h5>
            <p>{ components.join(', ') }</p>
          </TextBox>
          <TextBox>
            <h5>Duration</h5>
            <p>{ duration }</p>
          </TextBox>
        </Row>
        <Row>
          <SubText>
            { material }
          </SubText>
        </Row>
        <TextBoxLarge>
          { [... desc, ... (higher_level ?? [])].map((s, i) => <p key={i}>{s}</p>) }
        </TextBoxLarge>
      </ContainerInner>
      <Row>
          <SubText>
            { school.name }
          </SubText>
          <SubText>
            { level }
          </SubText>
      </Row>
    </Container>
  );
};

export default SpellCard;
