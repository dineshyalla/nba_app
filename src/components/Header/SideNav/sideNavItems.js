import React from 'react';
import style from './sideNav.css'
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

const SideNavItems = () => {

    const items = [
        {
            type :style.option,
            icon :'sign-out',
            text :'sign-out',
            link :'/sign-out'
        },
        {
            type :style.option,
            icon :"home",
            text :"Home",
            link :"/"
        },
        {
            type :style.option,
            icon :'file-text-o',
            text :'News',
            link :'/news'
        },
        {
            type :style.option,
            icon :'play',
            text :'Videos',
            link :'/videos'
        },
        {
            type :style.option,
            icon :'sign-in',
            text :'sign-in',
            link :'/sign-in'
        }
    ]

    const showItems = () => {
       return items.map((item, i) => {
            return (
                <div key = {i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}>
                        </FontAwesome> 
                        {item.text}
                    </Link>
                </div>
            )
        })
    }

    return (
        <div>
             {showItems()}
        </div>
      
    )

    // return (
    //     <div className={style.option}>
    //         <Link to='/'>
    //             <FontAwesome name="home"/>
    //         </Link>
    //         Home
    //     </div>
    // )
}

export default SideNavItems;