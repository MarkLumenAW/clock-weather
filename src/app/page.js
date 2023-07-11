'use client';
import PrimaryInfoPanel from "@/components/infoPanel/PrimaryInfoPanel";
import SecondaryInfoPanel from "@/components/infoPanel/SecondaryInfoPanel";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {

  const infoPanel_2 = {
    location: 'New York',
    URL: 'https://worldtimeapi.org/api/timezone/America/New_York',
  };

  const infoPanel_3 = {
    location: 'London',
    URL: 'https://worldtimeapi.org/api/timezone/Europe/London',
  };

  const infoPanel_4 = {
    location: 'Tokyo',
    URL: 'https://worldtimeapi.org/api/timezone/Asia/Tokyo',
  };


  const mobileClockList = [
    <PrimaryInfoPanel />,
    <SecondaryInfoPanel location={infoPanel_2.location} url={infoPanel_2.URL} />,
    <SecondaryInfoPanel location={infoPanel_3.location} url={infoPanel_3.URL} />,
    <SecondaryInfoPanel location={infoPanel_4.location} url={infoPanel_4.URL} />,
  ];

  const [mobileClockIndex, setMobileClockIndex] = useState(0);

  const handleLeftClick = () => {
    setMobileClockIndex(mobileClockIndex === 0 ? mobileClockList.length - 1 : mobileClockIndex - 1);
  };
  const handleRightClick = () => {
    setMobileClockIndex(mobileClockIndex === mobileClockList.length - 1 ? 0 : mobileClockIndex + 1);
  };

  return (
    <main className='relative min-h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center' style={{ backgroundImage: "url(/images/background.jpg)" }}
    >
      <section className='hidden md:block'>
        <div className='md:grid md:gap-16 md:py-10 xl:grid xl:grid-cols-2 xl:gap-10 xl:py-0 xl:mt-4 2xl:gap-28'>
          <PrimaryInfoPanel />
          <SecondaryInfoPanel location={infoPanel_2.location} url={infoPanel_2.URL} />
          <SecondaryInfoPanel location={infoPanel_3.location} url={infoPanel_3.URL} />
          <SecondaryInfoPanel location={infoPanel_4.location} url={infoPanel_4.URL} />
        </div>
        <div className="hidden w-full md:block md:mb-6 xl:mb-4 xl:mt-5">
          <Footer />
        </div>
      </section>

      <section className="h-full flex flex-col justify-center items-center gap-14 md:hidden">
        <div>
          <div className="">
            {mobileClockList[mobileClockIndex]}
          </div>
          <div className="flex flex-row justify-center items-center mt-6 gap-12">
            <div className="p-1 rounded-full border border-[#757575] cursor-pointer " onClick={handleLeftClick}>
              <Icon icon="uiw:left" color="#757575" width="30" />
            </div>
            <div className="p-1 rounded-full border border-[#757575] cursor-pointer" onClick={handleRightClick}>
              <Icon icon="uiw:right" color="#757575" width="30" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <Footer />
        </div>
      </section>
    </main>
  );
}
