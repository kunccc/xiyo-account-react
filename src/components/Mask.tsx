import React from 'react';
import styled from 'styled-components';

const MaskWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: -1;
  opacity: 0;
  transition: all 250ms;
  &.isMaskVisible {
    z-index: 100;
    opacity: 1;
  }
`;

interface Props {
  isMaskVisible: boolean;
}

const Mask: React.FC<Props> = (props) => {
  return (
    <MaskWrapper className={props.isMaskVisible ? 'isMaskVisible' : ''}/>
  );
};

export default Mask;