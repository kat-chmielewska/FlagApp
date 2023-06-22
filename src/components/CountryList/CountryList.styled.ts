import styled from "styled-components";

export const CardGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 3rem;
  padding: 2rem 0 0;

  @media (width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
    padding: 1rem;
  }
  @media (width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
    padding: 1rem;
  }
  @media (width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
    padding: 1rem;
  }
  @media (width: 300px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0.8rem;
    padding: 1rem;
  }
`;
