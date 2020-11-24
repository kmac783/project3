import React, { useContext, useRef } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import M from "materialize-css/dist/js/materialize.min.js";
import AuthContext from "../../../context/Auth/AuthContext";
import CollectionsContext from "../../../context/Collections/CollectionsContext";

export default function SimpleMenu(props) {
  const authContext = useContext(AuthContext);
  const collectionsContext = useContext(CollectionsContext);

  const { isAuthenticated } = authContext;
  const { addResearchArticle } = collectionsContext;
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

  const saveTo = () => {
    setAnchorEl(null);
    if (props.type === "Research Articles") {
      addResearchArticle(articleToSave);
    } else if (props.type === "News Articles") {
      console.log("saved news");
    } else if (props.type === "Books") {
      console.log("saved books");
    }

    if (
      document.querySelectorAll(".btn-floating")[props.id].children[0]
        .innerHTML === "add"
    ) {
      console.log("yes");
      document.querySelectorAll(".btn-floating")[
        props.id
      ].children[0].innerHTML = "check";
    }
  };

  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <a class='btn-floating btn-small waves-effect waves-light grey'>
          <i class='material-icons'>add</i>
        </a>
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={saveTo}>{`${props.type} Collection`}</MenuItem>

        <MenuItem onClick={handleClose}>Create New Collection</MenuItem>
      </Menu>
    </div>
  );
}
