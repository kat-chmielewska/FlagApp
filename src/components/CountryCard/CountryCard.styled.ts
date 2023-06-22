import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 1.5rem;
  padding: 50px;
`;

export const ButtonBack = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid var(--background-single-card-border);
  color: var(--color-text-button);
  background-color: var(--background-color-button);
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: var(--background-color-button-hover);
    color: var(--color-text-button-hover);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const SingleFlag = styled.img`
  border-radius: 20px;
  width: 600px;
  height: 350px;
  border: 1px solid var(--background-single-card-border);
`;

export const InfoCountryField = styled.div`
  min-width: 700px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 50px;
  border-radius: 20px;
  border: 1px solid var(--background-single-card-border);
  background-color: var(--background-single-card);
  gap: 1rem;
`;

export const InfoCountryFirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  line-height: 2rem;
`;

export const InfoCountrySecoundColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  line-height: 2rem;
`;

export const BorderCountrField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const BorderCountry = styled.div`
  border-radius: 0.5rem;
  border: 1px solid var(--background-single-card-border);
  padding: 10px 15px;
`;
