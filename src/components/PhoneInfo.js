import React, { Component } from 'react';


class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    },
  }

  state = {
      editing: false,
      name:'',
      phone:'',
  }
  handleRemove = () => {
      const {info, onRemove }= this.props;
      onRemove(info.id);
  }
  handleToggleEdit = () => {
      const {editing } = this.state;
      this.setState({ editing:!editing});
  }

  handleChange =(e) => {
      const {name,value} = e.target;
      this.setState({
          [name] :value
      });
  }

  

  componentDidUpdate(prevProps, prevState ){
      const { info, onUpdate} = this.props;
      if(!prevState.editing && this.state.editing){

        this.setState({
            name:info.name,
            phone:info.phone
        })
      }

      if(prevState.editing && !this.state.editing){
          onUpdate(info.id, {
              name: this.state.name,
              phone: this.state.phone
          });
      }
  }
  render() {
      console.log('render PhoneInfo '+this.props.info.id);
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };
    

    const {editing} = this.state;
    if(editing){
        return (
          <div style={style}>
            <div>
              <input
                value={this.state.name}
                name="name"
                placeholder="name"
                onChange={this.handleChange}
            />
            </div>
            <div>
                <input
                value={this.state.phone}
                name="phone"
                placeholder="phone"
                onChange={this.handleChange}
                />
            </div>
            <button onClick ={this.handleToggleEdit}>APPLY</button>
            <button onClick ={this.handleRemove}>DELETE</button>
            </div>
        );
    }

    const {
      name, phone
    } = this.props.info;
    
    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleToggleEdit}>MODIFY</button>
        <button onClick={this.handleRemove}>DELETE</button>
      </div>
    );
  }
}

export default PhoneInfo;