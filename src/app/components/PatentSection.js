"use client";
import { useState } from "react";
import Image from "next/image";

const GlobalPatentSection = () => {
  const [cards, setCards] = useState([
    {
      id: "01",
      number: "22-232002",
      description:
        "The invention enables users to search using emoticons within a chat interface and share search results with chat partners.",
    },
    {
      id: "02",
      number: "22-255690",
      description:
        "System and method for object search based on color sentiment, using an integrated color and emotion data model.",
    },
    {
      id: "03",
      number: "21-2806896",
      description:
        "Search system preferences based on a chosen field, allowing search using both objective and subjective properties.",
    },
    {
      id: "04",
      number: "21-2918378",
      description:
        "Search service using emoticons with a user terminal and search server, enabling search result display and sharing within the chat window.",
    },
    {
      id: "05",
      number: "21-2030415",
      description:
        "Search system using object properties, employing an algorithm to extract and suggest keywords, completing sentences based on user preferences.",
    },
    {
      id: "06",
      number: "21-2057089",
      description:
        "Color-sensitive object search system utilizing an integrated color and emotion data attribute model algorithm.",
    },
    {
      id: "07",
      number: "21-2066031",
      description:
        "Search method using property language automatically generates keywords by analyzing co-occurring words.",
    },
    {
      id: "08",
      number: "21-3229725",
      description:
        "Enables displaying search results in the chat window using graphical objects and sharing the search interface with chat partners.",
    },
    {
      id: "09",
      number: "21-3241256",
      description:
        "User terminal and retrieval server allow emoticon-based search, displaying results in chat and enabling interface sharing.",
    },
    {
      id: "10",
      number: "21-3295073",
      description:
        "Voice input system and method provide relevant information based on voice inputs, improving user interaction.",
    },
    {
      id: "11",
      number: "21-3206797",
      description:
        "Recommend items based on locations using Neurolinx, enhancing personalized suggestions for hotels and more.",
    },
    {
      id: "12",
      number: "21-3337853",
      description:
        "Algorithm automatically builds Neurolinx by analyzing frequently co-occurring words, enhancing information provision.",
    },
  ]);

  const loadMore = (event) => {
    event.preventDefault();
    const currentCardsCount = cards.length;
    const maxCardsCount = 18;
    if (currentCardsCount >= maxCardsCount) return;

    const newCards = Array.from(
      { length: Math.min(3, maxCardsCount - currentCardsCount) },
      (_, i) => {
        const newId = String(currentCardsCount + i + 1).padStart(2, "0");
        return {
          id: newId,
          number: `21-3${newId}XXXXX`,
          description: `Description for patent number ${newId}.`,
        };
      }
    );

    setCards([...cards, ...newCards]);
  };

  const handlePatentApplications = (event) => {
    event.preventDefault();
    setCards(cards.slice(0, 6).map((card) => ({ ...card, showIcon: false })));
  };

  const handlePatents = (event) => {
    event.preventDefault();
    setCards(cards.map((card) => ({ ...card, showIcon: true })));
  };

  return (
    <div className="bg-center bg-no-repeat bg-cover lg:py-24 bg-patent">
      <div className="container px-5 mx-auto xl:px-0">
        <h2
          data-aos="fade-down"
          className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Global Patent
          <span className="block"></span>Portfolios
        </h2>
        <div
          data-aos="fade-up"
          className="p-6 rounded-lg md:p-12 bg-gd-tertiary"
        >
          <h3 className="mb-6 text-xl font-medium md:mb-12 md:text-2xl text-w-500">
            Patents 32 &amp; Patent Applications 88 across the world.
          </h3>
          <Image
            src="/img/patent-graph.png"
            alt="patent-graph"
            width={1290}
            height={573}
          />
        </div>
        <div
          data-aos="fade-up"
          className="flex justify-center gap-3 mt-16 mb-12"
        >
          <a
            href="#"
            className="px-6 py-[14px] rounded-full border border-tropical-indigo text-base font-medium bg-transparent text-tropical-indigo"
            onClick={handlePatents}
          >
            Patents
          </a>
          <a
            href="#"
            className="px-6 py-[14px] rounded-full border border-b-600 text-base font-medium bg-transparent text-w-100"
            onClick={handlePatentApplications}
          >
            Patents Applications
          </a>
        </div>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl font-semibold gd-title">
                  {card.id}
                </span>
                {card.showIcon !== false && (
                  <div className="p-4 border rounded-full border-tropical-indigo bg-gd-secondary">
                    <Image
                      src="/img/icons/check-rounded.svg"
                      alt="check rounded"
                      width={24}
                      height={24}
                    />
                  </div>
                )}
              </div>
              <h3 className="mt-12 mb-4 text-2xl font-medium text-w-500">
                Patent No. {card.number}
              </h3>
              <p className="text-base text-w-100">{card.description}</p>
            </div>
          ))}
        </div>
        <div
          data-aos="fade-up"
          className="flex items-center justify-center mt-6 md:mt-12"
        >
          <a
            href="#"
            className="px-6 py-[14px] rounded-full border border-tropical-indigo text-base font-medium text-w-900 bg-gd-secondary"
            onClick={loadMore}
          >
            Load More
          </a>
        </div>
      </div>
    </div>
  );
};

export default GlobalPatentSection;
