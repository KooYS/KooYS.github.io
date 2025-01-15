// components/CodePre.js
"use client";
import { useState, useRef } from "react";
import hljs from "highlight.js";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const Pre: React.FC<Props> = ({ children }) => {
  const textInput = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput.current?.textContent || "");
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  React.useEffect(() => {
    if (textInput.current) {
      hljs.highlightBlock(textInput.current);
    }
  }, [children]);

  return (
    <div className="my-8 bg-zinc-900 rounded-lg border border-gray-700">
      {/* Toolbar/Header with Copy Button */}
      <div className="flex justify-between items-center p-2 bg-neutral-800 rounded-t-lg">
        <span className="text-xs font-semibold text-gray-400">Code Block</span>
        <button
          aria-label="Copy code"
          className={`h-8 w-8 rounded p-1 ${
            copied
              ? "border-green-400 focus:border-green-400 focus:outline-none"
              : "border-gray-600"
          }`}
          onClick={onCopy}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className={copied ? "text-green-400" : "text-gray-300"}
          >
            {copied ? (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </>
            ) : (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Code Block */}
      <pre ref={textInput}>{children}</pre>
    </div>
  );
};

export default Pre;
