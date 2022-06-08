import { useState, inputRef } from "react";
import { data as emojiList } from "../data/data";
import EmojiButton from "./emojiButton";
import EmojiSearch from "./emojiSearch";

import styles from "./emojiPicker.module.scss";

export default function EmojiPickerContainer( {picker} ) {

    const [emojis, setEmojis] = useState(emojiList);

    function handleSearch(e) {
        const query = e;

        if (!!query) {
            const search = emojis.filter(emoji => {
                return emoji.name.toLowerCase().includes(query) || emoji.keywords.toLowerCase().includes(query)
            });
            setEmojis(search)
        } else {
            setEmojis(emojiList)
        }
        
    }

    // function handleOnClickEmoji(emoji) {
    //     const cursorPosition = inputRef.current.selectionStart;
    //     const text = inputRef.current.value;
    //     const prev = text.slice(0, cursorPosition);
    //     const next = text.slice(cursorPosition);

    //     inputRef.current.value = prev + emoji.symbol + next;

    // }

    return (
        <div className={styles.emojiPickerContainer}>
            <EmojiSearch onSearch={handleSearch} />
            <div className={styles.emojiList}>
                {emojis.map((emoji) => <EmojiButton key={emoji.symbol} emoji={emoji} onClick={picker}/>)}
            </div>
        </div>
    )
}
