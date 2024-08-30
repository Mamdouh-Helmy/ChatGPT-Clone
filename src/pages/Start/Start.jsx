import { Link } from "react-router-dom";
import {
  Plus,
  Contrast,
  Discord,
  Enlarge,
  Logout,
  Flash,
  Limitations,
  Send,
} from "../../utils/icons.util";

export function Start() {
  return (
    <div className="flex">
      <div className="nav bg-[#202123] min-h-[100vh] w-[20%]  flex flex-col justify-between p-1 lg:flex  hidden ">
        <div>
          <Link to="/main">
            <div className="new-chat text-[13px] border border-[#444654] text-[#FFFFFF] rounded flex items-center gap-2 p-2 mt-2 cursor-pointer">
              <div className="icon-plus">
                <Plus />
              </div>
              New chat
            </div>
          </Link>
        </div>
        <div className="options mt-1 border-t border-[#444654]">
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
              <Logout />
            </div>
            Log out
          </div>
        </div>
      </div>
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
        <div className="input-text pt-10 pb-0 md:pb-5 px-3">
          <div className="input w-[100%] bg-[#40414E] p-2 flex items-center border-[1px] border-solid border-[#303139] rounded-[4px]">
            <input
              type="text"
              className="w-[100%] text-white outline-none border-none bg-#40414E bg-transparent"
            />
            <Send />
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
