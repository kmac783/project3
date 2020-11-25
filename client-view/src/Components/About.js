import React from "react";

const About = () => {
  return (
    <div>
      <div class="about-header">
        <h3>About</h3>
      </div>
      <div class="about-container">
        <div class="about-main">
          <h5 class="column">
            Find Me is a platform for collecting news & research articles,
            books, and videos. People use Find Me to discover content, build
            collections, and grow their knowledge.
          </h5>
          {/* //##This is using MeetUp as an example */}
          <h4 class="column">Find Me helps you focus on what matters.</h4>
        </div>
        <div class="about-sections">
          <div class="column">
            <div class="col s12 m4">
              <div class="icon-block">
                <h4 class="center purple-text">
                  <i class="material-icons">
                    search {/* TODO Need to find new icon here */}
                  </i>
                </h4>
                <h5 class="center">Discover Content</h5>

                <p class="light">
                  Discover new content with a powerful search feature. Search
                  for articles by News and Research, Books by title and author,
                  and Videos by keyword
                </p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h4 class="center purple-text">
                  <i class="material-icons">build_circle</i>
                </h4>
                <h5 class="center">Build Collections</h5>

                <p class="light">
                  Organize content into collections for easy reference. Share
                  your collections with the world!
                </p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h4 class="center purple-text">
                  <i class="material-icons">share</i>
                </h4>
                <h5 class="center">Share & Explore</h5>

                <p class="light">
                  Explore content put together by other users to get ideas,
                  comment and collaborate, and improve your own collections
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
