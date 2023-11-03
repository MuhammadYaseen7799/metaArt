import Link from "next/link";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Blog = () => {
  return (
    <Layout pageTitle={"Blog"}>
      <PageBanner pageName={"Blog Articles"} />

      <div className="metaportal_fn_bloglist">
        <div className="container small">
          <div className="bloglist">
            <ul className="fn-isotope">
              <li className="isotope-item">
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
                        <a>Technology, Power, & You</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link href="https://egfound.org/projects/digital-revolution-technology-power-you/?gclid=Cj0KCQjwi7GnBhDXARIsAFLvH4k3cvV5p9VLae9vjysUOlKjnLjNthpi3wSUrgziIT4LBPO8-Rbs3jIaAtZpEALw_wcB">
                      <a>
                        <img src="/img/blog/a1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  
                </div>
              </li>
              <li className="isotope-item">
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
                        <a>AI and Cyber Security</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link href="https://www.cigionline.org/articles/cyber-security-battlefield/?utm_source=google_ads&utm_medium=grant&gclid=Cj0KCQjwi7GnBhDXARIsAFLvH4nryZ78BZEvLDfkR6qPuhMsmmPuh2p-J9hbnrRhKlfSHUzGDqtADEUaAiuREALw_wcB">
                      <a>
                        <img src="/img/blog/A2.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                 
                </div>
              </li>
              <li className="isotope-item">
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
                        <a>
                        IBM’S AI Chip May Find Use in Generative AI
                        </a>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link href="https://spectrum.ieee.org/analog-ai-ibm">
                      <a>
                        <img src="/img/blog/A4.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>04</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>ARTIFICIAL INTELLIGENCE</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link href="https://spectrum.ieee.org/side-channel-attack">
                        <a>This AI Can Tell What You’re Typing Based on the Sound</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link href="https://spectrum.ieee.org/side-channel-attack">
                      <a>
                        <img src="/img/blog/A3.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                 
                </div>
              </li>
            </ul>
          </div>
          <div className="metaportal_fn_pagination">
            <ul>
              <li>
                <span>1</span>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <span>...</span>
              </li>
              <li>
                <a href="#">77</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
