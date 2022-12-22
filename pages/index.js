import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);
  const [thinking, setThinking] = useState(null);
  const [error, setError] = useState(null);

  const apiUrl = "/api/hellokitty";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setThinking(true);
    try {
      const response = await fetch(apiUrl, options);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const data = await response.json();
      setThinking(false);
      setResponse(data);
    } catch (error) {
      setThinking(false);
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    setResponse(null);
    setError(null);
    setMessage(e.target.value);
  };

  return (
    <div className="min-h-screen bg-sky-100	 p-6">
      <Head>
        <title>Ask Kitty</title>
        <meta name="description" content="An openai based project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-6 max-w-screen-md bg-white	 rounded-xl shadow mx-auto">
        <Header />

        <Form handleChange={handleChange} handleSubmit={handleSubmit} />
        <div id="reply" className="flex gap-4 mt-6 ">
          <div className="w-16 ">
            <Image
              src="/assets/catpic.png"
              alt="cavatar"
              width="80"
              height="100"
              className="rounded"
            />
          </div>

          {error ? (
            <div className="text-xl p-4 rounded bg-red-50 text-red-600 flex-1 align-middle">
              {error}
            </div>
          ) : (
            <div className="text-xl p-4 rounded bg-sky-50 text-sky-800 flex-1 align-middle">
              {thinking && (
                <Image
                  src="/assets/loader.svg"
                  alt="loading"
                  width="60"
                  height="20"
                  className="my-2"
                />
              )}
              {response}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
