import BasicPointer from "./BasicPointer";
import styled from "styled-components";

//此时用括号
const SecondPointerStyle = styled(BasicPointer).attrs((props) => (
  {
    rotate: props.rotate,
    size: 150,
    tail: 20,
    width: 2,
  }

))``;

const SecondPointer = (props) => {
  return (
    <SecondPointerStyle rotate={props.rotate} light={props.light} />
  );
};

export default SecondPointer;