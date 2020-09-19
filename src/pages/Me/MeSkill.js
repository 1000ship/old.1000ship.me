import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const SkillName = styled.span`
  flex: 0 0 150px;
  text-align: right;
  margin-right: 5px;
`;
const SkillGaugeContainer = styled.div`
  flex: 1;
`;
const SkillGauge = styled.div`
  width: ${({ percent }) => percent}%;
  height: 15px;
  background-color: var(--text-color-1);
  animation-duration: 1.5s;
  animation-name: skill-gauge-animation;
  @keyframes skill-gauge-animation {
    from {
      width: 0%;
    }
  }
`;

const MeSkill = (props) => {
  const { name, percent } = props;
  return (
    <Container>
      <SkillName>{name}</SkillName>
      <SkillGaugeContainer>
        <SkillGauge percent={percent}></SkillGauge>
      </SkillGaugeContainer>
    </Container>
  );
};
export default MeSkill;
