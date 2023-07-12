import Clock from "../clock/Clock";
import { Icon } from '@iconify/react';
import useSWR from 'swr';
import axios from 'axios';
import moment from "moment";
import 'moment-timezone';
import { weatherIcon } from "@/utils/weatherAPI";
import InfoButton from "../UI/InfoButton";
import { useState } from "react";

const fetcher = url => axios.get(url).then(res => res.data);

// ---Loading&Error Component---
function Loading(props) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <Icon icon="line-md:loading-twotone-loop" color="white" width="60" />
      <span className="text-white">Loading</span>
    </div>
  );
}

function Error(props) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <Icon icon="ic:baseline-error" color="white" width="60" />
      <span className="text-white">Error</span>
    </div>
  );
}

// ---Container Component---
function Container(props) {
  return (
    <div className='w-[350px] h-[560px] md:w-[580px] md:h-[285px] flex flex-col md:flex-row justify-between items-center py-7 md:p-6 bg-violet-950/50 backdrop-blur-md rounded-3xl border-[#757575] border shadow-2xl shadow-black/60'>
      {props.children}
    </div>
  );
}

// ---Weather Component---
function WeatherInfo(props) {
  const { location } = props;
  const key = process.env.NEXT_PUBLIC_API_KEY_WEATHER;
  // console.log(key)
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=1&aqi=no&alerts=no`;

  // const url = `loading test`;

  const { data, error } = useSWR(url, fetcher, {
    refreshInterval: 1800000,
    dedupingInterval: 60000,
  });

  if (!data) {
    return (
      <div className="w-full h-[163px]">
        <Loading />
      </div>);
  }
  if (error) {
    console.log('Get weather error: ', error);
    return (
      <div className="w-full h-[163px]">
        <Error />
      </div>);
  }

  const temp = Math.floor(data.current.temp_c);
  const maxTemp = Math.floor(data.forecast.forecastday[0].day.maxtemp_c);
  const minTemp = Math.floor(data.forecast.forecastday[0].day.mintemp_c);
  const chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
  const windSpeed = data.current.wind_kph;

  const conditionText = data.current.condition.text;
  const conditionCode = data.current.condition.code;
  const conditionIcon = weatherIcon(conditionCode);

  return (
    <>
      {/* Middle */}
      <div className="flex my-4">
        <span className="text-8xl font-semibold w-48">{temp}°</span>
        <div className="flex flex-col justify-between items-center py-2">
          <Icon icon={conditionIcon} color="white" width="55" className="my-auto" />
          <span className="text-2xl font-light min-w-[88px] text-center">{minTemp}°-{maxTemp}°</span>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex flex-row gap-5 text-xl font-light">
        <div className="flex flex-row gap-1 items-center min-w-[41px]">
          <Icon icon="fa-solid:umbrella" color="white" width="22" />
          <span>{chanceOfRain}%</span>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <Icon icon="tabler:wind" color="white" width="22" />
          <span>{windSpeed}km/h</span>
        </div>
      </div>
    </>
  );
}

export default function BasicInfoPanel(props) {
  const { locationIcon, location, timeURL } = props;
  // ---Time API & Component---

  const { data, error } = useSWR(timeURL, fetcher, { refreshInterval: 1000 });

  if (!data) {
    return (
      <Container>
          <Loading />
      </Container>
    );
  }

  if (error) {
    console.log('Get time error: ', error);
    <Container>
      <Error />
    </Container>;
  }

  const timezone = Number(data.utc_offset.split(':')[0]);

  const timeDate = moment.tz(data.datetime, data.timezone);

  const time = timeDate.format('HH:mm');
  const date = timeDate.format('DD MMM YYYY');
  const weekday = timeDate.format('ddd');

  return (
    <Container>
      {/* Clock */}
      <div>
        <Clock location={location} timezone={timezone} />
      </div>
      {/* Weather */}
      <div className="text-white md:w-[53%]">
        {/* Top */}
        <div className="flex flex-row items-center justify-between">
          <span className="uppercase text-4xl font-semibold w-64 md:w-auto">{location}</span>
            <InfoButton icon={locationIcon}/>
        </div>
        <div className="text-lg flex gap-4 font-light -mt-2">
          <span className="min-w-[46px]">{time}</span>
          <span className="min-w-[96px]">{date}</span>
          <span>{weekday}</span>
        </div>
        <WeatherInfo location={location} />
      </div>
    </Container>
  );
};
