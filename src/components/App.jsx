import { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { Modal } from './Modal/Modal';
import * as Fetch from '../fetch';

const PER_PAGE = 12;

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    if (!query || !page) {
      return;
    }

    getImages(query.split('/')[1], page);
  }, [query, page]);

  const getImages = (query, page) => {
    setIsLoading(true);
    setError(null);

    Fetch.getImages(query, page)
      .then(response => {
        const { hits, totalHits } = response;

        if (!hits.length) {
          setIsEmpty(true);
          setIsShowBtn(false);
          return;
        }
        setImages(prevState => [...prevState, ...hits]);
        setIsShowBtn(1 < Math.ceil(totalHits / PER_PAGE));
      })
      .catch(error =>
        setError('Oops! Something went wrong! Try reloading the page!')
      )
      .finally(() => setIsLoading(false));
  };

  const onSearchSubmit = value => {
    setQuery(`${Date.now()}/${value}`);
    setImages([]);
    setPage(1);
    setIsLoading(false);
    setIsShowBtn(false);
    setIsEmpty(false);
    setShowModal(false);
    setError(null);
    setModalImage('');
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onImgClick = evt => {
    setShowModal(true);
    setModalImage(evt.target.dataset.bigimg);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <main>
      <Searchbar onSubmit={onSearchSubmit} />
      <ImageGallery images={images} onImgClick={onImgClick} />
      {isEmpty && <p>Sorry. There are no images... </p>}

      {isLoading && <Loader></Loader>}
      {isShowBtn && (
        <Button type="button" onClick={onLoadMore}>
          Load more
        </Button>
      )}
      {showModal && (
        <Modal onClose={onCloseModal} bigImage={modalImage}></Modal>
      )}
      {error && <p>{error}</p>}
    </main>
  );
}
/*
export class App extends Component {
  state = {
    inputValue: '',
    modalImg: '',
    showModal: false,
    page: 1,
  };

  getInputValue = handleValue => {
    this.setState({ inputValue: handleValue, page: 1 });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
`
  getLargeImg = url => {
    this.toggleModal();
    this.setState({ modalImg: url });
  };

  loadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { modalImg, showModal, page } = this.state;

    return (
      <main>
        <Searchbar getInputValue={this.getInputValue} />
        <ImageGallery
          inputValue={this.state.inputValue}
          onClick={this.getLargeImg}
          loadMoreBtn={this.loadMoreBtn}
          page={page}
        />
        {showModal && <Modal url={modalImg} onClose={this.toggleModal} />}
      </main>
    );
  }
}

export default App;
*/
