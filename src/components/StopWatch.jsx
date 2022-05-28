import React, { useEffect, useState } from "react";
import Styles from "./timer.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [timerId, setTimerId] = useState();
  const HandleStart = () => {
    if (!timerId) {
      const id = setInterval(() => {
        setTimer((pre) => pre + 10);
        setTimerId(id);
      }, 10);
    }
  };
  const HandleStop = ()=>{
      clearInterval(timerId);
      setTimer(0)
  }
  return (
    <>
    <div className={Styles.mainContainer}>
      <div className={Styles.Container}>
      <span className={Styles.digit}>
        {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}'s
      </span><br />
      <span className={Styles.digit}>
        {("0" + ((timer / 10) % 100)).slice(-2)}
      </span>
      </div>
      <div className={Styles.btn}>
      <Button colorScheme='blue' onClick={HandleStart}>Start</Button>
      
      <Button colorScheme='blue' onClick={HandleStop}>Reset</Button>
      </div>
      </div>
    </>
  );
};

export default StopWatch;
