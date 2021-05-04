import Layout from 'components/Layout';
import Icon from '../components/Icon';
import styled from 'styled-components';

type Data = {
  [key: string]: string
}

const data: Data = {
  eat: '饮食',
  live: '住房',
  water: '水电',
  play: '娱乐'
};

const LabelList = styled.div`
  max-height: 65vh;
  overflow: auto;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  ul {
    width: 358px;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 66px;
      height: 66px;
      margin-top: 24px;
      margin-left: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid #999;
      border-radius: 50%;
    }
  }
`;
const Button = styled.button`
  width: 64vw;
  position: absolute;
  bottom: 96px;
  left: 18vw;
  padding: 4px 90px;
  background: #ff8f78;
  color: #fff;
  border: none;
  border-radius: 14px;
`;

const Money = () => {
  return (
    <Layout>
      <LabelList>
        <ul>
          {Object.keys(data).map((item, index) => <li key={index}><Icon name={item}/>{data[item]}</li>)}
        </ul>
      </LabelList>
      <Button>记一笔</Button>
    </Layout>
  );
};

export default Money;