import { useState } from 'react';
import css from './Searchbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setValue(target.value.toLowerCase());
  };

  const onFormSubmit = event => {
    event.preventDefault();

    if (value.trim() === '') {
      return alert('Please enter key words for search', {});
    }

    onSubmit(value);
    setValue('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={onFormSubmit} className={css.form}>
        <button type="submit" className={css.form__btn}>
          <AiOutlineSearch
            className={css.form__label}
            size={20}
            color="black"
          />
        </button>

        <input
          value={value}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          name="search"
          className={css.form__input}
          autoFocus
        />
      </form>
    </header>
  );
}

PropTypes.Searchbar = {
  onSubmit: PropTypes.func.isRequired,
};

/*
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
           
              <AiOutlineSearch className={css.form__label} size={20} color="black" />
        
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
*/
