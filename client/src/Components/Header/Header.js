import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import { ShoppingBasket } from '@mui/icons-material';
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from '../../StateProvider';
import { useAuth } from '../../authContext';
import { doSignOut } from '../../auth';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const { userLoggedIn } = useAuth()
    const navigate = useNavigate()

  return (
        <div className="header">
            <Link to="/">
                <img className= "header__logo" src= "https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            <div className= "header__search">    
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <nav>
                    {
                        userLoggedIn 
                        ?
                        <>
                        <div className="header__option">
                            <span className="header__optionLineOne">
                                Welcome,
                            </span>
                            
                            <button onClick={() => { doSignOut().then(() => { navigate('/login')})}} className='header__optionLineTwoButton'>Logout</button>
                        </div>
                        </>
                        :
                        <>

                        <div className="header__option">
                            <span className="header__optionLineOne">
                                Hello Guest,
                            </span>
                            
                            <span className="header__optionLineTwo">
                               <Link to="/login"> Sign In</Link>
                            </span>
                            
                        </div>
                        </>

                    }
                </nav>

                <div className="header__option">
                <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasket />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header