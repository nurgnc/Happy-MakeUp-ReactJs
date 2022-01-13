import styled, { css } from "styled-components";

const ContainerFluid = styled.div`
  width: 100%;
  margin: 0;
`;

const Container = styled.div`
  width: 80%;
  padding: 10px;
  margin: 0 auto;
`;

const FlexRowBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export { ContainerFluid, Container, FlexRowBetween };
