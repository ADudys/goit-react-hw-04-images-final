import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';


export const ImageGallery = ({ images, onImgClick }) => {
  return (
    <ul onClick={onImgClick} className={css.gallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            onImgClick={onImgClick}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            key={id}
          />
        );
      })}
    </ul>
  );
};

PropTypes.ImageGallery = {
  onImgClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webFormatUrl: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ),
};

/*
export default class ImageGallery extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
  };

  state = {
    images: [],
    status: 'idle',
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
          {this.state.images.length !== 0 ? (
            <Button onClick={this.props.loadMoreBtn} />
          ) : (
            alert('No results')
          )}
        </>
      );
    }
  }
}
*/
