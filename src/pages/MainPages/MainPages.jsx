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
  Send,
  Refresh,
  Delete,
  Message,
  Vector,
} from "../../utils/icons.util";
import { useState } from "react";

export function MainPages() {
  const [check, setCheck] = useState(false);
  const toggleCheck = () => {
    setCheck(!check);
  };
  return (
    <div className="flex relative">
      <div
        className="absolute right-[10px] top-[20px]  cursor-pointer z-10"
        onClick={() => toggleCheck()}
      >
        <Logout2 />
      </div>
      <div
        className={`nav bg-[#202123] min-h-[100vh] lg:w-[20%]  p-1 flex fixed w-[40%]" ${
          check && "lg:left-[-1000px]"
        }`}
      >
        <div className="flex flex-col justify-between w-[100%]">
          <div>
            <div className="new-chat text-[13px] border border-[#444654] text-[#FFFFFF] rounded flex items-center gap-2 px-3 mt-2 py-2 cursor-pointer">
              <div className="icon-plus">
                <Plus />
              </div>
              New chat
            </div>
            <div className="new-chat bg-[#343540] text-[13px] border border-[#343540] text-[#FFFFFF] rounded flex items-center gap-2 px-3 py-3 mt-2 cursor-pointer">
              <div className="icon-left">
                <Message />
              </div>
              Chatbot definition expl
              <div className="icon-right flex gap-2">
                <Vector />
                <Delete color={"#C5C5D1"} />
              </div>
            </div>
          </div>
          <div className="options mt-1 border-t border-[#444654]">
            <div className="icons-options text-[13px] flex items-center text-[#FFFFFF] gap-2 px-2 py-3 cursor-pointer">
              <div className="icon">
                <Delete />
              </div>
              Clear conversations
            </div>
            <div className="icons-options text-[13px] flex items-center text-[#FFFFFF] gap-2 px-2 py-3 cursor-pointer">
              <div className="icon">
                <Contrast />
              </div>
              Light mode
            </div>
            <div className="icons-options text-[13px] flex items-center text-[#FFFFFF] gap-2 px-2 py-3 cursor-pointer">
              <div className="icon">
                <Discord />
              </div>
              OpenAI Discord
            </div>
            <div className="icons-options text-[13px] flex items-center text-[#FFFFFF] gap-2 px-2 py-3 cursor-pointer">
              <div className="icon">
                <Enlarge />
              </div>
              Updates & FAQ
            </div>
            <div className="icons-options text-[13px] flex items-center text-[#FFFFFF] gap-2 px-2 py-3 cursor-pointer">
              <div className="icon">
                <Logout1 />
              </div>
              Log out
            </div>
          </div>
        </div>
      </div>
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
        <div className="input-text pt-10 pb-0 px-2 lg:px-20">
          <div className="regenerate p-2 cursor-pointer text-[13px] gap-2 mb-3 flex items-center justify-center w-fit my-0 mx-auto text-[#C5C5D1] border-[1px] border-solid border-[#444654] rounded-[3px]">
            <div className="icon ">
              <Refresh />
            </div>
            Regenerate response
          </div>
          <div className="input w-[100%] bg-[#40414E] p-2 flex items-center border-[1px] border-solid border-[#303139] rounded-[4px]">
            <input
              type="text"
              className="w-[100%] text-white outline-none border-none bg-#40414E bg-transparent"
            />
            <div className="icon cursor-pointer">
              <Send />
            </div>
          </div>
          <div className="text-footer pt-2">
            <p className="text text-[#9A9B9F] text-[14px] text-center">
              <span className="underline">ChatGPT Jan 9 Version.</span> Free
              Research Preview. Our goal is to make AI systems more natural and
              safe to interact with. Your feedback will help us improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
