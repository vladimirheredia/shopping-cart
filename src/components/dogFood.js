import React, {Component} from 'react';
import CommonProd from './commonProd';

class DogFood extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: []
        };
    }

    render(){
        return(
            <CommonProd title="DOG FOODS"/>
        );
    }
}

export default DogFood;