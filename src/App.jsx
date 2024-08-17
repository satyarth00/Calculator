
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './component/Input';
import Buttons from './component/Buttons';
import styles from './App.module.css'
import { useState } from 'react';
function App() {

  const [calval, setcalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setcalval("");
    }
    else if (buttonText === "=") {
      const result = eval(calval);
      setcalval(result)
    }
    else {
      const results = calval + buttonText;
      setcalval(results);
      // setcalval(calval + buttonText )
    }
  }
  
  return (
    <div className={styles.maindiv}>
     <Input inputVal={calval}></Input>
      <Buttons onButtonClick ={onButtonClick} ></Buttons>
    </div>
  )
}

export default App
