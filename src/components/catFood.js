import React, {Component} from 'react';
import CommonProd from './commonProd';

class CatFood extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: []
        };
    }

    render(){
        return(
            <CommonProd title="CAT FOODS"/>
        );
    }
}

export default CatFood;