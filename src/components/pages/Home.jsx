import React from "react";
// import Navbar from "../navbar";
// import img1 from "../../assets/undraw_engineering_team_a7n2.svg";
// import img2 from "../../assets/undraw_pair_programming_re_or4x.svg";
// import img3 from "../../assets/undraw_solution_mindset_re_57bf.svg";
// import img4 from "../../assets/undraw_contact_us_re_4qqt (1).svg";
// import img5 from "../../assets/undraw_mobile_encryption_re_yw3o.svg";
// import img6 from "../../assets/undraw_forms_re_pkrt.svg";
import img1 from '../../assets/undraw_engineering_team_a7n2.svg';
import img2 from '../../assets/undraw_pair_programming_re_or4x.svg';
// import img3 from '../../assets/undraw_solution_mindset_re_57bf.svg';
// import img4 from '../../assets/undraw_contact_us_re_4qqt (1).svg';
// import img5 from '../../assets/undraw_mobile_encryption_re_yw3o.svg';
// import img6 from '../../assets/undraw_forms_re_pkrt.svg';

function Home() {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CyberDost</title>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n.box1{\n    height: 100vh;\n    width: 100vw;\n    background-color: rgb(50,50,50);\n}\n.nav{\n    height: 14vh;\n    width: 95vw;\n    margin: auto;\n    border-bottom: 0.4px solid snow;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    /* box-shadow: 1px 1px 2px snow; */\n    \n}\n.logo{\n    color: snow;\n    font-size: 2.5rem;\n}\n.ul1{\n    text-decoration: none;\n    color: snow;\n    display: flex;\n    list-style-type: none;\n}\n.anchor{\n    text-decoration: none;\n    color: white;\n}\n.li1{\n    font-size: larger;\n    margin-left: 2vw;\n}\nli:hover{\n    transform: scale(1.05);\n    /* text-shadow:0.5px 0.5px 1px white; */\n}\n\nbutton{\n    text-decoration: none;\n    padding: 1vw 1vw;\n    color: snow;\n    background: black;\n    font-size: 16px;\n    border-radius: 8vw;\n    border: none;\n    transition: 0.2s linear;\n}\nbutton:hover{\n    transform: scale(1.05);\n    box-shadow:0.5px 0.5px 1.5px snow;\n}\n.search{\n    margin-right: 1vw;\n}\n.box2{\n    height: 100vh;\n    width: 100vw;\n    background-color: antiquewhite;\n}\n\n.stayInformed{\n    height: 26vh;\n    width: 40vw;\n    position: relative;\n    left: 10vw;\n    top: 15vh;\n    font-size: 3.2rem;\n    color: snow;\n}\n.simplifiedsecure{\n    width: 40vw;\n    height: 8vh;\n    position: relative;\n    left: 10vw;\n    top: 25vh;\n    font-size: 1.2rem;\n    color: snow;\n}\n\n.getstarted{\n    position: relative;\n    left: 10vw;\n    top: 35vh;\n    width: 30vw;\n}\n\n.background1{\n    height: 40vh;\n    width: 35vw;\n    /* background-color: rgb(22,22,22); */\n    position: relative;\n    left: 55vw;\n    bottom: 10vh;\n    border-radius: 25px;\n}\n\n\n\n\n.box2{\n    width: 100vw;\n    height: 300vh;\n    background-color: rgb(22,22,22);\n    \n}\n\n.ln{\n    position: relative;\n    color: snow;\n    width: 100vw;\n    height: 5vh;\n    top: 8vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n}\n.fs{\n    position: relative;\n    color: snow;\n    width: 100vw;\n    height: 10vh;\n    top: 8vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n}\n.sac{\n    position: relative;\n    color: snow;\n    width: 100vw;\n    height: 5vh;   \n    top: 8vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.3rem;\n}\n.background2{\n    height: 40vh;\n    width: 35vw;\n    /* background-color: rgb(50,50,50); */\n    position: relative;\n    left: 35vw;\n    top: 20vh;\n    border-radius: 25px;\n}\n.BCS{\n    width: 100vw;\n    height: 6vh;\n    position: relative;\n    top: 30vh;\n    font-size: 2rem;\n    color: snow;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.signin{\n    width: 100vw;\n    height: 6vh;\n    position: relative;\n    top: 30vh;\n    font-size: 1.3rem;\n    color: snow;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.signup{\n    background-color: rgb(50,50,50);\n    text-decoration: none;\n    padding: 1vw 1vw;\n    color: snow;\n    font-size: 16px;\n    border-radius: 8vw;\n    border: none;\n    position: relative;\n    top: 28vh;\n    left: 40vw;\n    width: 20vw;\n}\n.signup:hover{\n    box-shadow: 1px 1px 2px snow;\n}\n\n.EF{\n    width: 40vw;\n    height: 8vh;\n    position: relative;\n    left: 10vw;\n    top: 55vh;\n    font-size: 1.3rem;\n    color: snow;\n    /* background-color: aqua; */\n}\n\n.Soln{\n    width: 40vw;\n    height: 8vh;\n    position: relative;\n    left: 10vw;\n    top: 55vh;\n    font-size: 4rem;\n    color: snow;\n}\n.covered{\n    width: 40vw;\n    height: 8vh;\n    position: relative;\n    left: 10vw;\n    top: 68vh;\n    font-size: 1.3rem;\n    color: snow;\n    /* background-color: aqua; */\n}\n.explorenow{\n    background-color: rgb(50,50,50);\n    text-decoration: none;\n    padding: 1vw 1vw;\n    color: snow;\n    font-size: 16px;\n    border-radius: 8vw;\n    border: none;\n    position: relative;\n    top: 75vh;\n    left: 10vw;\n    width: 20vw;\n}\n\n.explorenow:hover{\n    box-shadow: 1px 1px 2px snow;\n}\n\n.background3{\n    height: 40vh;\n    width: 35vw;\n    /* background-color: rgb(50,50,50); */\n    position: relative;\n    left: 60vw;\n    top: 30vh;\n    border-radius: 25px;\n}\n\n/* JS */\n.content {\n    opacity: 1;\n    transition: opacity 2s ease-in-out;\n}\n\n.hidden {\n    opacity: 0;\n    pointer-events: none;\n}\n/* JS */\n\n.case{\n    width: 100vw;\n    height: 6vh;\n    position: relative;\n    top: 45vh;\n    font-size: 3rem;\n    color: snow;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.caseText{\n    width: 100vw;\n    height: 6vh;\n    position: relative;\n    top: 48vh;\n    font-size: 1.5rem;\n    color: snow;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.cardsCover{\n    position: relative;\n    top: 18%;\n    display: flex;\n    align-items: center;\n    padding: 2vw 8vw;\n    overflow:hidden;\n    width: 90vw;\n    margin: auto;\n}\n.cardsCover .cardScroll{\n    height: 60vh;\n    display: flex;\n    gap: 3vw;\n    width: fit-content;\n    overflow-x: scroll;\n    padding-left: 1.5vw;\n}\n.cardsCover .card{\n    height: 100%;\n    min-width: 22vw;\n    background-color: rgb(37, 37, 37);\n    border-radius: 2vw;\n    overflow: hidden;\n    color: snow;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-weight: 100;\n    transition: all 0.2 linear ;\n}\n.card .upper{\n    height: 40%;\n    border-radius: 2vw;\n    overflow: hidden;\n    transition: all 0.2 linear ;\n}\n.card .upper img{\n    width: 100%;\n    object-fit: cover;\n    transition: all 0.2 linear ;\n}\n.card .lower{\n    height: 60%;\n    padding: 2vw 1.5vw;\n    display: flex;\n    flex-direction: column;\n    gap: 2vw;\n    transition: all 0.2 linear ;\n}\n.card .lower h5{\n    margin-top: 4vw;\n    transition: all 0.2 linear ;\n}\n\n\n\n.box3{\n    height: 100vh;\n    width: 100vw;\n    background-color: rgb(50,50,50);\n}\n\n.connect{\n    width: 40vw;\n    height: 6vh;\n    /* background-color: aqua; */\n    position: relative;\n    top: 25vh;\n    left: 50vw;\n    font-size: 4rem;\n    color: snow;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.connectText{\n    width: 27vw;\n    height: 6vh;\n    /* background-color: aqua; */\n    position: relative;\n    top: 38vh;\n    left: 58vw;\n    font-size: 1.4rem;\n    color: snow;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.contact{\n    background-color: rgb(22,22,22);\n    text-decoration: none;\n    padding: 1vw 1vw;\n    color: snow;\n    font-size: 16px;\n    border-radius: 8vw;\n    border: none;\n    position: relative;\n    top: 50vh;\n    left: 60vw;\n    width: 20vw;\n}\n/* .background4{\n    height: 40vh;\n    width: 35vw;\n    background-color: rgb(22,22,22);\n    position: relative;\n    left: 10vw;\n    top: 10vh;\n    border-radius: 25px;\n} */\n.contactus{\n    margin-left: 100px;\n    margin-top: 50px;\n}\n\n.box4{\n    height: 100vh;\n    width: 100vw;\n    background-color: rgb(22,22,22);\n}\n\n.about{\n    width: 40vw;\n    height: 6vh;\n    /* background-color: aqua; */\n    position: relative;\n    top: 25vh;\n    left: 8vw;\n    font-size: 3.5rem;\n    color: snow;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.aboutText{\n    width: 27vw;\n    height: 6vh;\n    /* background-color: aqua; */\n    position: relative;\n    top: 38vh;\n    left: 12vw;\n    font-size: 1.4rem;\n    color: snow;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.aboutus{\n    background-color: rgb(50,50,50);\n    text-decoration: none;\n    padding: 1vw 1vw;\n    color: snow;\n    font-size: 16px;\n    border-radius: 8vw;\n    border: none;\n    position: relative;\n    top: 50vh;\n    left: 15vw;\n    width: 20vw;\n}\n.background5{\n    height: 40vh;\n    width: 35vw;\n    /* background-color: rgb(50,50,50); */\n    position: relative;\n    left: 60vw;\n    top: 10vh;\n    border-radius: 25px;\n}\n.whytrust{\n    margin-right: 100px;\n}\n.aboutus:hover{\n    box-shadow: 1px 1px 2px snow;\n}\n.contact:hover{\n    box-shadow: 1px 1px 2px snow;\n}\n\n.box5{\n    height: 25vh;\n    width: 100vw;\n    background-color: rgb(50,50,50);\n}\n\n.logofoot{\n    height: 6vh;\n    width: 6vw;\n    /* background-color: rgb(22,22,22); */\n    position: relative;\n    top: 6vh;\n    left: 2vw;\n}\n\n.listt{\n    display: flex;\n    /* flex-direction: row-reverse; */\n    justify-content: flex-end;\n    align-items: flex-start;\n    gap: 17vw;\n    position: relative;\n    right: 6vw;\n    padding: 0 10vw;\n    line-height: 2rem;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.ul2{\n    text-decoration: none;\n    color: snow;\n    display: flex;\n    flex-direction: column;\n    list-style-type: none;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 0.8rem;\n}\n.li2{\n    font-size: larger;\n    margin-left: 2vw;\n}\nli:hover{\n    transform: scale(1.05);\n    /* text-shadow:0.5px 0.5px 1px white; */\n}\n.followfoot{\n    color: snow;\n}\n.lastline{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.lin{\n    width: 90vw;\n    height: 10vh;\n    border-top: 1px solid snow;\n    /* background-color: aqua; */\n    margin-left: 60px;\n    margin-top: 10px;\n    \n}\n\n.copyright{\n    color: snow;\n    text-align: center;\n    margin: 4px;\n}\n\n#logoo{\n    height: 40vh;\n    position: relative;\n    bottom: 100px;\n    color: white;\n}\n.card:hover{\n    transform: scale(1.1);\n}\n\n\n\n  ",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Raleway:wght@200&family=Source+Code+Pro:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://kit.fontawesome.com/a076d05399.js"
        />
        <div className="container">
          <div className="box1">
            <div className="stayInformed">
              {/* Stay Informed and Protected */}
              CyberDost : Protect Yourself from Cybercrime
            </div>
            <div className="simplifiedsecure" >
              Cyberdost is a comprehensive website dedicated to providing users
              with the knowledge and tools to protect themselves from
              cybercrime. Stay Safe and Informed with us.
            </div>
            <div className="start">
              <button className="getstarted">Get Started</button>
            </div>
            <div className="background1">
              <img
                src={img1}
                alt="website"
                className="first"
                style={{ marginTop: "-40px" }}
              />
            </div>
          </div>
          <hr />
          <div className="box2">
            <div className="ln">Latest News</div>
            <div className="fs">Featured Stories</div>
            <div className="sac">Stay Ahead of Cybercrime</div>
            <div className="background2">
              <img
                src={img2}
                alt="stories"
                height="330vh"
              />
            </div>
            <div className="BCS">Be in control of your Security</div>
            <div className="signin">Sign up for updates!</div>
            <br />
            <br />
            <br />
            <input
              type="submit"
              className="signup"
              defaultValue="Sign up now"
            />
            <div className="EF">
              <p id="content1" className="content">
                Trending News
              </p>
              <p id="content2" className="content" style={{ display: "none" }}>
                Exclusive Features
              </p>
              <p id="content3" className="content" style={{ display: "none" }}>
                Advanced Security Features
              </p>
            </div>
            <div className="Soln">Tailored Solutions for Everyone</div>
            <div className="covered">
              From Indivisuals to Enterprise we have got you Covered
            </div>
            <input
              type="submit"
              className="explorenow"
              defaultValue="Explore Now"
            />
            <div className="background3">
              <img
                src={img1}
                alt="solution"
                height="300vh"
              />
            </div>
            <div className="case" id="Case">
              Case Studies
            </div>
            <div className="caseText">
              Real life Stories related to Cybercrime
            </div>
            <div className="cardsCover">
              <div className="cardScroll">
                <div className="card">
                  <div className="upper">
                    <img
                      src="https://startupnation.com/wp-content/uploads/2016/05/business_security_chaplan.jpg"
                      alt=""
                    />
                  </div>
                  <div className="lower">
                    <h3>Protect Your Business</h3>
                    <p>
                      Our Services Led to a 40% Decrease in Cyber Attacks within
                      6 Months
                    </p>
                    <h5>LOGO</h5>
                  </div>
                </div>
                <div className="card">
                  <div className="upper">
                    <img
                      src="https://assets-eu-01.kc-usercontent.com/77bbf83a-1306-0152-fea5-3b5eaf937634/7916661a-40c3-4d65-8ea8-6785dfe41ab8/GettyImages-1303567646.jpg"
                      alt=""
                    />
                  </div>
                  <div className="lower">
                    <h3>Secure Your Data</h3>
                    <p>Enhance Your Security with Our Expertise</p>
                    <h5>LOGO</h5>
                  </div>
                </div>
                <div className="card">
                  <div className="upper">
                    <img
                      src="https://prowire.us/wp-content/uploads/2023/03/best-small-business-security-systems.jpg"
                      alt=""
                    />
                  </div>
                  <div className="lower">
                    <h3>Stay Ahead of Threats</h3>
                    <p>Partner with Us for Enhanced Protection</p>
                    <h5>LOGO</h5>
                  </div>
                </div>
                <div className="card">
                  <div className="upper">
                    <img
                      src="https://startupnation.com/wp-content/uploads/2016/05/business_security_chaplan.jpg"
                      alt=""
                    />
                  </div>
                  <div className="lower">
                    <h3>Protect Your Business</h3>
                    <p>
                      Our Services Led to a 40% Decrease in Cyber Attacks within
                      6 Months
                    </p>
                    <h5>LOGO</h5>
                  </div>
                </div>
                <div className="card">
                  <div className="upper">
                    <img
                      src="https://startupnation.com/wp-content/uploads/2016/05/business_security_chaplan.jpg"
                      alt=""
                    />
                  </div>
                  <div className="lower">
                    <h3>Protect Your Business</h3>
                    <p>
                      Our Services Led to a 40% Decrease in Cyber Attacks within
                      6 Months
                    </p>
                    <h5>LOGO</h5>
                  </div>
                </div>
                <div className="card">
                  <div className="upper">
                    <img
                      src="https://startupnation.com/wp-content/uploads/2016/05/business_security_chaplan.jpg"
                      alt=""
                    />
                  </div>
                  <div className="lower">
                    <h3>Protect Your Business</h3>
                    <p>
                      Our Services Led to a 40% Decrease in Cyber Attacks within
                      6 Months
                    </p>
                    <h5>LOGO</h5>
                  </div>
                </div>
                <div className="card">
                  <div className="upper">
                    <img
                      src="https://startupnation.com/wp-content/uploads/2016/05/business_security_chaplan.jpg"
                      alt=""
                    />
                  </div>
                  <div className="lower">
                    <h3>Protect Your Business</h3>
                    <p>
                      Our Services Led to a 40% Decrease in Cyber Attacks within
                      6 Months
                    </p>
                    <h5>LOGO</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="box3">
            <div className="connect">Connect with us</div>
            <div className="connectText">
              Reach out to our team for any questions or support. We are here to
              help you stay safe online and protect your digital life.
            </div>
            <input
              type="submit"
              className="contact"
              defaultValue="Send Message"
            />
            <div className="background4">
              <img
                src={img2}
                alt="contact us"
                className="contactus"
                height="290vh"
              />
            </div>
          </div>
          <hr className="d" />
          <div className="box4">
            <div className="about">Why trust CyberDost?</div>
            <div className="aboutText">
              CyberDost is a trusted platform that empowers indivisuals to take
              control of their online security. Our commimtment to privacy and
              data protection ensures a safe and secure online experience for
              all users.
            </div>
            <input
              type="submit"
              className="aboutus"
              defaultValue="Learn More"
            />
            <div className="background5">
              <img
                src={img1}
                alt="trust"
                className="whytrust"
                height="300vh"
                width="450vw"
              />
            </div>
          </div>
          <hr />
          
        </div>
      </>
    </div>
  );
}

export default Home;
