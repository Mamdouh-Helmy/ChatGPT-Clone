// components/Footer.js
import { Send } from "../../utils/icons.util";

export function Footer() {
  return (
    <div className="input-text pb-0 px-2 lg:px-20">
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
                Research Preview. Our goal is to make AI systems more natural
                and safe to interact with. Your feedback will help us improve.
              </p>
            </div>
          </div>
  );
}
