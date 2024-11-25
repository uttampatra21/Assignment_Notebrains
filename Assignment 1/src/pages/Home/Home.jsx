import React, { useEffect, useState } from "react";

import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Home.scss";
import Marquee from "react-fast-marquee";

import usersIcon from "../../assets/images/users.png";
import arrowIcon from "../../assets/images/arrow.png";
import starIcon from "../../assets/images/star.png";
import rectanglw1 from "../../assets/images/Rectangle_22.png";
import rectanglw2 from "../../assets/images/Rectangle_23.png";
import rectanglw3 from "../../assets/images/Rectangle_24.png";
import publishers from "../../assets/images/publisher.png";
import Cards from "../../components/Cards/Cards";

const Counter = ({ targetValue, duration }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(targetValue / (duration * 70));
    let value = 0;

    const interval = setInterval(() => {
      value += increment;
      if (value >= targetValue) {
        value = targetValue;
        clearInterval(interval);
      }
      setCurrentValue(value);
    }, 100);

    return () => clearInterval(interval);
  }, [targetValue, duration]);

  return <h1>+{currentValue}</h1>;
};

const Home = () => {
  const [active, setActive] = useState("1");

  return (
    <div id="__home-page">
      <section className="__hero-section">
        <div className="__left">
          <h1>
            #1 Everything to help your <span>Digital</span> business Thrive.
          </h1>

          <p className="text">
            Search through our collection of over 5,000+ adtech solutions,
            hosting platforms, exclusive deals, and more.
          </p>

          <div className="__email">
            <input type="email" placeholder="email@company.com" />
            <button>
              Get Started <i className="bx bx-arrow-back"></i>
            </button>
          </div>

          <div className="__user-item">
            <div className="__users">
              <img src={usersIcon} alt="usersIcon" />
              <p>
                2.5k trusted publishers are <br /> using our{" "}
                <span>platform</span>
              </p>
            </div>

            <div className="__how-it--works">
              <div className="__work-btn">
                <div className="__work">
                  <img src={arrowIcon} alt="arrowIcon" />
                  <div className="__icon">
                    <i className="bx bxs-right-arrow"></i>
                  </div>
                  <p>How it works</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="__right">
          <img className="_starIcon" src={starIcon} alt="starIcon" />

          <div className="__box">
            <div className="__left-item">
              <img src={rectanglw1} alt="rectanglw1" />
            </div>
            <div className="__right-item">
              <img src={rectanglw2} alt="rectanglw1" />
              <img src={rectanglw3} alt="rectanglw1" />
            </div>
          </div>
        </div>
      </section>

      <div className="__brand-items">
        <Marquee>
          <img
            src="https://publishergrowth.com/images/thumbnail/setupad%20logo.webp"
            alt=""
          />
          <img
            src="https://publishergrowth.com/images/thumbnail/izooto-01.webp"
            alt=""
          />
          <img
            src="https://publishergrowth.com/images/thumbnail/Refinery89.webp"
            alt=""
          />
          <img
            src="https://publishergrowth.com/images/thumbnail/monetag.webp"
            alt=""
          />
          <img
            src="https://publishergrowth.com/images/thumbnail/playwire%20logo.webp"
            alt=""
          />
          <img
            src="https://publishergrowth.com/images/thumbnail/setupad%20logo.webp"
            alt=""
          />
          <img
            src="https://publishergrowth.com/images/thumbnail/setupad%20logo.webp"
            alt=""
          />
          <img
            src="https://publishergrowth.com/images/thumbnail/setupad%20logo.webp"
            alt=""
          />
          <img
            src="https://publishergrowth.com/images/thumbnail/izooto-01.webp"
            alt=""
          />
          <img
            src="https://publishergrowth.com/images/thumbnail/Refinery89.webp"
            alt=""
          />
          <img
            src="https://publishergrowth.com/images/thumbnail/monetag.webp"
            alt=""
          />
          <img
            src="https://publishergrowth.com/images/thumbnail/playwire%20logo.webp"
            alt=""
          />
          <img
            src="https://publishergrowth.com/images/thumbnail/setupad%20logo.webp"
            alt=""
          />
          <img
            src="https://publishergrowth.com/images/thumbnail/setupad%20logo.webp"
            alt=""
          />
        </Marquee>
      </div>

      <section className="__how-works">
        <div className="__pubgrowth-work">
          <div className="__left">
            <h1>How PubGrowth Works?</h1>

            <p>
              Use our expertise and wide network to solve your adtech, hosting
              and publishing needs. Sign up with us to get one-on-one
              consultation.
            </p>

            <div className="__button">
              <button type="button">
                Learn More <i className="bx bx-arrow-back"></i>
              </button>
            </div>

            <div className="__down">
              <i className="bx bx-arrow-back"></i>
            </div>
          </div>
          <div className="__right">
            <div className="__items">
              <img
                src="https://publishergrowth.com/assets/front/images/Frame1.svg"
                alt=""
              />

              <h3>Signup now</h3>

              <p>
                Fill up the sign up form. It only takes a minute to get started.
              </p>
            </div>

            <div className="__items">
              <img
                src="https://publishergrowth.com/assets/front/images/Frame2.svg"
                alt=""
              />

              <h3>Find Partners</h3>

              <p>
                Search or browse to discover tools or softwares that best fit
                your needs.
              </p>
            </div>

            <div className="__items">
              <img
                src="https://publishergrowth.com/assets/front/images/Frame3.svg"
                alt=""
              />

              <h3>Research Credibility</h3>

              <p>
                Our listed platforms go through strong filtering to ensure they
                meet safety and security standards.
              </p>
            </div>

            <div className="__items">
              <img
                src="https://publishergrowth.com/assets/front/images/Frame4.svg"
                alt=""
              />

              <h3>Explore Our Community</h3>

              <p>
                Dive into our vibrant publisher community to understand best
                practices and grow your network.
              </p>
            </div>

            <div className="__items">
              <img
                src="https://publishergrowth.com/assets/front/images/Frame5.svg"
                alt=""
              />

              <h3>Connect With Partners</h3>

              <p>
                Connect with partners across the globe to start your growth
                acceleration journey.
              </p>
            </div>

            <div className="__items">
              <img
                src="https://publishergrowth.com/assets/front/images/Frame6.svg"
                alt=""
              />

              <h3>24/7 Live Support</h3>

              <p>
                We assist you promptly, regardless of the day or time. Just drop
                us a message from your account.
              </p>
            </div>
          </div>
        </div>

        <div className="__net_progress">
          <div className="__bar">
            <div className="__item">
              <p>Registered Publishers</p>
              <Counter targetValue={964} duration={1} />
            </div>

            <div className="__line"></div>

            <div className="__item">
              <p>Ad Network Partners</p>
              <Counter targetValue={102} duration={1} />
            </div>

            <div className="__line"></div>

            <div className="__item">
              <p>Hosting & Publishing Partners</p>
              <Counter targetValue={478} duration={1} />
            </div>
          </div>
        </div>
      </section>

      <section className="__publisher">
        <div className="__container">
          <div className="__left">
            <h1>
              Empowering <span>Publishers</span> with the Tools to Increase
              their Website Revenue
            </h1>

            <p>
              As Publishers, there’s always something more that needs to be
              done....and fast! With our tools and services, find the force
              multipliers you need to boost productivity and accelerate your
              revenue growth.
            </p>

            <div className="__button">
              <button type="button">Get Started for Free</button>
            </div>
          </div>

          <div className="__right">
            <div className="__item-img1">
              <img
                src="https://publishergrowth.com/assets/front/images/revenue1.png"
                alt=""
              />

              <img className="starIcon" src={starIcon} alt="" />
            </div>
            <div className="__item-img">
              <img
                src="https://publishergrowth.com/assets/front/images/revenue2.png"
                alt=""
              />
              <img
                src="https://publishergrowth.com/assets/front/images/revenue3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="__running_publisher">
        <div className="__container">
          <div className="__left">
            <img src={publishers} alt="publishers" />
          </div>

          <div className="__right">
            <h1>Running a Publisher Centric Business?</h1>
            <h2>Find More Customers.</h2>
            <p>
              Your future customers are researching their next purchase on
              PubGrowth. Make sure they can find you!
            </p>

            <div className="__button">
              <button type="button">
                Get Started for Free <i className="bx bx-arrow-back"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="__editor-pick">
        <div className="__container">
          <div className="__heading-bar">
            <div className="__left">
              <h1>Our Editors’ Pick :</h1>
              Browse these amazing publisher monetization tools handpicked by
              our team of editors
            </div>

            <div className="__right">
              <div
                onClick={() => setActive("1")}
                className={`${active === "1" && "__tabs-active"} __tabs`}
              >
                Hosting
              </div>
              <div
                onClick={() => setActive("2")}
                className={`${active === "2" && "__tabs-active"} __tabs`}
              >
                Adtech
              </div>
              <div
                onClick={() => setActive("3")}
                className={`${active === "3" && "__tabs-active"} __tabs`}
              >
                Publishing
              </div>
            </div>
          </div>

          <div className="__slider-box">
            <div className="__swiper-box">
              <Swiper
                spaceBetween={10}
                speed={1200}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Cards item={item} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className="__explore-more">
              <button type="button">
                Explore More <i className="bx bxs-chevrons-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="__testomonial">
        <div className="__container">

          <div className="__heading">
            <h1>
              What our <span>publishers</span> are saying!
            </h1>
            <p>
              Our publishers are excited to share their experience with you!
            </p>
          </div>

          <div className="__public-review">
            <div className="__cards">
              <div className="__rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <div className="__rev">
                <p>
                  The team at Publishergrowth reviewed my site and recommended
                  the ad networks, which helped me double my overall website
                  revenue. Also, the approvals were a breeze. I am particularly
                  excited about their 'sponsored posts' solution since that will
                  be an added revenue for my website.
                </p>
              </div>

              <div className="__user">
                <img
                  src="https://www.masala.com/public/images/2019/11/02/AkshayKumar.jpg"
                  alt="Akshay Kumar"
                />
                <div className="__auther">
                  <h4>Akshay Kumar</h4>
                  <small>Bingee.in</small>
                </div>
              </div>
            </div>

            {/* Second Review */}
            <div className="__cards __cards3">
              <div className="__rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <div className="__rev">
                <p>
                  Publishergrowth connected me with premium ad networks that
                  understood my niche and audience. I saw a 40% increase in
                  revenue within the first month, and their team is always there
                  to provide support. Highly recommended!
                </p>
              </div>

              <div className="__user">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="John Doe"
                />
                <div className="__auther">
                  <h4>John Doe</h4>
                  <small>TechTrends.io</small>
                </div>
              </div>
            </div>

            {/* Third Review */}
            <div className="__cards">
              <div className="__rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <div className="__rev">
                <p>
                  As a new blogger, I struggled to find ad networks that worked
                  for my traffic volume. Thanks to Publishergrowth, I was
                  onboarded with the right networks quickly, and my blog now
                  generates consistent income. Their support has been
                  phenomenal!
                </p>
              </div>

              <div className="__user">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="Jane Smith"
                />
                <div className="__auther">
                  <h4>Jane Smith</h4>
                  <small>MyTravelogue.com</small>
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
