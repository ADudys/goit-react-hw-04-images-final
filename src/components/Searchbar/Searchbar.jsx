import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Searchbar.module.css';
import Notiflix from 'notiflix';
import { notifySettings } from 'fetch';

export class Searchbar extends Component {
  state = {
    query: '',
  };
  onInputChange = event => {
    const query = event.currentTarget.value;
    this.setState({ query: query });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      return Notiflix.Notify.warning('Please enter key words', notifySettings);
    }
    this.props.onSubmit(this.state);
    this.setState({ query: '' });
  };
  render() {
    return (
      <section>
        <header className={css.searchbar__header}>
          <form className={css.searchbar__form}>
            <button type="submit" className={css.searchbar__btn}>
              <span className={css.searchbar__label}>Search</span>
            </button>
            <input
              className={css.searchbar__input}
              value={this.state.query}
              name="query"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.onInputChange}
              required
            />
          </form>
        </header>
      </section>
    );
  }
}
