
import { useState, useEffect } from 'react';
import './userNameInput.css';



const UserNameInput = () => {
    const [name, setName] = useState('');
    const [header, setHeader] = useState('unknown person');


    const localStorageHandler = () => {
        const value = localStorage.getItem('name');
        if(!value){
            setHeader('unknown person');
        }else{
            setHeader(value)
        }
    }

    useEffect(() => {
        window.addEventListener('storage',localStorageHandler);
        const value = localStorage.getItem('name');
        if(value)setHeader(value)
            
        return () => {
            window.removeEventListener('storage',localStorageHandler)

        };
    }, []);


    const onSubmitClick = () => {
        setHeader(name);
        localStorage.setItem('name', name);
        setName('');
    }

    const onClearStoreClick = () => {
        localStorage.clear();
        setHeader('unknown person');
    }


    return(
        <div className="name__wrapper">
            <h1 className='name__header'> Welcome, {header}</h1>
            <div className="name__group">
                <input 
                    placeholder='Let me know your name' 
                    value={name} onChange={(e) => setName(e.target.value)} 
                    type="text" 
                    className="name__input" 
                />
                <button 
                    onClick={onSubmitClick} 
                    className="name__button"
                    >SUBMIT
                </button>
                <button 
                    onClick={onClearStoreClick} 
                    className="name__button clearStore"
                    >CLEAR STORE
                </button>
            </div>
        </div>
    )
}

export default UserNameInput;