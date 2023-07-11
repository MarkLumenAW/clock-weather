import Clock from "../clock/Clock";
import { Icon } from '@iconify/react';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data);

export default function BasicInfoPanel(props) {
  const { locationIcon, location, timeURL } = props;
  // ---Handle Time---
  const { data, error } = useSWR(timeURL, fetcher, { refreshInterval: 1000 });

  if (!data) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log('Get time error: ', error);
    return <div>Error...</div>;
  }

  const timezone = Number(data.utc_offset.split(':')[0]);
  const timeDate = new Date(data.datetime);
  console.log(location,timeDate)
  const hours = timeDate.getHours();
  const minutes = timeDate.getMinutes();
  const day = timeDate.getDate();
  const year = timeDate.getFullYear();
  const month = timeDate.toLocaleDateString('en-US', { month: 'short' });
  const weekday = timeDate.toLocaleDateString('en-US', { weekday: 'short' });

  return (
    <div className='w-[350px] h-[560px] md:w-[580px] md:h-[285px] flex flex-col md:flex-row justify-between items-center py-7 md:p-6 bg-violet-950/50 backdrop-blur-md rounded-3xl border-[#757575] border shadow-2xl shadow-black/60'>
      {/* Clock */}
      <div>
        <Clock city={location} timezone={timezone} hours={hours} minutes={minutes} />
      </div>
      {/* Weather */}
      <div className="text-white md:w-[53%]">
        {/* Top */}
        <div className="flex flex-row items-center justify-between">
          <span className="uppercase text-4xl font-semibold w-64 md:w-auto">{location}</span>
          <div className="p-3 rounded-full hover:bg-white/30 cursor-pointer transition-all ease-in-out duration-150">
            <Icon icon={locationIcon} color="white" width="28" />
          </div>
        </div>
        <div className="text-lg flex gap-4 font-light -mt-2">
          <span className="min-w-[46px]">{hours}:{minutes}</span>
          <span className="min-w-[96px]">{day} {month} {year}</span>
          <span>{weekday}</span>
        </div>
        {/* Middle */}
        <div className="flex my-4">
          <span className="text-8xl font-semibold w-48">15°</span>
          <div className="flex flex-col justify-between items-center py-2">
            <Icon icon="bi:cloud-rain-fill" color="white" width="55" className="my-auto" />
            <span className="text-2xl font-light min-w-[88px] text-center">15°-20°</span>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex flex-row gap-5 text-xl font-light">
          <div className="flex flex-row gap-1 items-center min-w-[41px]">
            <Icon icon="fa-solid:umbrella" color="white" width="22" />
            <span>50%</span>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <Icon icon="tabler:wind" color="white" width="22" />
            <span>24km/h</span>
          </div>
        </div>

      </div>
    </div>
  );
};
