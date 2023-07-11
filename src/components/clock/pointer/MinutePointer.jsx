import BasicPointer from "./BasicPointer";
import styled from "styled-components";

const MinutePointerStyle = styled(BasicPointer).attrs((props) => (
  {
    rotate: props.rotate,
    size: 120,
    pointer_light: "#848484",
    pointer_dark: "#fff",
  }
))``;

const MinutePointer = (props) => {
  return (
    <MinutePointerStyle rotate={props.rotate} light={props.light} />
  );
};

export default MinutePointer;
