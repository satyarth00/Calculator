import styles from './Button.module.css'
function Buttons({onButtonClick}) {
    const buttons =['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']

    return <div className={styles.buttondiv}>
        {buttons.map((buttonName) => <button className={styles.button}
            onClick={() => onButtonClick(buttonName)}>{buttonName}</button>)}
         </div>
        
}

export default Buttons;