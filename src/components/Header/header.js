import React, {Component} from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';

class Header extends Component{

    render(){

        const navBars = () => {
            return (
                <div className={style.bars}>
                    <FontAwesome name="bars" onClick ={this.props.onShowNav} style = {{
                        color: "#dfdfdf",
                        padding: '10px',
                        cursor: 'pointer'
                    }}/>
                </div>
            )
        }

        const logo = () => (
                <Link to="/" className={style.logo}>
                    <img alt="NBA logo" src="/images/nba_logo.png"></img>
                </Link>
        )
        return(
            <header className={style.header}>
                <SideNav {...this.props}/>
                <div className={style.headerOpt}>
                    {navBars()}
                    {logo()}
                </div>
            </header>
        )
    }
}

export default Header;