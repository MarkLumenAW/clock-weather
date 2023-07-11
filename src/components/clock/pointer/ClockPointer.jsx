import React from 'react';
import BasicPointer from './BasicPointer';
import ClockPointerStyle from './ClockPointerStyle';
import ClockCenter from './ClockCenter';
import SecondPointer from './SecondPointer';
import HourPointer from './HourPointer';
import MinutePointer from './MinutePointer';

export default function ClockPointer(props) {
  return (
    <div>
      <ClockPointerStyle light={props.light}>
        <HourPointer light={props.light} rotate={props.hourDeg} />
        <MinutePointer light={props.light} rotate={props.minuteDeg} />

        <SecondPointer light={props.light} rotate={props.secondDeg} />
        <ClockCenter />
      </ClockPointerStyle>
    </div>
  );
}
