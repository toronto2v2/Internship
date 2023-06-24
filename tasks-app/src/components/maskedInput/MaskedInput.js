import {useState, useMemo, useCallback } from "react";
import "./MaskedInput.css";

const MaskedInput = ({ mask }) => {
    const [value, setValue] = useState("");

    const onInputChange = useCallback((e) => {
        e.preventDefault();
        const res = e.target.value.replace(/\D/g, "");
        setValue(res);
    },[]);

    const maksLength = useMemo(() => {
        return mask?.match?.(/x/gi)?.length; 
    },[mask]);


    let output = mask;
    for (let i = 0; i < value.length; i++) {
        output = output?.replace?.(/x/i, value[i]);
    }



    return (
        <div className="masked__wrapper">
            <h3 className="masked__header">Enter number</h3>
            <div className="input__wrapeer">
                <input
                    value={value}
                    maxLength={maksLength}
                    onChange={(e) =>  onInputChange(e)}
                    type="text"
                    className="masked__input"
                />
                <div className="span">{output}</div>
            </div>
        </div>
    );
};

export default MaskedInput;
