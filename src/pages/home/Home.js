import React from "react";
import { FOUNDER_IMAGE, FOUNDERBG, LOGO } from "../../utils/constant";
import Countdown from "../../components/countdown/Countdown";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="hero-section">
      <div className="center-content1">
        <div className="center-image" style={{ marginTop: "5rem" }}>
          <img src={LOGO} className="center-logo" alt="Logo" />
        </div>
        <h2 className="welcomeText">Welcome to The Indian Summit</h2>

        {/* Countdown Component */}
        <Countdown />
      </div>
      <section className="bg-color more-info-section">
        <div className="container">
          <div className="row">
            {/* Hero section image (if needed, you can add back the image by uncommenting the code) */}
            {/* <div className="col-12 col-md-12 col-lg-6 img-section">
                <figure>
                  <img src="src/images/Homepage/Logo.png" alt="digital products" className="img-fluid" />
                </figure>
              </div> */}

            <h2
              className="text-capitalize fw-bolder"
              style={{
                color: "#fe491e",
                textAlign: "center",
                fontSize: "2.3rem",
                fontFamily: "Poppins",
              }}
            >
              The Indian Summit
            </h2>
            <p className="mt-3 mb-5 para-width text-white text-left">
              The Indian Summit is an organization dedicated to public speaking
              and raising awareness on national, local, and international
              issues. We provide platforms and opportunities for individuals to
              engage in meaningful dialogue and develop their public speaking
              skills by organizing events of unique nature. Our organization
              also promotes green initiatives and advocates for a zero-plastic
              lifestyle, aiming to create a more sustainable and environmentally
              conscious community.
            </p>

            <div
              className="text-center w-100 text-md-start"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/register">
                <button
                  className="about_btn"
                  data-bs-toggle="tooltip"
                  data-bs-title="Contact Now"
                >
                  Register Now
                </button>
              </Link>
            </div>
          </div>

          <h2
            className="text-capitalize fw-bolder"
            style={{
              color: "#fe491e",
              textAlign: "center",
              paddingTop: "180px",
              fontSize: "2.3rem",
              fontFamily: "Poppins",
            }}
          >
            About The Conference
          </h2>
          <p className="mt-3 mb-5 para-width text-white">
            THE INDIAN SUMMIT is not just a conference designed to bring
            together delegates from around the country to engage in debates on
            ongoing and emerging issues, this conference uniquely aims to
            celebrate and revive INDIAN CULTURE in an era where globalization,
            epitomized by the "McDonaldization" phenomenon, has led to the
            diminishing of our rich cultural heritage.
            <br />
            <br />
            Latterly, there's an urgent need to reconnect with our roots and
            promote our cultural. The Indian Summit addresses this need by
            fostering a platform where the essence of Indian culture is at the
            forefront. The theme for this year, "THE CULTURE SAYS EVERYTHING?",
            encapsulates our vision to enrich and promote cultural awareness
            through various engaging activities.
            <br />
            <br />
            With a mission in confluence with the GREEN INITIATIVE, the Indian
            Summit shall be a completely ZERO PLASTIC event, promoting green
            initiatives and showcasing eco-friendly practices. Our dedication to
            the environment underscores our belief that cultural preservation
            and environmental stewardship go hand in hand.
            <br />
            <br />
            The summit will feature a diverse range of activities designed to
            inspire confidence in emerging minds and encourage public speaking
            ranging from the evergreen heated debates to lightening activities.
            This initiative not only aims to contribute to nation-building
            through cultural preservation and enhancement but also ensuring that
            emerging carries forward the legacy of Indian culture with renewed
            vigor.
            <br />
            <br />
            Join us at the Indian Summit, where we celebrate the past, present,
            and future of Indian culture and prove that “YES, THE CULTURE SAYS
            EVERYTHING”….
          </p>
        </div>
      </section>
      <section className="bg-color founder-message-section">
        <div
          className="floral-mssg-bg"
          style={{
            backgroundImage: `url(${FOUNDERBG})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="founder-photo">
                  <img
                    src={FOUNDER_IMAGE}
                    alt="Founder"
                    className="img-fluid"
                  />
                </div>
                <h2
                  className="text-capitalize text-3xl fw-bolder"
                  style={{
                    color: "#fe491e",
                    fontSize: "2.3rem",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {/* added CSS (home.css) to resolve overlapping)*/}
                  <br />
                  <br />
                  Founder & Secretary General’s Message
                </h2>
                <div className="founder-message">
                  <p className="mt-3 mb-3 para-width text-black">
                    Dear Delegates, Advisors, and Organizers,
                    <br />
                    <br />
                    "रहनुमाओं की अदाओं पे फ़िदा है दुनिया, इस बहकती हुई दुनिया
                    को संभालो यारो! कैसे आकाश में सुराख़ नहीं हो सकता, एक पत्थर
                    तो तबीयत से उछालो यारो!" This vibrant quote captures the
                    spirit of what we are about to embark on. It is with immense
                    joy and pride that I invite you to The Indian Summit, the
                    largest conference ever held in North India.
                    <br />
                    <br />
                    As the Founder Secretary-General of such an esteemed
                    organization, The Indian Summit, I am deeply honored. The
                    Indian Summit represents the culmination of a dream I began
                    to shape five years ago. It embodies my passion for reviving
                    our Indian culture, which is increasingly overshadowed by
                    globalization, and my commitment to environmental
                    sustainability through a zero-plastic initiative. The Indian
                    Summit is more than just an organization; it aims at
                    organizing gatherings that fill all involved with immense
                    pride.
                    <br />
                    <br />
                    As the most significant event of its kind in North India, my
                    Secretariat and I are dedicated to not only maintaining but
                    also enhancing the remarkable legacy of our cultural
                    heritage. We are working tirelessly to offer an
                    unprecedented experience, one that sharpens your skills,
                    broadens your knowledge, and prepares you to be the
                    visionary leaders of tomorrow contributing to building a
                    stellar nation.
                    <br />
                    <br />
                    Additionally, we aim to bolster public speaking, research
                    skills, and confidence among our youth. Our theme this year,
                    “The Culture Says Everything,” emphasizes the powerful
                    impact of cultural norms, values, and traditions. In a
                    globalized world, preserving our unique cultural identity is
                    more crucial than ever. By celebrating and preserving our
                    heritage, we can address complex issues like poverty,
                    climate change, inequality, and conflict.
                    <br />
                    <br />
                    With great enthusiasm, I extend a warm welcome to you. I
                    encourage you to dive into The Indian Summit for an
                    enriching, enjoyable, and memorable experience. This
                    conference is designed to inspire, enlighten, and help you
                    hone the skills needed to become future leaders.
                    <br />
                    <br />
                    Happy debating!
                    <br />
                    <br />
                    Best Wishes,
                    <br />
                    Priyansh Bhardwaj
                    <br />
                    Founder Secretary General
                    <br />
                    The Indian Summit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
