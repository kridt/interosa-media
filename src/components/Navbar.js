import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  return (
    <nav>
      <ul>
        <div className="imgLogo">
          <Link to={"/"}>
            <img src="/logo.jpg" alt="placeholder" />
          </Link>
        </div>
        <div className="navigation">
          <li>
            <Link to={"/"}> Home</Link>
          </li>
        </div>
        <div className="socials">
          <li>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://www.linkedin.com/company/interosamedia/"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://www.facebook.com/interosamedia"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://www.instagram.com/interosamedia/"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>

          <a
            className="btn"
            target={"_blank"}
            rel={"noreferrer"}
            href={`https://calendly.com/interosamedia/discovery-call-15-min?month=${year}-${month}`}
          >
            book a discovery call
          </a>
        </div>
      </ul>
    </nav>
  );
}
