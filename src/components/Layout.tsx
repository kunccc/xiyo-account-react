import styled from 'styled-components';
import Nav from './Nav';
import TopBar from './TopBar';
import {Provider} from 'react-redux';
import store from '../store/store';

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
    <Provider store={store}>
      <Wrapper>
        <TopBar/>
        <Main>
          {props.children}
        </Main>
        <Nav/>
      </Wrapper>
    </Provider>
  );
};

export default Layout;