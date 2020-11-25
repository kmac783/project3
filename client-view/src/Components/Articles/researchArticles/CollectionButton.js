import React, { useContext, useRef } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import M from "materialize-css/dist/js/materialize.min.js";
import AuthContext from "../../../context/Auth/AuthContext";
import CollectionsContext from "../../../context/Collections/CollectionsContext";
import { useEffect } from "react";

export default function CollectionButton(props) {
  const authContext = useContext(AuthContext);
  const collectionsContext = useContext(CollectionsContext);

  const { isAuthenticated } = authContext;
  const {
    addResearchArticle,
    addNewsArticle,
    addBook,
    error,
  } = collectionsContext;
  const [anchorEl, setAnchorEl] = React.useState(null);

  var toastHTML = `<span>You must be logged in to save</span>`;

  const handleClick = (event) => {
    if (!isAuthenticated) {
      M.toast({ html: toastHTML });
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const articleToSave = {
    article: props.article,
  };

  const bookToSave = props.book && { bookItem: props.book };
  const saveTo = (e) => {
    setAnchorEl(null);
    if (props.type === "Research Articles") {
      addResearchArticle(articleToSave);
    } else if (props.type === "News Articles") {
      // console.log(articleToSave);
      addNewsArticle(articleToSave);
    } else if (props.type === "Books") {
      //console.log(bookToSave.bookItem.items);
      addBook(bookToSave.bookItem);
    }
  };

  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
        id='open'
      >
        <a class='btn-floating btn-small waves-effect waves-light grey'>
          <i class='material-icons'>add</i>
        </a>
      </Button>
      <div id='modal1' class='modal'>
        <div class='modal-content'>
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class='modal-footer'>
          <a href='#!' class='modal-close waves-effect waves-green btn-flat'>
            Agree
          </a>
        </div>
      </div>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={(e) => {
            saveTo(e);
          }}
        >{`${props.type} Collection`}</MenuItem>

        <MenuItem onClick={handleClose}> Create New Collection</MenuItem>
      </Menu>
    </div>
  );
}
