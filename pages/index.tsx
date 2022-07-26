import styled from '@emotion/styled';
import type { NextPage } from 'next';

const Wrap = styled.div`
    width: 100%;
    height: 5000px;
    background-color: black;
`;
const Home: NextPage = () => {
    return <Wrap></Wrap>;
};

export default Home;
