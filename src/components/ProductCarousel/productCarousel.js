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
                alt="Cleats"
                src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651590473/test/wrwaws9xivp69ectolin.webp"
              />
              <div className="text-container">
                <h2>Soccer Cleat</h2>
                <p>
                Cleat
                </p>
              </div>
            </div>
            <div className="slide-holder">
              <img
                alt=""
                src="https://content.thewosgroup.com/productimage/40921407/40921407_2.jpg?impolicy=zoom"
              />
              <div className="text-container">
                <h2>PRE-OWNED ROLEX BY ANALOG SHIFT</h2>
                <p>
                The Reference 1680, originally released in 1966, deviated from previous iterations of the Submariner with the inclusion of a date function. To some, this change was remarkably divisive because, according to the diehards, if you need to know the date during a dive, you're kind of screwed.
                </p>
              </div>
            </div>
            <div className="slide-holder">
              <img
                alt=""
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/413676c9-f4e4-49f5-939e-5de2f0265224/freak-3-se-little-kids-shoes-27wTlX.png"
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
                <h2>boston celtics statement edition</h2>
                <p>
                The Boston Celtics Statement Edition sets the tone for big games and rivalries, when players want to make a bold impression.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      );
}
