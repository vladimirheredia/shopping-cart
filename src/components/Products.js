import React, {Component} from 'react';
import CommonProd from './commonProd'

class Product extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: []
        };
        
    }

    render(){
        return(
            <CommonProd title="ANIMAL FOODS"/>
        );
    }
}

export default Product;