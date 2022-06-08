import { forwardRef, useState, useRef, useEffect } from "react";
import EmojiPickerContainer from "./emojiPickerContainer";

import styles from "./emojiPicker.module.scss";


export function EmojiPicker(props, inputRef) {
    
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);


    function handleClick() {
        setIsOpen(!isOpen);
    };

    useEffect(() =>{
        window.addEventListener('click', (e) => {
            if (!containerRef.current.contains(e.target)) {
                setIsOpen(false);                
            }
        })
    }, [])

    function handleOnClickEmoji(emoji) {
        const cursorPosition = inputRef.current.selectionStart;
        const text = inputRef.current.value;
        const prev = text.slice(0, cursorPosition);
        const next = text.slice(cursorPosition);

        inputRef.current.value = prev + emoji.symbol + next;

        inputRef.current.selectionStart = cursorPosition + emoji.symbol.length;
        inputRef.current.selectionEnd = cursorPosition + emoji.symbol.length;
        inputRef.current.focus();
        
    }

    return (
        <div ref={containerRef} className={styles.inputContainer}>
            <button onClick={handleClick} className={styles.emojiPickerButton}>😀</button>

            {isOpen ? <EmojiPickerContainer picker={handleOnClickEmoji}/> : ""}
        </div>
    )
}

export default forwardRef(EmojiPicker)