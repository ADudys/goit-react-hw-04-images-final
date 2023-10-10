import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import getImages from 'fetch';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';

export default class ImageGallery extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
  };

  state = {
    images: [],
    status: 'idle',
    totalHits: 0,
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.inputValue !== this.props.inputValue) {
      this.handleLoad();
      this.setState({ status: 'loading' });
    }
    if (prevProps.page !== this.props.page && this.props.page > 1) {
      this.handleLoadMore();
    }
  }

  handleLoad = () => {
    const { inputValue, page } = this.props;

    getImages(inputValue, page)
      .then(response => {
        this.setState({
          images: response.hits,
          status: 'resolve',
          totalHits: response.totalHits,
        });
      })
      .catch(error => this.setState({ status: 'error' }));
  };

  handleLoadMore = () => {
    const { inputValue, page } = this.props;

    getImages(inputValue, page)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          status: 'resolve',
        }));
      })
      .catch(error => this.setState({ status: 'error' }));
  };

  render() {
    const { images, status } = this.state;

    if (status === 'loading') {
      return <Loader />;
    }

    if (status === 'resolve') {
      return (
        <>
          <ul className={css.gallery}>
            {images.map(({ id, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                url={largeImageURL}
                tags={tags}
                onClick={this.props.onClick}
              />
            ))}
          </ul>
          {this.state.images.length < this.state.totalHits && (
            <Button onClick={this.props.loadMoreBtn} />
          )}
          {this.state.images.length === 0 && (
            <p>Sorry, there are no matching images...</p>
          )}
        </>
      );
    }
  }
}
