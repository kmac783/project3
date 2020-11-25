import React, { useContext, useRef, useEffect } from "react";
import CollectionsContext from "../../context/Collections/CollectionsContext";
const ResearchArticlesFilter = () => {
  const searchRef = useRef("");
  const collectionsContext = useContext(CollectionsContext);

  const {
    filteredSavedResearchArticles,
    filterSavedResearchArticles,
    clearFilteredResearchArticles,
  } = collectionsContext;

  useEffect(() => {
    if (filteredSavedResearchArticles === null) {
      searchRef.current.value = "";
    }
  });

  const onChange = (e) => {
    if (searchRef.current.value !== "") {
      filterSavedResearchArticles(e.target.value);
    } else {
      clearFilteredResearchArticles();
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
              placeholder='Filter Research Articles...'
              onChange={onChange}
            ></textarea>

            <i
              class='material-icons prefix touch-click'
              onClick={() => {
                clearFilteredResearchArticles();
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

export default ResearchArticlesFilter;
