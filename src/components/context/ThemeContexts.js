import React, { createContext, Component } from 'react';

const ThemeContext = createContext();

class ThemeProvider extends Component {
  state = {
    theme: false,
  };

  toggleTheme = () => {
    this.setState((prevState) => ({ theme: !prevState.theme }));
  };

  render() {
    return (
      <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer, ThemeContext };
