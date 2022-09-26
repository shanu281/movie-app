import React from 'react';
import './style.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1 className="header">
        MOVIE APP
      </h1>
    )
  }
}

export default Header;