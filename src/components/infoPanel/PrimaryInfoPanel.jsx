import BasicInfoPanel from "./BasicInfoPanel";
import { timeGetter } from "@/utils/timeAPI";
import useSWR from 'swr';
import axios from 'axios';

export default function PrimaryInfoPanel(props) {

  const location = 'melbourne';
  const timeURL = 'http://worldtimeapi.org/api/timezone/Australia/Melbourne';

  return (
    <BasicInfoPanel 
    locationIcon='entypo:location' 
    location={location} 
    timeURL={timeURL} 
    />
  );
};
