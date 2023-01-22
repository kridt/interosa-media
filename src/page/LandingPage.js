import React from "react";
import { InlineWidget } from "react-calendly";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./LandingPage.scss";

export default function LandingPage() {
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const reviews = [
    {
      name: "Khizer Khawaja, CEO of CareToBeSilky",
      review:
        "As an e-commerce shop owner, I had a terrific experience working together with Interosa Media. Marketing is the most crucial thing in our industry and we needed someone that we could rely on and that would take our business to the next level. And I can only say that they did a magnificent job in doing exactly that! They’re very obsessed with what they do and make sure you’re heard and that your needs as a business owner are met. I’d 100% recommend all businesses to use their services. They deliver what they promise, it’s as simple as that.",
    },
    {
      name: "Oguzhan Pakirdas, CEO of J.O. Revision",
      review:
        "We are satisfied with their work. Very fast response  No complaints",
    },
    {
      name: "Charanjit Madaan, CEO of SPS Autodele",
      review:
        "Experienced and dynamic young team to work with. Had a very effective and resultoriented meeting with Interosa Media today in a connection of our webshop. It seems they have an experienced team to work with. I will surely share my working experience with them later, but til now, I'm really happy to start work with them to improve marketing strategies of our webshop",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="landingPage">
        <div className="firstPitch">
          <div className="landingPageImg">
            <img src="/landingPageBigImg.jpg" alt="big img working socials" />
          </div>
          <div className="landingPageText">
            <h1>
              Do you see ineffective results with your marketing strategy?🤔
            </h1>
            <p>
              Do you see ineffective results in your online advertisement and in
              need of new ideas and strategies?
            </p>
            <p>
              We make sure to prepare a marketing strategy that can really be
              felt and most definitely seen
            </p>
            <p style={{ marginBottom: "3.8em" }}>
              We are experts in several social media platforms, NOT just
              Instagram & Facebook. For this exact reason, we can deliver the
              specific omnipresence YOUR company needs.
            </p>
            <a
              className="btn"
              href={`https://calendly.com/interosamedia/discovery-call-15-min?month=${year}-${month}`}
            >
              book a discovery call
            </a>
          </div>
        </div>

        <div className="secPitch">
          <div className="landingPageImg">
            <img
              src="/landingPageBigImgSec.jpg"
              alt="big img working socials"
            />
          </div>
          <div className="landingPageText">
            <h1>
              The way you tell your story online can make all the difference👨🏽‍💻
            </h1>
            <p>
              Do you see ineffective results in your online advertisement and in
              need of new ideas and strategies?
            </p>
            <p>
              We make sure to prepare a marketing strategy that can really be
              felt and most definitely seen
            </p>
            <p style={{ marginBottom: "3.8em" }}>
              We are experts in several social media platforms, NOT just
              Instagram & Facebook. For this exact reason, we can deliver the
              specific omnipresence YOUR company needs.
            </p>
            <a
              className="btn"
              href={`https://calendly.com/interosamedia/discovery-call-15-min?month=${year}-${month}`}
            >
              book a discovery call
            </a>
          </div>
        </div>

        <h1
          style={{
            textAlign: "center",
            marginTop: "5em",
            marginBottom: "2em",
          }}
        >
          What Our Previous Clients Are Saying About Us?
        </h1>
        <div className="reviews">
          {reviews.map((review, index) => {
            console.log(review, index);
            return (
              <div className="review" key={index}>
                <p> &ldquo;{review.review}&rdquo;</p>
                <h4>- {review.name}</h4>
              </div>
            );
          })}
        </div>

        <div className="interrested">
          <div className="case">
            <h1>Do you have an interesting case?</h1>
            <p>
              This is a free and non-binding strategy meeting with Interosa
              Media. In this strategy meeting we will go through your webshop
              and look at some of your SoMe channels. We will elaborate
              marketing strategies we could tailor and implement for your
              particular business, in order to heavily boost the growth of your
              business and online sales. Simply locate a time-slot that would
              fit your calendar.
            </p>
            <br />
            <p>We look forward hearing from you!</p>

            <div className="contactInfo">
              <div>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:Info@interosamedia.com">
                  Info@interosamedia.com
                </a>
              </div>
              <div>
                <i class="fa-solid fa-phone"></i>
                <a href="tel:+4591461935">+45 91 46 19 35</a>
              </div>
            </div>
          </div>
          <div className="calendly">
            <h1>Lets Talk</h1>
            <h3>Coffee Is On Us</h3>
            <InlineWidget
              url={`https://calendly.com/interosamedia/discovery-call-15-min?month=${year}-${month}`}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
