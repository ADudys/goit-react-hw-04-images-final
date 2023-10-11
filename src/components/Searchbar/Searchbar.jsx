import { Component } from 'react';
import css from './Searchbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    input: '',
  };

  search = e => {
    e.preventDefault();
    this.props.getInputValue(this.state.input);
    this.setState({ input: '' });
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.search}>
          <button type="submit" className={css.form__btn}>
            <AiOutlineSearch
              className={css.form__label}
              size={20}
              color="black"
            />
          </button>

          <input
            name="input"
            type="text"
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.input}
            autoFocus
            placeholder="Search images and photos"
            className={css.form__input}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  getInputValue: PropTypes.func.isRequired,
};
