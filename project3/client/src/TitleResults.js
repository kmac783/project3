// import React, { useRef, useState, useContext, useEffect } from "react";
// import BooksContext from "./context/Books/BooksContext";
// import ArticlesContext from "./context/Articles/ArticlesContext";

// export const TitleResults = () => {
//   const booksContext = useContext(BooksContext);
//   const articlesContext = useContext(ArticlesContext);
//   const {
//     title_search,
//     getBooksByTitle,
//     getBooksByAuthor,
//     author_search,
//   } = booksContext;
//   const {
//     getResearchArticles,
//     newsArticles,
//     getNewsArticles,
//     researchArticles,
//   } = articlesContext;
//   return (
//     <div>
//       <p>Search Page</p>
//       {title_search ? (
//         title_search.map((item, index) => {
//           console.log(item.best_book);
//           return (
//             //TODO: Should we default to one radio button checked or make an error for if user runs search without a radio button checked?
//             <div id={index}>
//               <p>
//                 Title: {item.best_book[0].title}
//                 Author: {item.best_book[0].author[0].name}
//                 <img src={item.best_book[0].image_url} />
//               </p>
//             </div>
//           );
//         })
//       ) : (
//         <p>No Books</p>
//       )}
//     </div>
//   );
// };

// export default TitleResults;


// import React, { useContext } from "react";
// import BooksContext from "./context/Books/BooksContext";
// import CollectionsContext from "./context/Collections/CollectionsContext";
// import TitleResultItem from "./TitleResultItem"

// // import ResearchItem from "./ResearchItem";
// const TitleResults = (props) => {
//   const booksContext = useContext(BooksContext);

//   const { title_search, getBooksByTitle } = booksContext;

//   const collectionsContext = useContext(CollectionsContext);

//   const {
//     getSavedTitleResults,
//     savedTitleResults,
//     loading,
//   } = collectionsContext;
//   let filteredTitleResults =
//     title_search !== null
//       ? title_search.filter((indTitle) => {
//           return (
//             // article.authors &&
//             // article.description &&
//             // article.authors.length > 0 &&
//             // article.publisher &&
//             // article.fulltextUrls.length > 1 &&
//             // article.topics.length > 1
//             indTitle.best_book[0].title &&
//             indTitle.best_book[0].author[0].name &&
//             <img src={indTitle.best_book[0].image_url} />

//           );
//         })
//       : "";

//   const displayAll = title_search ? (
//     filteredTitleResults.map((indTitle, index) => {
//       return <TitleResultItem indTitle={indTitle} id={index} type={props.type} />;
//     })
//   ) : (
//     <p>No Books</p>
//   );

//   const displaySaved = savedTitleResults ? (
//     savedTitleResults.map((indTitle, index) => {
//       return (
//         <TitleResultItem
//           indTitle={indTitle.title_search}
//           id={index}
//           type={props.type}
//         />
//       );
//     })
//   ) : (
//     <p>No Saved Books</p>
//   );

//   return <div>{props.type === "all" ? displayAll : displaySaved}</div>;
// };

// export default TitleResults;



import React, { useContext } from "react";
import BooksContext from "./context/Books/BooksContext";

function TitleResults() {
  const booksContext = useContext(BooksContext);
  const { title_search } = booksContext;
  return (
    <div>
      <p>Search Results</p>
      <div class='news-container'>
        <div class='news-articles'>
          {title_search ? (
            title_search.map((item) => {
              return (
                <div class='col s12 m7'>
                  <h2 class='header'></h2>
                  <div class='card horizontal'>
                    <div class='card-image'>
                    <img src={item.best_book[0].image_url} />
                    </div>
                    <div class='card-stacked'>
                      <div class='card-content'>
                        <p>{item.best_book[0].title}</p>
                      </div>
                      <div class='card-action'>
                        {/* <a href={item.source.url}>
                          Link to {item.source.name}{" "}
                        </a> */}
                        {item.best_book[0].author[0].name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Articles</p>
          )}
        </div>
        <div class='video-articles'></div>
      </div>
    </div>
  );
}
export default TitleResults;
