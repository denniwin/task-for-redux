import React from "react";

const About = () => {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">About Me</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">Hi, my name is Den</p>
          <div className="d-flex flex-wrap justify-content-center gap-2 mx-auto mb-5">
            <img
              src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
              alt="html5"
            />
            <img
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              alt="js"
            />
            <img
              src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"
              alt="sass"
            />
            <img
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="react"
            />
            <img
              src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
              alt="reactrouter"
            />
            <img
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
              alt="ts"
            />
            <img
              src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
              alt="redux"
            />
            <img
              src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
              alt="php"
            />
            <img
              src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="tailwindcss"
            />
            <img
              src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white"
              alt="chakraui"
            />
            <img
              src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
              alt="bootstrap"
            />
            <img
              src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
              alt="git"
            />
            <img
              src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
              alt="vite"
            />
            <img
              src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
              alt="vercel"
            />
            <img
              src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white"
              alt="swagger"
            />
          </div>
          <div>
            {" "}
            <button
              type="button"
              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            >
              <i
                className="fa fa-github"
                style={{ color: "white", marginRight: 10 }}
                aria-hidden="true"
              ></i>
              GitHub
            </button>
            <a href="https://career.habr.com/denis13123" target='_blank' className="btn btn-outline-light btn-lg px-4" rel="noreferrer">
              Habr.career CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
