import React from "react";
import "../components/GeneralPageCss.css";
import { useSelector } from "react-redux";
import "../components/Home.css";

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
      <div>
        <h2>My UI Project - HackerU</h2>
        <p>
          In the course we learned several programming languages - Html , Css ,
          JavaScript.
          <br /> We had to choose a topic for the project and apply everything
          we learned in the project.
          <br /> This project was important because it made me understand
          everything we have learned so far and it helped me to know how
          everything fits together.
          <br /> I hope I implemented things in the best way, and my investment
          is reflected.
        </p>
      </div>
      <div>
        <h2>About My Project</h2>
        <p>
          The topic I chose is a movie site.
          <br /> In my project I used in Html , Css , JavaScript and ReactJs (
          library of JavaScript ) , out API and I built on it Slice , in the
          Slice I created functions that editing and changing the API.
          <br />
          The site is responsive ( from 700px to up ).
        </p>
      </div>
      <div>
        <h4>Explanation on the header</h4>
        <p> My header is divided into 3</p>
        <h5>Site logo</h5>
        <p>
          logo of my website and if you click on it , it takes you to the home
          page.
        </p>
        <h5>Nav bar</h5>
        <p> The nav bar is responsible for site navigation.</p>
        <h5>Dark mode button</h5>
        <p>
          A button that changes the design of the site between dark mode and
          normal mode , by Slice function.
        </p>
      </div>
      <div>
        <h4>Explanation on the footer</h4>
        <p>My footer has 5 buttons that take the user to my social profiles.</p>
      </div>
      <div>
        <h4>Explanation on the pages</h4>
        <h5>Home</h5>
        <p> This page , It has an explanation of the project.</p>
        <h5>Movies</h5>
        <p>
          At the first click of the button it is a simple page , but it has
          several options , the first option is choose category ( when you click
          on a category , it goes into the API to sort according to it ) , and
          the second option is when you are on the page you have a kind of text
          field where you can search for movies ( the API receives a query and
          searches according to it ) , In addition to that there are two more
          buttons next to the text field that sort the movies by rating and from
          A to Z. <br />
          On the movies page , have a cards of movies are displayed and each
          card has 3 buttons , "heart" adds to favorites , "read more" navigates
          to the details page and "trash" delete the movie.
        </p>
        <h5>Details Page</h5>
        <p> Shows the details about the movie you selected.</p>
        <h5>Favorites</h5>
        <p>
          The favorites page shows cards of the movies you added to favorites ,
          that you clicked on the "heart" icon.
        </p>
        <h5>About</h5>
        <p>
          In the about page you can see the information and details about me.
        </p>
        <h5>Comments</h5>
        <p>
          The comments page displays Slice of comments that i built and the user
          has the option to add comment to the Slice.
        </p>
      </div>
    </div>
  );
};

export default Home;
