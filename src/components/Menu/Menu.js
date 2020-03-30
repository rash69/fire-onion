import React, { useState, useEffect, useContext } from 'react';
import data from '../../Data/Data';
import './Menu.css'
import Item from '../Item/Item';
import check from '../../images/ICON/Path 1.png'
import { UserContext} from '../auth/useAuth'
import { withRouter } from 'react-router-dom';

const Menu = (props) => {
    
    const {cart} = useContext(UserContext)
    const [disabled, setDisabled] = useState(true)
    useEffect(()=> {
                if(cart.length >0) {
                    setDisabled(false)
                }
    },[cart])


    const [activeCatagories, setActiveCatagories] = useState(
        {
            lunchActive: true,
            dinnerActive: false,
            breakfastActive: false
        }
    )
    // item select category
    const [selectedItem, setSelectedItem] = useState('Lunch')
    //  initials set data 
    const [items, setItems] = useState([])

    useEffect(() => {
        const item = data.filter(item => item.category === selectedItem)
        setItems(item)
    }, [selectedItem])

    // conditionally set data when click catagories
    const selectHandler = item => {
        if (item === 'Breakfast') {
            let previousState = activeCatagories;
            previousState.breakfastActive = true
            previousState.lunchActive = false
            previousState.dinnerActive = false
            setActiveCatagories(previousState)
        } else if (item === 'Dinner') {
            let previousState = activeCatagories;
            previousState.breakfastActive = false
            previousState.lunchActive = false
            previousState.dinnerActive = true
            setActiveCatagories(previousState)
        } else if (item === 'Lunch') {
            let previousState = activeCatagories;
            previousState.breakfastActive = false
            previousState.lunchActive = true
            previousState.dinnerActive = false
            setActiveCatagories(previousState)
        }
        setSelectedItem(item)
    }

    const { lunchActive, dinnerActive, breakfastActive } = activeCatagories;

    return (
        <section className="food-catagories-area">
            <div className="container">
                <div className="row">
                    <div className="catagories m-auto py-5">
                        
                            <button className={`menu-toggle ${breakfastActive ? 'active-btn' : 'btn'}`}
                                onClick={() => selectHandler('Breakfast')}
                            >Breakfast</button>
                            <button className={`menu-toggle ${lunchActive ? 'active-btn' : 'btn'}`}
                                onClick={() => selectHandler('Lunch')}
                            >Lunch</button>
                            <button className={`menu-toggle ${dinnerActive ? 'active-btn' : 'btn'}`}
                                onClick={() => selectHandler('Dinner')}
                            >Dinner</button>
                      
                       
                    </div>
                    
                </div>
                <div className="row food-items">
                    {items.map(item => <Item key={item.key} item={item} />)}
                    <div className="w-100"></div>
                    <div className="checkout-btn-aria m-auto">
                    <button 
                    onClick={()=>props.history.push('/cart')}
                    className={disabled ? 'btn disabled my-4 text-center text-capitalize' :'btn checkout-btn  my-4 text-center text-capitalize' } 
                 disabled={disabled} >Checkout your food <img className='w-25' src={check} alt=""/></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withRouter(Menu);