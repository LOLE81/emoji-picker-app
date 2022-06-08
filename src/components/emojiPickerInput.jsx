import EmojiPicker from "./emojiPicker";
import { useRef } from "react";

import styles from "./emojiPicker.module.scss";

export default function EmojiPickerInput() {

    const refInput = useRef(null);

    

    return (
        <div className={styles.container}>
            <input className={styles.inputText} ref={refInput}/>            
            <EmojiPicker ref={refInput}/>
        </div>
        
    )
}