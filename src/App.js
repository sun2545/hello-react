import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id =2
  state = {
    information: [
    {
      id:0,
      name:'hone gil',
      phone:'905-422-2222'
    },
    {
      id:1,
      name:'kimchi',
      phone:'465-311-1111'
    }
  ],
  keyword: ''
}
handleChange =(e) => {
  this.setState({
   keyword: e.target.value,
  });
}
handleCreate = (data) =>{
    const{ information } = this.state;
    this.setState({
      information:information.concat({id:this.id++,...data})
    })
}
handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
handleUpdate =(id,data) =>{
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
        ?{...info,...data} 
        : info
      )
    })
  }
  render() {

    const { information, keyword} = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm 
        onCreate ={this.handleCreate}
        />
        <p>
          <input
          placeholder = "input keyword"
          onChange ={this.handleChange}
          value={keyword}
          />
          </p>
          <hr />
       <PhoneInfoList 
       data={filteredList}
       onRemove ={this.handleRemove}
       onUpdate ={this.handleUpdate}
       />
      </div>
    );
  }
}

export default App;
