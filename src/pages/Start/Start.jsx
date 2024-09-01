import {
  Plus,
  Contrast,
  Discord,
  Enlarge,
  Logout2,
  Flash,
  Limitations,
  Logout1,
} from "../../utils/icons.util";
import { useState } from "react";
import { Sidebar } from "../Component/Sidebar";
import { Footer } from "../Component/Footer";

export function Start() {
  const [check, setCheck] = useState(false);
  const toggleCheck = () => {
    setCheck(!check);
  };

  const items = [
    {
      icon: <Plus />,
      text: "New chat",
      backgroundColor: "transparent",
      icons: [""],
    },
  ];

  const options = [
    { icon: <Contrast />, text: "Light mode" },
    { icon: <Discord />, text: "OpenAI Discord" },
    { icon: <Enlarge />, text: "Updates & FAQ" },
    { icon: <Logout1 />, text: "Log out" }
  ];
  return (
    <div className="flex relative">
      <div
        className="absolute right-[10px] top-[20px]  cursor-pointer z-10"
        onClick={() => toggleCheck()}
      >
        <Logout2 />
      </div>
      <Sidebar check={check} items={items} options={options} link="/main" />
      <div className="page w-full lg:w-4/5 flex flex-col justify-between min-h-[100vh] bg-[#343541] lg:px-12 py-4 flex-grow-[5]">
        <div className="text text-[#FFFFFF] px-3">
          <h1 className="text-center text-4xl mb-4 pt-10">ChatGPT</h1>
          <div className="informations flex flex-wrap gap-4">
            <div className="box flex-1">
              <div className="icons-box flex flex-col items-center pb-2">
                <div className="icon pb-2">
                  <Contrast />
                </div>
                Examples
              </div>
              <div className="text-box text-[13px] bg-[#444654] p-2 rounded mb-2">
                <p>“Explain quantum computing in simple terms” →</p>
              </div>
              <div className="text-box text-[13px] bg-[#444654] p-2 rounded mb-2">
                <p>“Got any creative ideas for a 10 year old’s birthday?” →</p>
              </div>
              <div className="text-box text-[13px] bg-[#444654] p-2 rounded mb-2">
                <p>“How do I make an HTTP request in Javascript?” →</p>
              </div>
            </div>
            <div className="box flex-1">
              <div className="icons-box flex flex-col items-center pb-2">
                <div className="icon pb-2">
                  <Flash />
                </div>
                Capabilities
              </div>
              <div className="text-box text-[13px] bg-[#444654] p-2 rounded mb-2">
                <p>Remembers what user said earlier in the conversation</p>
              </div>
              <div className="text-box text-[13px] bg-[#444654] p-2 rounded mb-2">
                <p>Allows user to provide follow-up corrections</p>
              </div>
              <div className="text-box text-[13px] bg-[#444654] p-2 rounded mb-2">
                <p>Trained to decline inappropriate requests</p>
              </div>
            </div>
            <div className="box flex-1">
              <div className="icons-box flex flex-col items-center pb-2">
                <div className="icon pb-2">
                  <Limitations />
                </div>
                Limitations
              </div>
              <div className="text-box text-[13px] bg-[#444654] p-2 rounded mb-2">
                <p>May occasionally generate incorrect information</p>
              </div>
              <div className="text-box text-[13px] bg-[#444654] p-2 rounded mb-2">
                <p>
                  May occasionally produce harmful instructions or biased
                  content
                </p>
              </div>
              <div className="text-box text-[13px] bg-[#444654] p-2 rounded mb-2">
                <p>Limited knowledge of world and events after 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
