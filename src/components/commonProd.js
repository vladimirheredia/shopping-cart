import React, { Component } from 'react';
import Nav from './Nav';

class CommonProd extends Component{

    constructor(props){
        super(props)
        this.state = {
            products: [],
            title: ''
        }
    }

    componentDidMount(){
        if(this.props.title === "ANIMAL FOODS"){
            fetch('https://us-east1-portfolio-229320.cloudfunctions.net/petstore')
            .then(response => response.json())
            .then(data => this.setState({ products: data, title: this.props.title}));
        }else{
            const foodType = this.props.title === 'DOG FOODS' ? 'Dog' : 'Cat';
            const url = 'https://us-east1-portfolio-229320.cloudfunctions.net/petfoodtype?type=' + foodType;
            fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ products: data, title: this.props.title}));
        }
    }

    render(){
        return(
            <div>
                <Nav/>
                <div className="container">
                    <h4 style={{marginLeft: '15px'}} className="text-info">{this.title}</h4>
                    {this.state.products.map((item)=>
                        <div className="col-md-3 col-sm-6" key={item._id}>
                        <form method="POST">
                            <span className="thumbnail">
                                <img style={{width: '150px', height: '150px' }} src={item.image_path} alt="..." />
                                <h4 name="name" className="text-info"><a href="#">{item.type} Food</a></h4>
                                <p>
                                    {item.description}	
                                </p>
                                <hr className="line" />
                                <div className="row">
                                    <div className="col-md-4 col-sm-4">
                                        <p style={{marginTop: '7px', fontWeight: 'bold', color: 'grey'}} >${item.price}</p>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <button type="submit" name="add_to_cart" className="btn btn-info right" >
                                        <span style={{marginRight: '20px'}} 
                                            className="glyphicon glyphicon-shopping-cart" aria-hidden="true">
                                        </span>ADD TO CART</button>
                                    </div>
                                </div>
                            </span>
                        </form>
                    </div>
                    )}
                </div>
            </div>
        );
    }
}

export default CommonProd;