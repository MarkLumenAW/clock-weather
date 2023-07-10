import React from 'react';
import styled from 'styled-components';


//attrs来自于styled-component库。
//attrs的核心思路是调用传入的props进行计算，然后用计算的结果生成新的组件内的props。之后在``中，直接使用传入的props和计算生成的心props生成对应的样式。这样做的好处是将计算与样式分离以提高可读性与可维护性。
//简单理解：attrs（箭头函数返回对象）`样式`。箭头函数内进行所有的数值计算。``内不再进行计算，直接调用传入值和计算结果生成样式。

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

//defaultProps 可以为组件设置默认属性值，当这些属性没有从父组件传递给子组件时，就会使用这些默认值。因此，这个方法确实可以创建组件内的默认 props。
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