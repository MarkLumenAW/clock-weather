import React from 'react';
import BasicPointer from './BasicPointer';
import ClockPointerStyle from './ClockPointerStyle';
import ClockCenter from './ClockCenter';
import SecondPointer from './SecondPointer';
import HourPointer from './HourPointer';
import MinutePointer from './MinutePointer';


//将从上一层获取的props传入下一层都需要进行转层处理。
//将之前传入的light，转存为light。再使用props发往下一层。
//将之前传入的deg，转存为rotate。再使用props发往下一层。
export default function ClockPointer(props) {
  return (
    <div>
      {/* <ClockPointerStyle light={props.light} size={props.size}> */}
      <ClockPointerStyle light={props.light}>

        <HourPointer light={props.light} rotate={props.hourDeg} />
        <MinutePointer light={props.light} rotate={props.minuteDeg} />
        {/* <BasicPointer light={props.light} rotate={props.secondDeg} /> */}
        <SecondPointer light={props.light} rotate={props.secondDeg} />
        <ClockCenter />
      </ClockPointerStyle>
    </div>

  );
}
