import React, { useContext, useRef, useEffect } from "react";
import CollectionsContext from "../../context/Collections/CollectionsContext";
const BooksFilter = () => {
  const searchRef = useRef("");
  const collectionsContext = useContext(CollectionsContext);

  const {
    filteredSavedBooks,
    clearFilteredBooks,
    filterSavedBooks,
  } = collectionsContext;

  useEffect(() => {
    if (filteredSavedBooks === null) {
      searchRef.current.value = "";
    }
  });

  const onChange = (e) => {
    if (searchRef.current.value !== "") {
      filterSavedBooks(e.target.value);
    } else {
      clearFilteredBooks();
    }
  };
  return (
    <div class='row'>
      <form class='col s12'>
        <div class='row'>
          <div class='input-field col s12'>
            <i class='material-icons prefix'>search</i>
            <textarea
              id='icon_prefix2'
              ref={searchRef}
              class='materialize-textarea'
              placeholder='Filter Books...'
              onChange={onChange}
            ></textarea>

            <i
              class='material-icons prefix touch-click'
              onClick={() => {
                clearFilteredBooks();
              }}
            >
              close
            </i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BooksFilter;
