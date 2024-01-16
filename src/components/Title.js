import React, { Component } from 'react';
import { ThemeContext } from './context/ThemeContexts';

class Title extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;
    const { name, title } = this.props;

    return (
      <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
          <h1
            className={
              theme
                ? 'text-capitalize font-weight-bold text-light'
                : 'text-capitalize font-weight-bold text-dark'
            }
          >
            {name}{' '}
            <strong
              className={
                theme ? 'text-primary' : 'text-blue'
              }
            >
              {title}
            </strong>
          </h1>
        </div>
      </div>
    );
  }
}

export default Title;
