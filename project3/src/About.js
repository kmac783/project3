import React from "react";

const About = () => {
  return (
    <div>
      <h1 class="header center">About</h1>
      <h2 class="row center">Find Me helps you focus on what matters.</h2>

<h3 class="row center">Find Me is a platform for collecting news & research articles, books, and videos. People use Find Me to discover content, build collections, and grow their knowledge.</h3> 
{/* //##This is using MeetUp as an example */}
<div class="row">
<div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">flash_on {/* TODO Need to find new icon here */}</i></h2>
            <h5 class="center">Discover Content</h5>

            <p class="light">Discover new content with a powerful search feature. Search for articles by News and Research, Books by title and author, and Videos by keyword</p>
          </div>
        </div>



        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">Build Collections</h5>

            <p class="light">Organize content into collections for easy reference. Share your collections with the world!</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
            <h5 class="center">Share & Explore</h5>

            <p class="light">Explore content put together by other users to get ideas, comment and collaborate, and improve your own collections</p>
          </div>
        </div>

        </div>
    </div>
  );
};

export default About;
