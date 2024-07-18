import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import Layout from "./components/Layout";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { PiFunction } from "react-icons/pi";
import { IoCalculatorOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoBarChartOutline } from "react-icons/io5";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { IoLockOpenOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { LuEraser } from "react-icons/lu";
import { FiUpload } from "react-icons/fi";
import { Card } from "./components/Card";

export default function Home() {
  const [selectedCardId, setSelectedCardId] = useState(1);

  const cardData = [
    {
      id: 1,
      Icon: BsFileEarmarkBarGraph,
      title: "Charts & Graphs",
      desc: "Create sleek looking data visualizations.",
      imgSrc: "./Landing1.jpg",
    },
    {
      id: 2,
      Icon: GoLightBulb,
      title: "Insights",
      desc: "Ask anything to your data, and get answers",
      imgSrc: "./Landing2.jpg",
    },
    {
      id: 3,
      Icon: PiFunction,
      title: "Advanced Analysis",
      desc: "Perform modeling and predictive forecasting.",
      imgSrc: "./Landing3.jpg",
    },
    {
      id: 4,
      Icon: IoCalculatorOutline,
      title: "Problem Solving",
      desc: "Scan-and-solve math, physics, and chemistry.",
      imgSrc: "./Landing4.jpg",
    },
    {
      id: 5,
      Icon: HiOutlineDocumentReport,
      title: "Reports",
      desc: "Generate polished analyses and summaries.",
      imgSrc: "./Landing5.jpg",
    },
  ];

  const cardData2 = [
    {
      id: 1,
      Icon: IoBarChartOutline,
      title: "Generate sleek visualizations",
      desc: "Communicate findings with confidence.",
    },
    {
      id: 2,
      Icon: AiOutlineFileUnknown,
      title: "Ask data questions",
      desc: "Get answers to your queries in seconds.",
    },
    {
      id: 3,
      Icon: LuEraser,
      title: "Cleaning made effortless",
      desc: "Automate data prep and focus on what matters.",
    },
    {
      id: 4,
      Icon: FiUpload,
      title: "Export instantly",
      desc: "Quickly download data into CSV or Excel for easy sharing.",
    },
    {
      id: 5,
      Icon: BsGraphUp,
      title: "Create captivating animations",
      desc: "Bring data to life with dynamic GIFs.",
    },
    {
      id: 5,
      Icon: IoLockOpenOutline,
      title: "Unlock statistical modeling",
      desc: "Get expert-level insights without the complexity.",
    },
  ];

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  };

  const selectedCard = cardData.find((card) => card.id === selectedCardId);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mx-auto">
        <HeroSection />
        <div className="grid grid-cols-1 gap-4 px-6 md:gap-3 md:grid-cols-10 mt-10 w-full md:w-[60%] cursor-pointer">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={` ${
                card.id === selectedCardId
                  ? "bg-gray-100 rounded-md"
                  : "bg-white rounded-md border border-gray-200"
              } flex col-span-2 cursor-pointer`}
              onClick={() => handleCardClick(card.id)}
            >
              <Card Icon={card.Icon} title={card.title} desc={card.desc} />
            </div>
          ))}
        </div>
        {selectedCard && (
          <div className="border border-gray-100 rounded-lg shadow-md w-[90%] lg:w-[57%] m-2 overflow-hidden ">
            <img src={selectedCard.imgSrc} alt={selectedCard.title} />
          </div>
        )}
        <div className="text-center items-center justify-center">
          <p className="text-2xl font-semibold mt-20">
            Save time. Make Julius do your data work.
          </p>
          <p className="text-gray-600 font-light">
            Turn hours of Excel into minutes on Julius.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-4 md:gap-y-8 md:w-[63%] lg:grid-cols-12 mt-10">
          {cardData2.map((card) => (
            <div className="col-span-4 border rounded-xl p-4 md:w-[90%] md:mx-auto flex justify-center">
              <Card
                Icon={card.Icon}
                title={card.title}
                desc={card.desc}
                showLink={false}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center w-full bg-slate-100 mt-20 gap-y-2 p-24 ">
          <p className="text-3xl font-semibold">
            Supercharge your data analysis
          </p>
          <p className="font-light text-gray-600 text-sm">
            With Julius, you can get the most out of your data.
          </p>
          <div className="flex mt-5 justify-around gap-x-2 lg:w-[17%]">
            <button className="text-white bg-blue-600 text-xs p-2 rounded-md px-5">
              Get Started
            </button>
            <button className="text-xs bg-white p-2 rounded-md px-5 border border-gray-200">
              See Use Cases
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 lg:px-80 justify-start mt-10 gap-y-1">
        <p className="text-2xl font-semibold">Frequently asked questions</p>
        <p className="text-sm font-light text-gray-500">
          If you have anything else you want to ask,{" "}
          <span className="underline cursor-pointer">reach out to us.</span>
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4 ">
          <div className="col-span-1 md:col-span-6">
            <p className="font-semibold">How do I link a data source?</p>
            <p className="text-xs text-gray-500 font-light mt-2">
              You can link a data source on the Files page or directly in our
              Chat interface. For more detailed instructions on linking a data
              source, check out our Julius Start Guide.
            </p>
          </div>
          <div className="col-span-1 md:col-span-6">
            <p className="font-semibold">
              Can I analyze spreadsheets with multiple tabs?
            </p>
            <p className="text-xs text-gray-500 font-light mt-2">
              Yes! Upload your multi-tab spreadsheet as you would any other
              file. Once uploaded, you can refer to the individual names of the
              tabs in your prompts, and Julius will perform analysis on those
              tabs accordingly.
            </p>
          </div>
          <div className="col-span-1 md:col-span-6">
            <p className="font-semibold">
              What is Julius’ data privacy policy?
            </p>
            <p className="text-xs text-gray-500 font-light mt-2">
              We utilize strict access-control, as each user only has access to
              their own data in the secure notebook file storage — even our
              python code execution environments are sandboxed by user. In
              addition, your data is completely erased from the servers whenever
              you delete it within the app. You can read further into our data
              policies here.
            </p>
          </div>
          <div className="col-span-1 md:col-span-6">
            <p className="font-semibold">
              What do I do after linking a data source?
            </p>
            <p className="text-xs text-gray-500 font-light mt-2">
              After linking a data source, you can analyze it with natural
              language prompting on the Chat page — try asking for insights or
              directing Julius to create a visualization. For some additional
              examples on how to use Julius, check out our Use Cases section.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
