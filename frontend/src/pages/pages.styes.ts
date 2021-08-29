import styled from "styled-components";

export const Flex = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  img {
    object-fit: cover;
    width: 25%;
    height: auto;
  }
  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`;
