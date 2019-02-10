import React, {Component} from 'react';


class Product extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: []
        };
    }

    componentDidMount(){
        fetch('https://us-east1-portfolio-229320.cloudfunctions.net/petstore')
            .then(response => response.json())
            .then(data => this.setState({ list: data}));
    }

    render(){
        return(
            <div className="container">
                <h4 style={{marginLeft: '15px'}} className="text-info">ANIMAL FOODS</h4>
                 {this.state.list.map((item)=>
                    <div className="col-md-3 col-sm-6" key={item._id}>
                    <form method="POST">
                        <span className="thumbnail">
                            <img style={{width: '150px', height: '150px' }} src={item.image_path} alt="..." />
                            <h4 name="name" className="text-info"><a href="#">{item.type}</a></h4>
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
        );
    }
}

export default Product;