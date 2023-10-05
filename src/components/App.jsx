import { Component } from 'react';
import { fetchData, notifySettings } from '../fetch';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
      </>
    );
  }
}
