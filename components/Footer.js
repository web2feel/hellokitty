import React from "react";

function Footer() {
  return (
    <>
      <p className="my-4 text-sm text-center text-gray-400">
        An{" "}
        <a href="http://openai.com" target="_blank" rel="noopener noreferrer">
          {" "}
          OpenAI{" "}
        </a>
        project. Built with NextJS <br />
        By Jinson Abraham
      </p>
    </>
  );
}

export default Footer;
