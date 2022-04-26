import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";


export default function footer() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <meta
          name="viewpoint"
          content="width=device-width, initial-scale=1.0"
        />
        <title>My Products Website</title>
        <link rel="stylesheet" href="/css/app.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
          crossOrigin="anonymous"
        ></link>
      </head>
      <body>
        <footer class="container py-5">
          <div class="row">
            <div class="col-12 col-md">
              <small class="d-block mb-3 text-muted">
                © Phong Nguyen 2021-2022
              </small>

              <div></div>
            </div>
            <div class="col-6 col-md">
              <h5>Contact</h5>
              <ul class="list-unstyled text-small">
                <li>
                 <AiFillGithub />
                  <a
                    class="link-secondary"
                    href="https://www.linkedin.com/in/phong-nguyen-b9520b22b/"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                <AiOutlineMail />
                  <a class="link-secondary" href="mailto:ptnguyen617@yahoo.com">
                    ptnguyen617@yahoo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
