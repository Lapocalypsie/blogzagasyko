"use client";
import React from "react";
import Head from "next/head";
import { toast } from "@/components/ui/use-toast";
import { sendEmail } from "@/app/components/server/sendEmail";

const Page = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(name, email, message);

    const data = { name, email, message };

    try {
      const result = await sendEmail(data);
      if (!result.success) {
        toast({
          variant: "destructive",
          title: "Message non envoyé",
          description:
            "Le formulaire de contact est actuellement désactivé, contactez-nous via notre email.",
        });
      } else {
        toast({
          variant: "success",
          title: "Message bien envoyé",
          description:
            "Votre message a bien été envoyé, nous vous répondrons dans les plus brefs délais.",
        });
        // Reset the form after handling the result
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending email: ", error);
      toast({
        variant: "destructive",
        title: "Message non envoyé",
        description:
          "Le formulaire de contact est actuellement désactivé, contactez-nous via notre email.",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Contact - Za Gasy Ko</title>
        <meta
          name="description"
          content="Contactez Za Gasy Ko pour plus de renseignements ou pour nous soutenir dans nos actions caritatives."
        />
        <meta
          name="keywords"
          content="contact, Za Gasy Ko, association caritative, aide, Madagascar"
        />
        <meta property="og:title" content="Contact - Za Gasy Ko" />
        <meta
          property="og:description"
          content="Contactez Za Gasy Ko pour plus de renseignements ou pour nous soutenir."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zagasyko.com/contact" />
        <meta property="og:image" content="/Logo.svg" />
        <link rel="canonical" href="https://zagasyko.com/contact" />
      </Head>
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          Contact
        </h1>
        <div className="text-center">
          <p className="text-lg">Aidez-nous à aider !</p>
        </div>
        <div className="grid my-10 md:grid-cols-2">
          <div className="my-10">
            <h2 className="text-2xl font-semibold dark:text-white">
              Contactez Za Gasy Ko
            </h2>
            <p className="max-w-sm mt-5">
              Besoin de plus de renseignements ? N&apos;hésitez pas à nous
              contacter.
            </p>
            <div className="mt-5">
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  ></path>
                </svg>
                <span>38 rue de Naples, 49300, Cholet, France</span>
              </div>
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  ></path>
                </svg>
                <a href="mailto:zagasyko@gmail.com">
                  zanakagasykoloina@gmail.com
                </a>
              </div>
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400"></div>
            </div>
          </div>
          <div>
            <form className="my-10">
              <input
                type="checkbox"
                id="botcheck"
                className="hidden"
                name="botcheck"
              />
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Votre nom et prénom"
                  autoComplete="off"
                  className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  name="name"
                  value={name}
                  onChange={handleName}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email_address" className="sr-only">
                  Adresse Email
                </label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="mail@gmail.com"
                  autoComplete="off"
                  className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Votre message"
                  value={message}
                  className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  //@ts-ignore
                  onChange={handleMessage}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black"
                onClick={handleSubmit}
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
