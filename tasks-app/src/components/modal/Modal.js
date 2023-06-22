import {useState,useEffect} from 'react';
import { eventEmitter } from '../app/App';
import { channel } from '../app/App';
import './modal.css';
import img from '../../assets/img.png';




const Modal = () => {
    const [modalVisible, setModalVisible] = useState(false);


    const handleOpenModal = () => {
        setModalVisible(true);
    };
    const handleCloseModal = () => {
        setModalVisible(false);
    }
    const onCloseBtnClick = () => {
        eventEmitter.emit('hide-offer');
        channel.postMessage('hide-offer' );
    }

    useEffect(() => {
        eventEmitter.on("show-offer", handleOpenModal);
        eventEmitter.on("hide-offer", handleCloseModal);

        return () => {
            eventEmitter.off("show-offer", handleOpenModal);
            eventEmitter.off("hide-offer", handleCloseModal);
        };
    }, []);
    


    return(
        <div className="modal__wrapper" style={{'display': modalVisible ? 'block':'none'}}>
            <button onClick={onCloseBtnClick} className="closeBtn"> X </button>
            <h2 className='modal__header'>Special offer for YOU!</h2>
            <section className="modal__content">
                <aside className="modal__img-wrapper">
                    <img src={img} alt="img" className="modal__img" />
                </aside>
                <main className = 'content__description'>
                    <h3 className='content__title'> Sign up for newsletter and get 15% off</h3>
                    <p className="content__text">Sign up to be the first to hear about exclusive details/special offers and sales</p>
                    <div className="input__group">
                        <input type="text" placeholder= 'Enter your email' className="input__field" />
                        <button className="input__btn">SUBSCRIBE</button>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default Modal;