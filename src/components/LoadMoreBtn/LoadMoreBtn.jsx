import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={css.btns} onClick={onLoadMore}>
      LoadMore...
    </button>
  );
};
