import React, { useState, useEffect } from 'react';
import ClockBackground from './ClockBackground';
import ClockPointer from './pointer/ClockPointer';
import { StyleSheetManager } from 'styled-components';


export default function Clock(props) {
  const { city, timezone } = props;

  const [hourDeg, setHourDeg] = useState();
  const [minuteDeg, setMinuteDeg] = useState();
  const [secondDeg, setSecondDeg] = useState();


  const [year, setYear] = useState();
  const [mouth, setMouth] = useState();
  const [newDay, setDay] = useState();

  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();


  const [light, setLight] = useState('true');




  const unitDeg = 360 / 60; // 360deg / 60 格
  const bigUnitDeg = unitDeg * 5;


  const setTime = () => {
    let nowTime = new Date();// 获取当前的时间
    let day = new Date(nowTime.getTime() + timezone * 60 * 60 * 1000);

    let pureHourDeg = day.getUTCHours() * bigUnitDeg;
    let pureMinuteDeg = day.getUTCMinutes() * unitDeg;
    let pureSecondDeg = day.getUTCSeconds() * unitDeg;

    setHourDeg(pureHourDeg + pureMinuteDeg / 12);
    setMinuteDeg(pureMinuteDeg + pureSecondDeg / 60);
    setSecondDeg(pureSecondDeg);

    setYear(day.getUTCFullYear());
    setMouth(day.getUTCMonth() + 1);
    setDay(day.getUTCDate());
    setHour(day.getUTCHours());
    setMinute(day.getUTCMinutes());
    setSecond(day.getUTCSeconds());
  };

  useEffect(() => {
    setTime();
    const interval = setInterval(() => {
      setTime();
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
        <ClockPointer light={light} size={props.size} hourDeg={hourDeg} minuteDeg={minuteDeg} secondDeg={secondDeg}></ClockPointer>
  );
}
