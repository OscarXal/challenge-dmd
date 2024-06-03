// src/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const MovieList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MovieItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const MovieItemContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button<{ isCurrent: boolean }>`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 3px;
  background-color: ${props => props.isCurrent ? '#007bff' : '#808080'};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;