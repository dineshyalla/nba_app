import React, {Component} from 'react';
import './layout.css'

class Layout extends Component{
    render(){
        return(
            <React.Fragment>
                Header
                <div>{this.props.children}</div>
                Footer
            </React.Fragment>
            
        )
    }
}

export default Layout;