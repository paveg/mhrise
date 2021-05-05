import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
`;

type Props = {};

const Index: React.FC<Props> = ({}) => <Title>index page</Title>;

export const getStaticProps = async () => ({
  props: {
    test: 'string',
  },
});

export default Index;
