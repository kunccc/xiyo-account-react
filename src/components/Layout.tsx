import styled from 'styled-components';
import Nav from './Nav';
import TopBar from './TopBar';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  position: relative;
`;

const Layout = (props: {children: {}}) => {
  return (
    <Wrapper>
      <TopBar/>
      <Main>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export default Layout;