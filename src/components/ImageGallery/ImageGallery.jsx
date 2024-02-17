import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

export const ImageGallery = ({ items, handleClickImage }) => {
  return (
    <div>
      <ul className={css.list}>
        {items.map(item => {
          return (
            <li className={css.item} key={item.id}>
              <ImageCard items={item} onClick={handleClickImage} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
