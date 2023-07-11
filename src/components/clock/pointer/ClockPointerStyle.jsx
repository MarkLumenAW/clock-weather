import styled from "styled-components";

const ClockPointerStyle = styled.div`
  position: relative;
  width: ${props => props.size};
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background:${props => props.light ? `${props.white} ${props.bg_white}` : `${props.black} ${props.bg_black}`};
  
  background-size:cover;
  border-radius:50%;

  border:14px solid ${props => props.light ? props.white : props.black};

  box-shadow: ${props => props.light ? props.bg_white_box_shadow : props.bg_black_box_shadow};

  color:${props => props.light ? props.black : props.white};
  `;

ClockPointerStyle.defaultProps = {
  size: "230px",
  white: "#fff",
  black: "#091921",
  light: true,
  bg_white: "url(/images/clock_white.png)",
  bg_black: "url(/images/clock_black.png)",

  bg_white_box_shadow:
    "inset 0 0 30px rgba(0, 0, 0, 0.1), 0 0 0 4px rgba(255, 255, 255, 1)",
  bg_black_box_shadow:
    "inset 0 0 30px rgba(255, 255, 255, 0.1), 0 0 0 4px #091921",
}

export default ClockPointerStyle
