import BasicPointer from "./BasicPointer";
import styled from "styled-components";

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