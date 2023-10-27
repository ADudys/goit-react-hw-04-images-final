import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#image-modal');

export function Modal({ alt, bigImage, onClose }) {
  useEffect(() => {
    const onEscapeCloseHandle = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscapeCloseHandle);

    return () => {
      window.removeEventListener('keydown', onEscapeCloseHandle);
    };
  }, [onClose]);

  const onBackdropCLick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    (
      <div className={css.overlay} onClick={onBackdropCLick}>
        <div className={css.modal}>
          <img className={css.modal__img} src={bigImage} alt="" />
        </div>
      </div>
    ),
    modalRoot
  );
}

PropTypes.Modal = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

// const modalRoot = document.querySelector('#image-modal');

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onEscapeCloseHandle);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onEscapeCloseHandle);
//   }

//   onBackdropCLick = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   onEscapeCloseHandle = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { alt } = this.props;

//     return createPortal(
//       <Overlay onClick={this.onBackdropCLick}>
//         <ModalWindow>
//           <img src={this.props.bigImage} alt={alt} />
//         </ModalWindow>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }

/*
export default class Modal extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.clickEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickEsc);
  }

  clickBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  clickEsc = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.clickBackdrop}>
        <div className={css.modal}>
          <img className={css.modal__img} src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}
*/
