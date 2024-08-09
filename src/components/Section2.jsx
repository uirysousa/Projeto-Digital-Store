import React from 'react';
import styled from 'styled-components';

const Section2Container = styled.section`
  margin: 40px auto;
  max-width: 1300px;
  padding: 20px;
`;

const Section2 = ({ children, title }) => {
  return (
    <Section2Container>
      <h2>{title}</h2>
      {children}
    </Section2Container>
  );
};

export default Section2;
