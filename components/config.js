import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./LearningOptions";

const config = {
  initialMessages: [
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: "rgb(142, 102, 180)",
    },
    chatButton: {
      backgroundColor: "rgb(142, 102, 180)",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    // {
    //     widgetName: "javascriptLinks",
    //     widgetFunc: (props) => <LinkList {...props} />,
    //     props: {
    //       options: [
    //         {
    //           text: "Introduction to JS",
    //           url:
    //             "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
    //           id: 1,
    //         },
    //         {
    //           text: "Mozilla JS Guide",
    //           url:
    //             "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    //           id: 2,
    //         },
    //         {
    //           text: "Frontend Masters",
    //           url: "https://frontendmasters.com",
    //           id: 3,
    //         },
    //       ],
    //     },
    //   },
  ],
}

export default config