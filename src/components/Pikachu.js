import React from "react";

class Pikachu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 100
    };
  }

  resizePikachu = () => {
    const pikachu = document.getElementById("pikachu");
    pikachu.height = this.state.size;
    pikachu.width = this.state.size;
  };

  makeBigger = () => {
    this.setState(
      {
        size: this.state.size + 10
      },
      this.resizePikachu()
    );
  };

  makeSmaller = () => {
    this.setState(
      {
        size: this.state.size - 10
      },
      this.resizePikachu()
    );
  };

  componentDidUpdate(prevState) {
    if (prevState.size > this.state.size) {
      this.makeSmaller();
    } else if (prevState.size < this.state.size) {
      this.makeBigger();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.makeBigger}>Bigger!</button>
        <button onClick={this.makeSmaller}>Smaller!</button>
      </div>
    );
  }
}

export default Pikachu;
