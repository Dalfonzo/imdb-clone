import React from 'react';
import './test2.scss';
import E2 from './e2';

class test2 extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      position: 0
    };
  }

  adelante = () => {
    const gap = 100 / this.state.data.length;

    this.setState(prvState => ({
      position: prvState.position - gap
    }));
  };

  atras = () => {
    const gap = 100 / this.state.data.length;

    this.setState(prvState => ({
      position: prvState.position + gap
    }));
  };

  componentDidMount() {
    setInterval(this.adelante, 4000);
  }

  componentDidUpdate() {
    if (
      Math.round(this.state.position) <
      Math.round(100 / this.state.data.length - 100)
    ) {
      this.setState({
        position: 0
      });
    }
  }

  render() {
    const final = 100 / this.state.data.length - 100;

    return (
      <>
        <div className="container1">
          <div
            className="container2"
            style={{ transform: `translateX(${this.state.position}%)` }}
          >
            {this.state.data.map(d => (
              <E2 num={d} />
            ))}
          </div>
        </div>

        <button
          onClick={this.atras}
          disabled={Math.round(this.state.position) === 0}
        >
          Atras
        </button>
        <button
          onClick={this.adelante}
          disabled={Math.round(this.state.position) === Math.round(final)} //aqui
        >
          Adelante
        </button>
      </>
    );
  }
}

export default test2;
