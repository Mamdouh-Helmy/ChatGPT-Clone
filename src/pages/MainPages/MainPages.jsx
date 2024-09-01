/* eslint-disable react/jsx-key */
import {
  Plus,
  Contrast,
  Discord,
  Enlarge,
  Logout1,
  Logout2,
  AvatarUser,
  AvatarChatGPT,
  Like,
  Dislike,
  Refresh,
  Delete,
  Message,
  Vector,
} from "../../utils/icons.util";
import { useState } from "react";
import { Sidebar } from "../Component/Sidebar";
import { Footer } from "../Component/Footer";

export function MainPages() {
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
    {
      icon: <Message />,
      text: "Chatbot definition expl",
      backgroundColor: "#343540",
      icons: [<Vector />, <Delete color={"#C5C5D1"} />],
    },
  ];

  const options = [
    { icon: <Delete />, text: "Clear conversations" },
    { icon: <Contrast />, text: "Light mode" },
    { icon: <Discord />, text: "OpenAI Discord" },
    { icon: <Enlarge />, text: "Updates & FAQ" },
    { icon: <Logout1 />, text: "Log out" },
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
      <div className="page w-full lg:w-4/5 flex flex-col justify-between min-h-[100vh] bg-[#343541]  py-4 flex-grow-[5]">
        <div className="text text-[#FFFFFF] ">
          <div className="box text-[13px] flex lg:px-20 px-2 gap-4 mt-2">
            <div className="icon">
              <AvatarUser />
            </div>
            <div className="text-box">What is a Chatbot?</div>
          </div>
          <div className="box text-[13px] flex lg:px-20 px-2  gap-4 mt-6 py-3 lg:py-8 bg-[#444654] border-[1px] border-solid border-[#32343A]">
            <div className="icon">
              <AvatarChatGPT />
            </div>
            <div className="text-box">
              A chatbot is a computer program that simulates human conversation
              through voice commands or text chats or both. It can be integrated
              with various messaging platforms like Facebook Messenger,
              WhatsApp, WeChat, etc. and can be used for a variety of purposes,
              such as customer service, entertainment, and e-commerce.
            </div>
            <div className="check flex gap-2">
              <div className="icon cursor-pointer">
                <Like />
              </div>
              <div className="icon cursor-pointer">
                <Dislike />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="regenerate p-2 cursor-pointer text-[13px] gap-2 mb-3 flex items-center justify-center w-fit my-0 mx-auto text-[#C5C5D1] border-[1px] border-solid border-[#444654] rounded-[3px]">
            <div className="icon ">
              <Refresh />
            </div>
            Regenerate response
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}
