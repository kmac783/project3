import React, { useEffect, useContext } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import CollectionsContext from "../context/Collections/CollectionsContext";
import ResearchArticles from "./Articles/researchArticles/ResearchArticles";
import Spinner from "../Components/Spinner";

const Collections = () => {
  const collectionsContext = useContext(CollectionsContext);

  const {
    getSavedResearchArticles,
    savedResearchArticles,
    loading,
  } = collectionsContext;
  useEffect(() => {
    var elems = document.querySelectorAll(".tabs");
    var instance = M.Tabs.init(elems);
  }, []);

  useEffect(() => {
    getSavedResearchArticles();
  }, []);

  console.log(savedResearchArticles);
  return (
    <div>
      <h5>My Collection</h5>
      <div className='row container'>
        <div className='col s12'>
          <ul className='tabs  blue-grey lighten-4 z-depth-3'>
            <li className='tab col s3'>
              <a href='#test1' className='active'>
                Books
              </a>
            </li>
            <li className='tab col s3'>
              <a href='#test2'>News Articles</a>
            </li>
            <li className='tab col s3'>
              <a href='#test3'>Research Articles</a>
            </li>
          </ul>
        </div>
        <div id='test1' className='col s12 test1'>
          Book List
        </div>
        <div id='test2' className='col s12'>
          Saved News Articles
        </div>
        <div id='test3' className='col s12'>
          {loading && <Spinner />}
          {!loading && savedResearchArticles && (
            <ResearchArticles type='saved' />
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;
