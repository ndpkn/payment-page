import './cards.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import mastercard from '../../images/mastercard.png'
import visa from '../../images/visa.png'
import chip from '../../images/chip.png'
import lock from '../../images/lock.png'
import Slider from "react-slick";

const Cards = () => {

    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        swipeToSlide: true,
        slidesToScroll: 1
    };

    const changeColor = (card) => {
        if (card === 'master') {
            return 'cards__item master'
        } else if (card === 'visa'){
            return 'cards__item visa'
        }
    }

    const cardItems = [
        {id: '1', img: `${mastercard}`, number: '1234 **** **** 3456', date: '02/24', color: `${changeColor('master')}`},
        {id: '2', img: `${visa}`, number: '5623 **** **** 3234', date: '07/26', color: `${changeColor('visa')}`}
    ];

    const result = cardItems.map(card => {
        return <CardItem key = {card.id} img = {card.img} number = {card.number} date = {card.date} color = {card.color}/>
    })

    return (
        <div className="cards">
            <Slider {...settings}>
                {result}
            </Slider>
        </div>
    )
}

const CardItem = (props) => {
    return (
        <div className={props.color} key = {props.id}>
            <div className="cards__item-top">
                <div className="cards__item-logo">
                    <img src={props.img} alt="" />
                </div>
                <div className="cards__item-chip">
                    <img src={chip} alt="" />
                </div>
            </div>
            <div className="cards__item-center">
                <div className="cards__item-number">
                    <p>{props.number}</p>
                </div>
            </div>
            <div className="cards__item-bottom">
                <div className="cards__item-date">
                    <p>Expire date</p>
                    <p>{props.date}</p>
                </div>
                <div className="cards__item-cvv">
                    <img src={lock} alt="" />
                    <span>cvv</span>
                </div>
            </div>
        </div>
    )
}

export default Cards