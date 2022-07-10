import './header.scss'
import { useTheme } from '../hooks/useTheme'
import { useState } from 'react';

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [visibleState, setVisibleState] = useState(false);

    const handleLightTheme = () => {
        setTheme('light')
    }
    const handleDarkTheme = () => {
        setTheme('dark')
    }
    const handleVisible = () => {
        setVisibleState(prev => !prev)
    }
    
    return (
        <header>
            <div className="header container">
                <div className="header__back ">
                    <a href="/">Back</a>
                </div>
                <div className="header__logo">
                    <h2>iBANK</h2>
                </div>
                <div className="header__buttons">
                    <div className="header__buttons-details">
                        <button onClick={handleVisible}>Order details</button>
                    </div>
                    <div className={`details ${visibleState ? 'visible' : '' } `}>
                        
                        <p><span>Order number</span>123456</p>
                        <p><span>Payer ID</span>654321</p>
                    </div>
                    <div className="header__buttons-theme">
                        <button onClick={handleLightTheme}>Light</button>
                        <button onClick={handleDarkTheme}>Dark</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header