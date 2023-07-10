'use client';
import PrimaryInfoPanel from "@/components/infoPanel/PrimaryInfoPanel";
import SecondaryInfoPanel from "@/components/infoPanel/SecondaryInfoPanel";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";


export default function Home() {

  const mobileClockList = [
    <PrimaryInfoPanel />,
    <SecondaryInfoPanel />,
    <PrimaryInfoPanel />,
    <SecondaryInfoPanel />,
  ];

  const [mobileClockIndex, setMobileClockIndex] = useState(0);

  const handleLeftClick = () => {
    setMobileClockIndex(mobileClockIndex === 0 ? mobileClockList.length - 1 : mobileClockIndex - 1);
  };
  const handleRightClick = () => {
    setMobileClockIndex(mobileClockIndex === mobileClockList.length - 1 ? 0 : mobileClockIndex + 1);
  };

  return (
    <main className='min-h-screen w-screen overflow-hidden flex justify-center items-center bg-cover bg-center' style={{ backgroundImage: "url(/images/background.jpg)" }}>
      <section className='hidden md:grid md:gap-16 md:py-20 xl:grid xl:grid-cols-2 xl:gap-10 xl:py-0 2xl:gap-28'>
        <PrimaryInfoPanel />
        <SecondaryInfoPanel />
        <SecondaryInfoPanel />
        <SecondaryInfoPanel />
      </section>
      <section className="md:hidden">
        <div className="transition ease-in-out delay-100 duration-200">
          {mobileClockList[mobileClockIndex]}
        </div>
        <div className="flex flex-row justify-center items-center mt-10 gap-12">
          <div className="p-1 rounded-full border border-[#757575] cursor-pointer " onClick={handleLeftClick}>
            <Icon icon="uiw:left" color="#757575" width="30" />
          </div>
          <div className="p-1 rounded-full border border-[#757575] cursor-pointer" onClick={handleRightClick}>
            <Icon icon="uiw:right" color="#757575" width="30" />
          </div>
        </div>
      </section>
    </main>
  );
}
