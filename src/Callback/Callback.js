import React,{Component} from 'react';
import loading from './loading.svg';

class callBack extends Component{
    render(){
        const style = {
            position : "absolute",
            display : "flex",
            justifyContent : "center",
            top : 0,
            bottom : 0,
            left : 0,
            right : 0,
            backgroundColor : '#fff'
        }

        return(
            <div style={style}>
                <img src={loading} alt="loading" />
            </div>
        );
    }
}

export default callBack;