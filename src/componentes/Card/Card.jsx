import styled from '@emotion/styled';

const DivEstilizada = styled.div`
  background: #EBEAF9;
  border: 1px solid #5754ED;
  border-radius: 16px;
  padding: 32px;
`;

export const Card = ({ children }) => {
  return (
    <DivEstilizada>
      {children}
    </DivEstilizada>
  );
};
