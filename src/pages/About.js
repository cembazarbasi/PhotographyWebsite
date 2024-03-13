import "./About.css";
import React from 'react'; 
export const About = () => {
  return (
    <div className="about-container mx-auto">
      <div className="row">
        <div className="container mb-4">
          <h2 className="header">About Me</h2>
          <a href="https://www.instagram.com/cembazarbasi/">
            <img
              className="insta-logo"
              src="instagram-logo.png"
              alt="instagram logo"
            />
          </a>
          <a href="mailto:cembazar@gmail.com">
            <img
              className="gmail-logo"
              src="gmail-logo.png"
              alt="gmail logo"
            />
          </a>
        </div>

        <p className="lh-sm">
          Welcome to my photography website! My name is Cem Bazarbasi and I am
          a passionate photographer based in the beautiful San Francisco Bay
          Area, but my journey started in Turkey, where I was born and raised.
        </p>
        <p className="lh-sm">
          My passion for photography began in 2011 when I got my first camera.
          I immediately became fascinated by the art of capturing moments and
          expressing emotions through images. I decided to delve deeper into the
          world of photography and focused on honing my skills in street
          photography.
        </p>
        <p className="lh-sm">
          In my photography journey, I have had the privilege of receiving
          recognition for my work. One significant achievement was winning the
          Orange Blossom Festival Photo Competition. It was a humbling
          experience to have my work recognized and celebrated.
        </p>
        <p className="lh-sm">
          I am passionate about sharing my experiences and photographs with the
          world, and I would truly appreciate your support. If you would like
          to contribute to my upcoming visiting journeys to national parks,
          your generous donations would go a long way in helping me continue
          capturing and publishing the beauty of nature.
        </p>
        <p className="lh-sm">
          Thank you for visiting my website, and I hope my photographs bring
          you joy and inspire you to see the world through a different lens.
        </p>
      </div>
      <div className="container mt-2 ps-0 ms-0">
        <div className="row">
          <div className="col">
            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_top"
            >
              <input type="hidden" name="business" value="SK66BWKUVDPHA" />
              <input type="hidden" name="no_recurring" value="0" />
              <input type="hidden" name="currency_code" value="USD" />
              <input
                type="image"
                className="img-fluid"
                name="submit"
                src="paypal-donate.png"
                alt="Donate"
              /> 
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
