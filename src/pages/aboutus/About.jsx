import React, { useContext } from "react";
import "./about.css";
import { img1, img5 } from "../../assets";
import { Context } from "../../context/Context";
const About = () => {
  const { user } = useContext(Context);
  return (
    <div className="aboutus">
      <div className="about">
        <br />
        <h1 style={{ fontFamily: "Josefin Sans" }}>
          Navigating Life's Palette: The SUDHARSHAN's Chronicles
        </h1>
        <br />
        <div className="container">
          <div className="leftContainer">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={img1} className="aboutImg" />
            </div>
          </div>
          <div className="rigthContainer">
            <br />
            <p>
              Hey there, lovely souls! I'm Sudharshan, the heart and soul behind
              this little corner of the internet where words dance and ideas
              come to life. I'm a 25-year-old MERN STACK Developer, navigating
              the beautiful chaos of life with a cup of coffee in one hand and a
              heart full of dreams in the other.
            </p>
            <br />
            <h2>🎨 A Palette of Passions:</h2>
            <p>
              Imagine a canvas splashed with colors, and you've just glimpsed
              the kaleidoscope of things that make my heart sing. From coding to
              travelling , I believe in embracing the full spectrum of life. By
              day, you'll find me as TechCraftsman, and by night, I transform
              into a Travel enthusiast, pouring my creativity into every
              project.
            </p>
            <br />
            <h2>🌍 Wanderlust-infected Nomad:</h2>
            <p>
              Born with a curious soul, I'm a firm believer in the magic that
              happens when you step outside your comfort zone. Whether it's
              exploring the hidden gems of my own city or jet-setting to far-off
              lands, my wanderlust knows no bounds. Join me on this adventure as
              we uncover the beauty of diverse cultures, one passport stamp at a
              time.
            </p>
            <br />
            <h2>✨ Musings and Reflections:</h2>
            <p>
              Life is a tapestry woven with threads of joy, challenges, and
              everything in between. In my blog, I share candid reflections on
              the lessons I've learned, the hurdles I've overcome, and the
              laughter that echoes through it all. Expect a mix of heartfelt
              anecdotes, soulful poetry, and practical tips for navigating the
              twists and turns of adulthood.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
