import Link from "next/link";
const News = () => {
  return (
    <section id="news">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Latest Articles"
          data-align="center"
        >
          Latest Articles
        </h3>
        {/* News Shotcode */}
        <div className="fn_cs_news">
          <div className="news_part">
            <div className="left_items">
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>01</span>
                  </span>
                </div>
                <div className="meta">
                  <p>August 09, 2022 / Digital Revolution</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="https://egfound.org/projects/digital-revolution-technology-power-you/?gclid=Cj0KCQjwi7GnBhDXARIsAFLvH4k3cvV5p9VLae9vjysUOlKjnLjNthpi3wSUrgziIT4LBPO8-Rbs3jIaAtZpEALw_wcB">
                       Technology, Power, & You
                    </Link>
                  </h3>
                </div>
                <div className="image">
                  <Link href="https://egfound.org/projects/digital-revolution-technology-power-you/?gclid=Cj0KCQjwi7GnBhDXARIsAFLvH4k3cvV5p9VLae9vjysUOlKjnLjNthpi3wSUrgziIT4LBPO8-Rbs3jIaAtZpEALw_wcB">

                    <img src="/img/blog/a1.jpg" alt="" />

                  </Link>
                </div>
                
              </div>
            </div>
            <div className="right_items">
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>02</span>
                  </span>
                </div>
                <div className="meta">
                  <p>ARTIFICIAL INTELLIGENCE, BIG DATA, SECURITY</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="https://www.cigionline.org/articles/cyber-security-battlefield/?utm_source=google_ads&utm_medium=grant&gclid=Cj0KCQjwi7GnBhDXARIsAFLvH4nryZ78BZEvLDfkR6qPuhMsmmPuh2p-J9hbnrRhKlfSHUzGDqtADEUaAiuREALw_wcB">
                      AI and Cyber Security
                    </Link>
                  </h3>
                </div>
                
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>03</span>
                  </span>
                </div>
                <div className="meta">
                  <p>ARTIFICIAL INTELLIGENCE</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="https://spectrum.ieee.org/analog-ai-ibm">
                      IBM’S AI Chip May Find Use in Generative AI
                    </Link>
                  </h3>
                </div>
                
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>04</span>
                  </span>
                </div>
                <div className="meta">
                  <p>August 09, 2022 / MetaVerse / 4 Comments</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="https://spectrum.ieee.org/side-channel-attack">
                      This AI Can Tell What You’re Typing Based on the Sound
                    </Link>
                  </h3>
                </div>
                
              </div>
            </div>
          </div>
          <div className="bottom_part">
            <div className="left_bot">
              <Link href="/blog" className="metaportal_fn_button full">

                <span>Read All Articles</span>

              </Link>
            </div>
            
          </div>
        </div>
        {/* !News Shotcode */}
      </div>
    </section>
  );
};
export default News;
