import BasicInfoPanel from "./BasicInfoPanel";

export default function SecondaryInfoPanel(props) {

  const location = props.location;
  const timeURL = props.url;


  return(
    <BasicInfoPanel locationIcon='material-symbols:star'
    location={location} 
    timeURL={timeURL}   
    />
  )
};
