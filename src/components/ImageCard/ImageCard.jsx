import css from './ImageCard.module.css';

export const ImageCard = ({ items, onClick }) => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src={items.urls.small}
        alt={items.alt_description}
        onClick={() => onClick(items.urls.regular, items.alt_description)}
      />
      {}
    </div>
  );
};
