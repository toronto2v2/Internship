import { useEffect } from "react";
import "./App.css";
import Modal from "../modal/Modal";
import UserNameInput from "../userNameInput/UserNameInput";
import MaskedInput from "../maskedInput/MaskedInput";
import { EventEmitter } from "events";

export const eventEmitter = new EventEmitter();
export const channel = new BroadcastChannel("modal-channel");
function App() {



    useEffect(() => {
        channel.addEventListener("message", handleMessage);

        return () => {
            channel.removeEventListener("message", handleMessage);

        };
    }, []);

    const handleMessage = (event) => {
        switch(event.data){
            case 'show-offer':
                eventEmitter.emit("show-offer");
                break
            case 'hide-offer':
                eventEmitter.emit("hide-offer");
                break
            default:
                return
        }
    };
    const onBtnOpen = () => {
        eventEmitter.emit("show-offer");
        channel.postMessage('show-offer' );
    };
    const onBtnClose = () => {
        eventEmitter.emit("hide-offer");
        channel.postMessage('hide-offer' );
    };

    return (
        <div className="App">
            <Modal />

            <section className="modal__control">
                <button className="offer hideOffer" onClick={onBtnOpen}>Get offer details</button>
                <button className="offer getOffer" onClick={onBtnClose}>Close offer details</button>
            </section>
            <section className="nameSection">
                <UserNameInput/>
            </section>
            <section className="maskedSection">
                <MaskedInput mask = '+38 (XXX) XXX-XX-XX'/>
            </section>
        </div>
    );
}

export default App;
