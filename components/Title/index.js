import styled from "styled-components";

const Title = styled.div`
  font-size: 22px;
  color: ${({ color }) => color || "blue"};
  text-align: center;
  margin-top: 20px;
`;

export default Title;
