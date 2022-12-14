import React from "react";
import "../components/GeneralPageCss.css";
import { useSelector } from "react-redux";
import "../components/Home.css";
import Accordion from "react-bootstrap/Accordion";

const Home = () => {
  const darkToggle = useSelector((state) => state.theme);

  return (
    <div
      className={
        darkToggle.darkTheme
          ? "container home-page-dark"
          : "container home-page"
      }
    >
      <div className={darkToggle.darkTheme ? "div1-dark" : "div1"}>
        <div className=" w-25 div-info">
          <p>Name : Snir Agi</p>
          <p>ID : 212620116</p>
          <p>Email : sniragi123@gmail.com </p>
          <p>Course number : D110422ER </p>
        </div>
        <h2 className=" w-50">My UI Project - HackerU</h2>
        <span className=" w-25"></span>
      </div>
      <div className="div2">
        <h2>About My Project</h2>
        <p>
          In the course we were asked to make a summary project of all the study
          material we learned on the client side (UI) and in it to use all the
          programming languages, language libraries and techniques we had
          accumulated. <br /> We were asked to choose a topic, and use the topic
          for the benefit of building the project that applies the studied
          material. <br />
          The topic I chose is a movie site and it will be my final client side
          (UI) project. <br /> This site will have several options, among them
          "automatic" updating of movies through an external API, filtering by
          categories, filtering by search line and sorting the movies from A to
          Z and ratings from high to low. <br /> The site is responsive to a
          variety of device sizes. <br /> The site contains routed pages, and in
          addition contains 2 layers of depth. <br /> This project uses Html,
          Css, JavaScript and React , And the design part in Grid and Flex in
          different places on the website. <br />
          So far this has been a short and quick explanation of my project, from
          here you will get a detailed explanation of each and every part of the
          site in order to show what we have done and explain it in the best
          possible way.
        </p>
      </div>
      <div className={darkToggle.darkTheme ? "div3-dark" : "div3"}>
        <h2>Explanation on the header</h2>
        <p> My header is divided into 3 parts</p>
        <div className="div3-div-cards">
          <div className="div3-card">
            <div className="up-card">Site logo</div>
            <div className="down-card">
              this part is design only, clicking on it will take you to the home
              page (this page).
            </div>
          </div>
          <div className="div3-card">
            <div className="up-card">Nav bar</div>
            <div className="down-card">
              this part is responsible for the routed pages (Routes), user
              navigation on the site.
            </div>
          </div>
          <div className="div3-card">
            <div className="up-card">Dark mode button</div>
            <div className="down-card">
              a button that is responsible for the visibility of the site,
              replaces the design by a Slice function that changes the state and
              thus the design of the site changes from light to dark.
            </div>
          </div>
        </div>
      </div>
      <div className="div4">
        <h2>Explanation on the footer</h2>
        <p>
          This part is designed at the most basic level, where there are icons
          that by clicking on them, the user will navigate to my personal
          profiles on the selected social media.
        </p>
      </div>
      <div className={darkToggle.darkTheme ? "div5-dark" : "div5"}>
        <h2>Explanation on the pages</h2>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Home</Accordion.Header>
            <Accordion.Body>
              This page , contains the details about my project
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Movies</Accordion.Header>
            <Accordion.Body>
              <div>
                This is the main part of the site, where updated movies are
                shown through an external API that I introduced to Slice and
                with which I can control the set of movies I receive. <br />
                This slice is connected to the website by the Store which is
                connected to the index.js file. <br />
                My control is reflected in the fact that the user can enter the
                movies page but in addition he has control over the movie
                category which I receive and with this every time the user
                changes a category the category is passed to me as a parameter
                and it is in UseState which updates the API and thus the movies
                are returned to the user filtered according to the selected
                category. <br />
                In addition, I built a function that the user sees as a text
                field and there he can search, he gives a word/letter, I receive
                the same text by pressing the search button and the text that
                the user entered I receive and place as a parameter in Slice
                that enters the URL that I received through the API and thus the
                array of movies is filtered according to the same text that I
                received from the user . <br /> The other 2 functions found on
                this page are the sorting options that I give the user, next to
                the text field there are 2 icons whose function is to sort the
                movies, this is done using the Slice, the Slice has fixed
                Reducers that at the click of a button activate a function that
                I set, the user has the options to sort movies from A- Z and
                sort by the rating of the movie (from highest to lowest). <br />
                On this page the user receives the movies as tabs and has 3
                buttons under each tab, <br /> 1. A "heart" button that adds the
                same movie to the Favorites page by activating the Reducer found
                in Slice, the Reducer puts the same movie into an array of
                favorite movies that I defined that is displayed on the
                Favorites page. <br /> 2. The Read More button, which the user
                clicks on, navigates to the inner layer of that movie where
                details about that movie are found. <br /> This navigation is
                done by the fact that when the user clicks the button, he
                navigates to the internal layer which receives the same movie
                according to its ID as a parameter and maps the details of that
                movie using a built-in function. <br /> 3. The "trash" button
                that when clicked activates the reducer I built which is in
                Slice and removes the same movie according to its ID from the
                array shown to the user and thus the user "deletes" that movie.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Details Page</Accordion.Header>
            <Accordion.Body>
              Shows the details about the movie you selected. <br />
              The user reaches this page by clicking on the "read more" button
              on the card of a movie.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Favorite</Accordion.Header>
            <Accordion.Body>
              This page contains and displays the movies that the user has
              chosen as favorites, this page receives from Slice the array of
              movies that have entered the Favorite array and displays this
              array, when the page detects that there are no movies in the
              array, it navigates the user to the Movies page to select movies
              to be displayed.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>About</Accordion.Header>
            <Accordion.Body>
              This page shows my personal information, CV.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Comments</Accordion.Header>
            <Accordion.Body>
              This page displays user comments, On this page the user sees
              previous comments and has the option to add his own comment using
              a defined tab. <br /> The comments that the user sees are comments
              from Slice designed and mapped to display them to the user. <br />
              When the user enters a comment and clicks the add button, this
              comment enters the array by Reducer and is displayed in addition
              to the previous array.
              <br />
              In addition to this, the user has the ability to edit a comment,
              this is done by pressing a button that looks like a pencil and
              there he will replace the new comment with the comment that is in
              the array.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="div6">
        <h2>Summary</h2>
        <p>
          So far was the explanation about my website, I hope that my investment
          and learning were reflected in this project and I answered all its
          requirements. <br /> This project is important in several respects,
          this project helped me connect and understand the studied material
          because during the learning we learn by subjects and each subject
          separately and when you build such a project that contains all the
          subjects studied I feel that everything connects together and is
          understood at the highest level.
        </p>
      </div>
    </div>
  );
};

export default Home;
