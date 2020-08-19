import React from 'react';
import ImageUpload from '../imageUpload/imageUpload';
import constants from '../constants/Queries';
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import $ from "jquery";

class StoreDashboard extends React.Component {
  state = {
    name: '',
    price: '',
    pic: null,
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  updateImgUrl(url) {
    this.setState({
      pic: url,
    });
  }

  clear(){
    this.setState({
      name: '',
      price: '',
      pic: null,
    });
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.props.provider);
    //Get Category name from the category ID in provider data
    const categoryQuery = constants.categoryNameByID(this.props.provider.categoryID);
    constants.request(categoryQuery).then(res => {
      console.log(res.data);
      if(res.data.errors){
        console.log('Error');
      } else {
        //Add Product
        const addProductMutation = constants.addProduct(this.state.name, this.props.provider.id,
           res.data.data.getCategoryByID.category, this.state.price, this.state.pic);
           console.log(addProductMutation);
           constants.request(addProductMutation)
           .then( result => {
            if(result.data.errors){
              alert('Error in saving product');
            } else {
              alert('product saved successfully');
              this.clear();
            }
           }).catch(err =>{
            alert('Error in saving product');
           })
      }
    }).catch(err => {
      console.log(err);
    })    
  }
  
  render() {
    return (
      <div className='store-dashboard'>
        <h2>Add New Product</h2>
        <div className='product-data'>
          <form>
            <label htmlFor='name'>Product Name: </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Product Name'
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
            ></input>
            <br />
            <br />
            <label htmlFor='price'>Product Price: </label>
            <input
              type='text'
              id='price'
              name='price'
              placeholder='Product Price'
              value={this.state.price}
              onChange={this.handleChange.bind(this)}
            ></input>
            <br />
            <br />
            <label htmlFor='pic'>Product Picture: </label>            
             <ImageUpload getImgUrl={this.updateImgUrl.bind(this)} />
            <br />
            <br />
            <button
              className='add-product'
              onClick={this.handleClick.bind(this)}
            >
              Add Product
            </button>
          </form>
        </div>
        <div className="success-add-product-main">
          <div className="success-add-product">
            <h3>
              <CheckCircleOutlinedIcon />
              <span>Success</span>
            </h3>
            <hr />
            <p>Perfect your new product successfully added.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreDashboard;
