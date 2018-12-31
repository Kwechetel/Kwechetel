import React, { Component } from 'react';
import Trianglify from 'trianglify';

const pattern = Trianglify({
  width: window.innerWidth,
  height: window.innerHeight,
  cell_size: 60
});

class Pattern extends Component {

  componentDidMount() {
    document.querySelector('.pattern').appendChild(pattern.canvas());
  }

  render() {
    return (
        <div className="pattern" style={{height: `${100} ${'%'}`}}></div>
    );
  }
}

export default Pattern;