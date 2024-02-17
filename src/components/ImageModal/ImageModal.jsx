import ReactModal from 'react-modal';
import css from './ImageModal.module.css';

export const ImageModal = ({ src, closetModal, value }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <div>
      <ReactModal
        isOpen={value}
        contentLabel="onRequestClose Example"
        onRequestClose={closetModal}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <div className={css.container}>
          <img className={css.image} src={src} />
          <button type="button" className={css.button} onClick={closetModal}>
            Close Modal
          </button>
        </div>
      </ReactModal>
    </div>
   
  );
};