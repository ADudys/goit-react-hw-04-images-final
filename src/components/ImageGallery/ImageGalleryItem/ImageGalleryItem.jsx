import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  return (
    <li className={css.item}>
      <img
        src={webformatURL}
        alt={tags}
        data-bigimg={largeImageURL}
        loading="lazy"
        className={css.item__img}
      />
    </li>
  );
};

export default ImageGalleryItem;

PropTypes.ImageGalleryItem = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

/*
export default function ImageGalleryItem({ url, tags, onClick }) {
  return (
    <>
      <li className={css.item}>
        <img src={url} alt={tags} className={css.item__img} onClick={() => onClick(url)} />
      </li>
    </>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};*/
