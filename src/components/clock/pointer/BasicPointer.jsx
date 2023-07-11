import React from 'react';
import styled from 'styled-components';

const BasicPointer = styled.div.attrs((props) => (
  {
    style: {
      transform: `rotateZ(${props.rotate}deg)`
    },
    light: props.light,
  }
))`
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  width: ${props => props.size}px;
  aspect-ratio: 1/1;
  z-index:${props => props.z_index};

  ::before{
   content: '';
   width: ${props => props.width}px;
   height: ${props => `calc(${props.size / 2}px + ${props.tail}px)`};
   background: ${props => props.light ? props.pointer_light : props.pointer_dark};
   border-radius: ${props => props.pointer_radius}
  }
`;

BasicPointer.defaultProps={
  light:true,
  pointer_light: "#ff6767",
  pointer_dark: "#69c0ff",
  pointer_radius: "6px 6px 3px 3px",
  z_index: 0,
  width: 4,
  size: 100,
  tail: 0,
}

export default BasicPointer;