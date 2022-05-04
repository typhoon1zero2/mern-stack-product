import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function productCarousel() {
    return (
        <div>
          {/* <h1>Welcome To <em>ty</em>Phoong Online Store</h1> */}
          <br />
          <Carousel
            showThumbs={true}
            showStatus={false}
            infiniteLoop
            emulateTouch
            autoPlay
            useKeyboardArrows
            transitionTime={1000}
            //axis="vertical"
            //selectedItem={1}
           // width="700px"

          >
               <div className="slide-holder">
              <img
                alt="Liam Sticker"
                src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651589927/test/j9cxdisnsbvmmuxlfxiw.jpg"
              />
              <div className="text-container">
                <h2>Spider-Man</h2>
                <p>
                    Liam Super Hero
                </p>
              </div>
            </div>
            <div className="slide-holder">
              <img
                alt="MacBook Pro"
                src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651697399/test/ribg24eljrlrxs33xslj.png"
              />
              <div className="text-container">
                <h2>MacBook Pro</h2>
                <p>
                    Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and machine learning performance
                </p>
              </div>
            </div>
            <div className="slide-holder">
              <img
                alt="KID GUCCI SHIRT"
                src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651697821/test/etr0g3efafmjk6hqugfr.png"
              />
              <div className="text-container">
                <h2>KID GUCCI SHIRT</h2>
                <p>
                    Gucci Shirt for kids
                </p>
              </div>
            </div>
            <div className="slide-holder">
              <img
                alt=""
                src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651697727/test/weezxyuw8gnhhnsyhkzh.png"
              />
              <div className="text-container">
                <h2>freak 3 se</h2>
                <p>
                Your little baller can dream about playing like their favorite star with the Freak 3.
                </p>
              </div>
            </div>
            <div className="slide-holder">
              <img
                alt=""
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/3d901888-7ba2-45e8-91a6-5ceeed77a0e9/boston-celtics-statement-edition-jordan-dri-fit-adv-nba-authentic-jersey-sfNVW5.png"
              />
              <div className="text-container">
                <h2>GUCCI SHIRT</h2>
                <p>
                  The Boston Celtics Statement Edition sets the tone for big games and rivalries, when players want to make a bold impression.
                </p>
              </div>
            </div>
            <div className="slide-holder">
              <img
                alt="ONTHEGO MM"
                src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651697055/test/zbkyiqkgn7a11w18h2ns.png"
              />
              <div className="text-container">
                <h2>ONTHEGO MM</h2>
                <p>
                The OnTheGo tote bag is made from Monogram Empreinte cowhide leather, featuring the Monogram pattern on different-colored leathers. The classic Monogram motif is first embossed, then printed on the leather. This is a roomy bag and can easily fit a laptop. Its two sets of handles, short and long, give carry options.
                </p>
              </div>
            </div>
            <div className="slide-holder">
              <img
                alt="Yeezy 350"
                src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651696401/test/kmopxyyvlqtham0gzis0.png"
              />
              <div className="text-container">
                <h2>Yeezy 350</h2>
                <p>
                The OnTheGo tote bag is made from Monogram Empreinte cowhide leather, featuring the Monogram pattern on different-colored leathers. The classic Monogram motif is first embossed, then printed on the leather. This is a roomy bag and can easily fit a laptop. Its two sets of handles, short and long, give carry options.
                </p>
              </div>
            </div>
            <div className="slide-holder">
              <img
                alt="Rolex"
                src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651701833/test/jsgejekypi755inssrqe.png"
              />
              <div className="text-container">
                <h2>Rolex GMT I</h2>
                <p>
                Designed to show the time in two different time zones simultaneously, the GMT-Master, launched in 1955, was originally developed as a navigation instrument for professionals criss-crossing the globe.
                </p>
              </div>
            </div>
            <div className="slide-holder">
              <img
                alt="Rolex"
                src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651701790/test/j3pm9qv0oqb6wnjpi2rr.png"
              />
              <div className="text-container">
                <h2>Rolex GMT 2</h2>
                <p>
                Designed to show the time in two different time zones simultaneously, the GMT-Master, launched in 1955, was originally developed as a navigation instrument for professionals criss-crossing the globe.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      );
}
