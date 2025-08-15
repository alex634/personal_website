import UnicornScene from 'unicornstudio-react';
import { useRef, useLayoutEffect } from 'react';

import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";

import Container from './Components/Container.jsx';
import Button from './Components/Button.jsx';
import SelfModifyingText from './Components/SelfModifyingText.jsx';
import Text from './Components/Text.jsx';
import Languages from './Components/Languages.jsx';
import EqualColumns from './Components/EqualColumns.jsx';
import JobCard from './Components/JobCard.jsx';
import Copied from './Components/Copied.jsx';
import Download from './Components/Download.jsx';

import personaljson from './assets/personal.json?url';


function App() {
  const aboutRef = useRef(null);
  const downloadRef = useRef(null);

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }
  ,[]);
  
  function goToAbout() {
    if (aboutRef.current !== null) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth'});
    }
  }

  return (

  <Container breakpoint="xl" className="bg-primary p-4">
    
    <SelfModifyingText 
    words={["Hello I'm Timo", "I'm a programmer", "I'm a photographer", "I'm a gardener", "I'm a mechanic", "I'm a cook"]}
    className={"mr-10 md:m-0 select-none absolute z-100 left-12 top-12 font-header text-5xl text-black font-header-animate"}/>
    <Button variant={"main"}
    onClick={goToAbout}
    className={"absolute min-w-40 z-100 top-160 left-8 md:left-auto md:right-60 md:min-w-43 "}>
      About Me
    </Button>
    <Button variant={"muted"}
    className={"absolute min-w-40 right-9 md:right-12 top-160 z-100 md:min-w-43"}
    onClick={()=>{if (downloadRef.current !== null) downloadRef.current.click();}}
    >
      Resume 
    </Button>
    <UnicornScene dpi={1} height={"700px"} jsonFilePath={personaljson}/>
    
    <Text ref={aboutRef} variant="header" className="mt-8">
      About
    </Text>
    
    <Text variant="paragraph" className="mt-6 text-lg px-8">
      Hello, I’m Timo! I just graduated from the University of Kansas with a degree in Computer Science. Rock Chalk Jayhawk! 
      <br className="md:hidden"/>
      <br className="md:hidden"/>
      &nbsp;I am a curious person by nature and have a wide range of interests. In my personal projects, I have done everything from hardware design and embedded systems to backend and frontend development.  
      <br className="md:hidden"/>
      <br className="md:hidden"/>
      &nbsp;In working toward my goals, I like to use the latest technologies. I use AI to accelerate development by helping me debug and answer questions, while making sure I do not misuse it by letting it generate my code.
    </Text>

    <Languages containerClassName="mt-12" textClassName={"text-8xl mx-10"}/>

    <Text variant="header" className="mt-8">
      Selected Projects
    </Text>

    <EqualColumns columns={1} className="mt-8 gap-3 md:grid-cols-2 2xl:grid-cols-3">
      <JobCard imgSrc="/buyersbook.webp" title="BuyersBook"
      imgWidth="125px" imgHeight="125px" link={"https://github.com/alex634/BuyersBook"}
      >
        <Text variant={"paragraph"} className="text-left italic">
          A web app that helps salespeople show off their product catalog
        </Text>
      </JobCard>
      <JobCard imgSrc="/roboopp.webp" title="RoboOpp"
      imgWidth="125px" imgHeight="125px" link={"https://devpost.com/software/robo-opp"}>
        <Text variant={"paragraph"} className="text-left italic">
          A security robot that shoots Nerf gun bullets at intruders with help of computer vision
        </Text>
      </JobCard>
      <JobCard imgSrc="/8_bit_cpu.webp" title="8 Bit CPU"
      imgWidth="125px" imgHeight="125px" link={"https://github.com/alex634/8sc_tang_nano_cpu"}>
        <Text variant={"paragraph"} className="text-left italic">
          An 8 bit CPU implemented on a Tang Nano 20k inspired by a single cycle RISC architecture
        </Text>
      </JobCard>
      <JobCard imgSrc="/ridekc_bus_tracker.webp" title="RideKC Bus Tracker"
      imgWidth="125px" imgHeight="125px"
      link={"https://github.com/alex634/esp32_ridekc_bus"}>
        <Text variant={"paragraph"} className="text-left italic">
          An ESP32 based bus tracker; uses WiFi to determine bus presence 
        </Text>
      </JobCard>
    </EqualColumns>

    <Text variant="header" className="mt-8">
      Contact Info
    </Text>

    <EqualColumns columns={4} className="lg:px-70 mt-8 mb-6 justify-items-center">
      <Copied s={"alex.aranjo@gmail.com"} className="-top-8 text-primary">
        <IoMdMail className="copied-tooltip cursor-pointer" size="70px"/>
      </Copied>
      <Copied s={"913-286-0701"}>
        <FaPhoneSquareAlt className="copied-tooltip cursor-pointer" size="70px"/>
      </Copied>
      <FaGithubSquare onClick={()=>{window.open("https://github.com/alex634/", '_blank')}} className="cursor-pointer" size="70px"/>
      <FaLinkedin onClick={()=>{window.open("http://www.linkedin.com/in/timo-aranjo-83ab05237", "_blank")}} className="cursor-pointer" size="70px"/>
    </EqualColumns>
  
  <Download ref={downloadRef} fileLocation="/Resume_8_11_2025.pdf" downloadName="Resume.pdf"/>
  </Container>
  );
}

export default App
