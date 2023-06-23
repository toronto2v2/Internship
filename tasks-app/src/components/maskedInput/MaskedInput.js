import { useEffect, useState, useRef } from "react";
import "./MaskedInput.css";

const MaskedInput = ({ mask }) => {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        setValue(mask);
    }, [mask]);


    const onInputFocus = (e) => {
        setTimeout(() => {
            e.target.selectionStart = e.target.selectionEnd =
                value.indexOf("X");
        });
    };

    const onInputChange = (e) => {
        e.preventDefault();
        const el = inputRef.current;
        const isNumbers = (e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode >= 48 && e.keyCode <= 57);
        if(isNumbers){
            el.value = el.value.replace('X', e.key);
            setValue(el.value);
            el.selectionStart = el.selectionEnd =el.value.indexOf('X');
        }else if(e.keyCode === 8 && /\d/.test(el.value[el.selectionStart-1])){
            const moveCursore = el.selectionStart;
            el.value = el.value.slice(0,el.selectionStart-1) + 'X' + el.value.slice(el.selectionStart);
            setValue(el.value);
            el.selectionStart = el.selectionEnd = moveCursore-1;
        }else if(e.keyCode === 8){
            if(el.selectionStart === 0) return
            el.selectionStart = el.selectionEnd = el.selectionStart-1;
        }else if(e.keyCode === 37){
            el.selectionStart = el.selectionEnd = el.selectionStart-1;
        }else if(e.keyCode === 39){
            el.selectionStart = el.selectionEnd = el.selectionStart+1;
        }
    }
    return (
        <div className="masked__wrapper">
            <h3 className="masked__header">Enter number</h3>
            <input
                defaultValue={value}
                ref = {inputRef}
                maxLength={mask.length}
                onKeyDown={(e) =>  onInputChange(e)}
                onFocus={(e) => onInputFocus(e)}
                type="text"
                className="masked__input"
            />
        </div>
    );
};

export default MaskedInput;
