import React, {Component} from 'react';
import './layout.css'
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

class Layout extends Component{

    state = {
        showNav: false
    }

    toggleNav = (action) => {
        this.setState({
            showNav: action
        })
    }
    render(){
        return(
            <React.Fragment>
                <Header showNav = {this.state.showNav}
                    onHideNav = {() => (this.toggleNav(false))}
                    onShowNav = {() => (this.toggleNav(true))}
                />
                <div>{this.props.children}</div>
                <Footer/>
            </React.Fragment>
            
        )
    }
}

export default Layout;