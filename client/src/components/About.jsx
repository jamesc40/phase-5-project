import Navbar from "./Navbar";
import "./About.css";
import Slider from "react-slick";
import Footer from "./Footer";

export default function Home({ isLoggedin, dispatch }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const pictures = [
    "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1642883/pexels-photo-1642883.jpeg?auto=compress&cs=tinysrgb&w=1600ttps://unsplash.com/photos/p0vZplFhKYI",
    "https://images.pexels.com/photos/2562501/pexels-photo-2562501.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3727658/pexels-photo-3727658.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <>
      <div className="is-family-code">
        <section className="section">
          <h1 className="title is-1">Welcome to We'reTwo</h1>
          {/*<Navbar isLoggedin={isLoggedin} dispatch={dispatch} />*/}

          {/*<div className="about-title-container"></div>*/}
          <Slider {...settings}>
            {pictures?.map((picture, i) => (
              <div key={i}>
                <figure>
                  <img src={picture} />
                </figure>
              </div>
            ))}
          </Slider>
        </section>
        <section className="section">
          {/*<div className="columns is-centered is-vcentered">*/}
          {/*<div className="column is-narrow">*/}
          {/*<figure>*/}
          {/*<img src="../../weretwoabout.png" />*/}
          {/*</figure>*/}
          {/*</div>*/}

          <div className="content">
            <h5>
              Here at We'reTwo our mission is to help couples find dates so they
              can spend less time planning and more time with their partner.
            </h5>
          </div>

          <figure className="has-text-centered">
            <img src="../../weretwoabout.png" />
          </figure>
        </section>
      </div>
      <Footer />
    </>
  );
}
