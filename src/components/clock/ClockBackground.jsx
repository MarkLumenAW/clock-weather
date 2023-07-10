import styled from "styled-components";

//外置styled组件。使用const声明组件。最后用export导出。这种方法创建的组件不会直接调用props内的数据。但是在被挂载入其他组件后可以读取相应的props的值。
//------注意------
//styled-components需要接收一个函数来处理传入的属性。因此不可以通过props.prop直接调用传递来的内容，必须使用箭头函数来调用。

//使用时需要注意检查有没有自动导入styled。
const ClockBackground = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 20px;
  margin: 2rem;
`;

//使用此法创建的组件可以通过defaultProps方法，预设内部的props的值。也可以通过此方法在props中加入新的值。
ClockBackground.defaultProps = {
  size: "400px",
};


export default ClockBackground;


//这个创建方法实质上依然是创建了一个函数组件，只是styled-component库会自动将输入的内容转变为函数组件。
//注意，这种方法的样式是内联样式，可能会导致一些 CSS 选择器或伪类无法正常工作。
//如果使用标准的react重写，写法如下：
/*

import React from 'react';

const ClockBackground = (props) => {
  const { size, children } = props;

  const style = {
    width: size,
    height: size,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '2rem',
    padding: '20px',
    margin: '2rem',
  };

  return <div style={style}>{children}</div>;
};

ClockBackground.defaultProps = {
  size: '400px',
};

export default ClockBackground;

*/ 