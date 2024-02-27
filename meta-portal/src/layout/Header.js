import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ walletToggle, navigationToggle }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">
            {/* <div className="trigger" onClick={() => navigationToggle(true)}> */}
            <div
              style={{
                borderRadius: "20%",
                background: "white",
                padding: "5px", // Adjust the padding as needed
              }}
            >
              <IconButton
                style={{ fontSize: "4rem", color: "purple" }} // Adjust the fontSize as needed
                onClick={() => navigationToggle(true)}
              >
                <MenuIcon />
              </IconButton>
            </div>

            {/* </div> */}
            <div className="logo">
              <Link href="/">
                <img src="/img/logo.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul
              style={{
                fontFamily: "Montserrat, sans-serif", // Add this line to set the font
              }}
            >
              <li>
                <a href="/#home" onClick={() => navigationToggle(false)}>
                  <span
                    className="creative_link"
                    style={{
                      fontFamily: "Montserrat, sans-serif", // Add this line to set the font
                    }}
                  >
                    Home
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="/#about"
                  className="creative_link"
                  onClick={() => navigationToggle(false)}
                >
                  <span className="creative_link">Plans</span>
                </a>
              </li>
              <li>
                <a
                  href="/#collection"
                  className="creative_link"
                  onClick={() => navigationToggle(false)}
                >
                  <span className="creative_link">Collection</span>
                </a>
              </li>
              <li>
                <a
                  href="/#news"
                  className="creative_link"
                  onClick={() => navigationToggle(false)}
                >
                  <span className="creative_link">Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="creative_link"
                  onClick={() => navigationToggle(false)}
                >
                  <span className="creative_link">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  Header
);
