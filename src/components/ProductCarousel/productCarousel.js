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
                alt="TOYOTA ALTEZZA"
                src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651767212/test/izouvuipzaslwjyynant.png"
              />
              <div className="text-container">
                <h2>TOYOTA ALTEZZA</h2>
                <p>
                RS200 Z Edition RS200 Z Edition External Front and Rear Bumper Veilside External Muffler FR BLTZ External Radiator External Radiator WORK18 Aluminum External Bonnet External Clutch Full Bucket BRIDE
                </p>
              </div>
            </div>
            <div className="slide-holder">
              <img
                alt="NISSAN DATSUN PICKUP"
                src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651767684/test/oihmvum900vgtpq6z65b.png"
              />
              <div className="text-container">
                <h2>NISSAN DATSUN PICKUP</h2>
                <p>
                Double cab AD NEW All paint External aluminum block tire External aluminum External tail lens Over fender External muffler                </p>
              </div>
            </div>
            <div className="slide-holder">
              <img
                alt="LAND CRUISER PRADO"
                src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651767954/test/q4u3sundccrclxmdjwnu.png"
              />
              <div className="text-container">
                <h2>LAND CRUISER PRADO</h2>
                <p>
                EX Wide Lift Up External Aluminum Sunroof External Tail Lens Clear Lens Seat Cover Wood Handle                </p>
              </div>
            </div>
            <div className="slide-holder">
              <img
                alt=""
                src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651697727/test/weezxyuw8gnhhnsyhkzh.png"
              />
              <div className="text-container">
                <h2>TOYOTA SUPRA - NATURALLY ASPIRATED - 3RD GEN (A70)</h2>
                <p>
                The 4th generation Toyota Supra base model was powered by, in most applications, the 3.0-liter 7M-GE dual overhead cam inline six producing 200 horsepower. In Japan, a smaller 2.0-liter six was available to avoid road taxes on larger-displacement engines. Both five-speed manual and four-speed automatic transmissions were available between 1986 and 1989.                </p>
              </div>
            </div>
            <div className="slide-holder">
              <img
                alt="FAIRLADY Z 2+2 TWIN TURBO Z32"
                src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651768652/test/by4bcoe40ooueg2gsx0c.png"
              />
              <div className="text-container">
                <h2>FAIRLADY Z 2+2 TWIN TURBO Z32</h2>
                <p>
                A more angular design, with partially-hidden retractable headlamps, greeted sports car and luxury GT fans alike. The 1984 model year wore both Datsun and Nissan badges on the decklid, as Nissan was transitioning away from the older Datsun brand name.                </p>
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
