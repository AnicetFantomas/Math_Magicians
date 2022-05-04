import React from 'react';
import './home.css';
import Navigation from '../Navigations/Navigation';

const Home = () => (
  <div>
    <Navigation />
    <div className="home-container">
      <h2>Welcome to our page !</h2>
      <p>
        The math magician web app is a simple
        react app with a simple calculator and a
        navigation bar that help to start with React.
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Fuga nemo veritatis optio. Fuga voluptatibus,
        dolorem error quo aspernatur repudiandae natus unde deleniti voluptate,
        mollitia quibusdam illo inventore nisi dolor maxime.
        Aperiam natus exercitationem illum! Maiores exercitationem fuga molestiae,
        rerum dignissimos incidunt inventore corrupti laboriosam qui totam reiciendis
        accusamus vel ea aliquid odio nostrum tenetur, corporis perspiciatis cum,
        et quae aspernatur?
        Suscipit placeat repudiandae nostrum, nulla ea natus nesciunt iste, perspiciatis repellat,
        totam eveniet.
      </p>
    </div>
  </div>
);

export default Home;
