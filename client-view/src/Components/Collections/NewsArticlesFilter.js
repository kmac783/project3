import React, { useContext, useRef, useEffect } from "react";
import CollectionsContext from "../../context/Collections/CollectionsContext";
const NewsArticlesFilter = () => {
  const searchRef = useRef("");
  const collectionsContext = useContext(CollectionsContext);

  const {
    filteredSavedNewsArticles,
    filterSavedNewsArticles,
    clearFilteredNewsArticles,
  } = collectionsContext;

  useEffect(() => {
    if (filteredSavedNewsArticles === null) {
      searchRef.current.value = "";
    }
  });

  const onChange = (e) => {
    if (searchRef.current.value !== "") {
      filterSavedNewsArticles(e.target.value);
    } else {
      clearFilteredNewsArticles();
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
              placeholder='Filter News Articles...'
              onChange={onChange}
            ></textarea>

            <i
              class='material-icons prefix touch-click'
              onClick={() => {
                clearFilteredNewsArticles();
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

export default NewsArticlesFilter;
