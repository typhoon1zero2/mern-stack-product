// import {
//   AiTwotoneMail,
//   AiOutlineLinkedin,
//   AiOutlineGithub,
// } from "react-icons/ai";

export default function Footer(props) {
  return (
    <div className="footer">
      <div>
        <div className="footer-content">
          <h3
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "2em",
            }}
          >
           <em>Japanese</em> Classic Cars
          </h3>
          <p className="phong">Japanese Classic Cars is a registered company under typhoong LLC.</p>
          <br />
          <div className="sub">
            <div>
              <b>Company</b>
              <p>About</p>
              <p>Blog</p>
            </div>
            <div>
              <b>Get Help</b>
              <p>Order Status</p>
              <p>Returns</p>
            </div>
            <div>
              <b>About typhoon</b>
              <p>News</p>
              <p>Careers</p>
            </div>
            <div>
              <b>For You</b>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
            </div>
            <div>
              <b>Contacts links</b>
              <div>
               
                  <h2>
                    {" "}
                    <a href="https://github.com/typhoon1zero2">
                      github
                    </a>
                  </h2>
               
               
                  <h2>
                    {" "}
                    <a
                      class="link-secondary"
                      href="mailto:ptnguyen617@yahoo.com"
                    >
                      mailto
                    </a>
                  </h2>
               
               
                  <h2>
                    <a
                      class="link-secondary"
                      href="https://www.linkedin.com/in/phong-nguyen-b9520b22b/"
                    >
                     linkedin
                    </a>
                  </h2>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
