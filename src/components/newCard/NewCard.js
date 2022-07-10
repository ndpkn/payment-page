import './newCard.scss'
import master from '../../images/master.png'
import visa from '../../images/visa.png'
import editIcon from '../../images/edit.png'
import deleteIcon from '../../images/delete.png'
import { useState } from 'react';
import Modal from '../modal/Modal';
import InputMask from "react-input-mask";

const NewCard = () => {
    const [isModal, setModal] = useState(false);
    const [visibleState, setVisibleState] = useState(false);
    const [visibleState2, setVisibleState2] = useState(false);

    // const [cardValue, setCardValue] = useState('')
    // const [dateValue, setDateValue] = useState('')
    // const [cvvValue, setCvvValue] = useState('')
    
    // const cardsArr = [];
    // const addToCardsArr = () => {
    //     let newObj = {
    //         cardNumber: {cardValue}, cardDate: {dateValue}, cardCvv: {cvvValue}
    //     }
    //     cardsArr.push(newObj)
    //     console.log(cardsArr);
    // }

    // const addedCard = () => {
    //     cardsArr.map(item => {
    //         return (
    //             <div className="newCard__items-item">
    //                 <div className="newCard__items-logo">
    //                     <img src={master} alt="" />
    //                     {/* надо придумать изменнение логотпа карты */}
    //                 </div>
    //                 <div className="newCard__items-number">
    //                     <p>{item.cardNumber}</p>
    //                 </div>
    //                 <div className="newCard__items-button">
    //                     <button>⋮</button>
    //                 </div>
    //             </div>
    //         )
    //     })
    // }
    // создан массив со значениями из полей ввода, нужно создать массив который будет перебираться в блоке с картами и пушить в него значение из нового массива

    // const handleCardInput = ({ target: { value } }) => setCardValue(value);
    // const handleDateInput = ({ target: { value } }) => setDateValue(value);
    // const handleCvvInput = ({ target: { value } }) => setCvvValue(value);

    const str = '1234 5678 9012 3456'
    const strRepl1 = str.slice(5,14).replace(/\d/g, '-')
    const strRepl2 = str.slice(0,5).replace(/\d/g, '*')
    const strNew = strRepl2 + strRepl1 + str.slice(14)
    
    const CardInput = (props) => {
        return (
            <>
                <label htmlFor="card">Card number</label>
                <InputMask id='card' mask="9999 9999 9999 9999" maskPlaceholder="-" alwaysShowMask={true} onChange={props.onChange} value={props.value} />
            </>
        )
    } 
    const DateInput = (props) => {
        return  (
            <>
                <label htmlFor="date">Expire date (dd/yy)</label>
                <InputMask id='date' mask="99/99" maskPlaceholder="--/--" alwaysShowMask={true} onChange={props.onChange} value={props.value} />
            </>
        )
    } 
    const CvvInput = (props) => {
        return  (
            <>
                <label htmlFor="cvv">CVV</label>
                <InputMask id='cvv' mask="999" maskPlaceholder="-" alwaysShowMask={true} onChange={props.onChange} value={props.value} />
            </>
        )
    } 

    const isVisible = (btn) => {
        if (btn === 'first') {
            setVisibleState(prev => !prev)
        } else if (btn === 'second') {
            setVisibleState2(prev => !prev)
        }
    }




    return (
        <div className="newCard">
            <div className="newCard__items">
                <div className="newCard__items-item">
                    <div className="newCard__items-logo">
                        <img src={master} alt="" />
                    </div>
                    <div className="newCard__items-number">
                        <p>{strNew}</p>
                    </div>
                    <div className="newCard__items-button">
                        <button onClick={() => isVisible('first')}>⋮</button>
                    </div>
                    <div className={`edit ${visibleState ? 'visible' : '' } `}>
                        <div className="edit__edit">
                            <img src={editIcon} alt="" />
                            <p>Edit</p>
                        </div>
                        <div className="edit__delete">
                            <img src={deleteIcon} alt="" />
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
                <div className="newCard__items-item">
                    <div className="newCard__items-logo">
                        <img src={visa} alt="" />
                    </div>
                    <div className="newCard__items-number">
                        <p>{strNew}</p>
                    </div>
                    <div className="newCard__items-button">
                        <button onClick={() => isVisible('second')}>⋮</button>
                    </div>
                    <div className={`edit ${visibleState2 ? 'visible' : '' } `}>
                        <div className="edit__edit">
                            <img src={editIcon} alt="" />
                            <p>Edit</p>
                        </div>
                        <div className="edit__delete">
                            <img src={deleteIcon} alt="" />
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newCard__button">
                <button onClick={() => setModal(true)}>+ Add new card</button>
            </div>
            <Modal
                isVisible={isModal}
                title="Add new card"
                card={<CardInput/>}
                date={<DateInput/>}
                cvv={<CvvInput />}
                footer={<button>Add</button>}
                onClose={() => setModal(false)}
            />
        </div>
        )
}



export default NewCard