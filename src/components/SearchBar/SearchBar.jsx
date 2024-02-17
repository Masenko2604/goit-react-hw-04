import toast from 'react-hot-toast';

import css from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.search.value.trim();
    if (!value) {
      toast.error('Input, please your query');
      return;
    }
    onSubmit(value);
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.searchBar}
          name="search"
          type="text"
          placeholder="Search images and photos"
        />
        <button className={css.btns} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
