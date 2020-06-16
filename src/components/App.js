import React from "react";
import Userprofile from "./Userprofile";
import "../style.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["anupamroy8", "titarakshay", "sanjibroy360"],
      userInfo: null,
      userIndex: 0,
    };
  }

  componentDidMount() {
    console.log("didMount");
    fetch("https://api.github.com/users/anupamroy8")
      .then((res) => res.json())
      .then((userInfo) => this.setState({ userInfo }))
      .catch(err => console.log(err));
  }

  handleClick(index) {
      console.log("clicked",index);
      this.setState({userIndex: index});
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.userIndex !== this.state.userIndex){
        fetch(`https://api.github.com/users/${this.state.users[this.state.userIndex]}`)
        .then((res) => res.json())
        .then((userInfo) => this.setState({ userInfo }))
        .catch(err => console.log(err));
    } 
  }

  render() {
    return (
      <>
        {this.state.users.map((data, index)=>
        <button onClick={() => this.handleClick(index)}>{data}</button>
        )}
        {this.state.userInfo
        ? (<Userprofile details={this.state.userInfo}/>)
        : <h2>...Loading</h2>}
      </>
    );
  }
}

export default App;
