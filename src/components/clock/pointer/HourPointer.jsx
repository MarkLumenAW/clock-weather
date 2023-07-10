import BasicPointer from "./BasicPointer";
import styled from "styled-components";

//此处styled()类似styled.div。但是此处使用一个已有的组件做为基础。之后都是在该组件基础上进行修改。
const HourPointerStyle = styled(BasicPointer).attrs((props) => (
  {
    rotate: props.rotate,
    size: 100,
    width: 7,
    pointer_light: "#848484",
    pointer_dark: "#ff6767",
  }

))``;

const HourPointer = (props) => {
  return (
    <HourPointerStyle rotate={props.rotate} light={props.light} />
  );
};

export default HourPointer;