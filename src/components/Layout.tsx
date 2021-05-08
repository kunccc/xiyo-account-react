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

type Props = {
  children: {}, selectTab: (key: string) => void
}

const Layout = (props: Props) => {
  return (
    <Wrapper>
      <TopBar selectTab={props.selectTab}/>
      <Main>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export default Layout;