import { BsChatDots, BsTelephone } from "react-icons/bs";
import { PiUsers } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { faker } from "@faker-js/faker";
import { GoGear } from "react-icons/go";

import React from "react";
// import {
//   ChatCircleDots,
//   Gear,
//   GearSix,
//   Phone,
//   SignOut,
//   User,
//   Users,
// } from "phosphor-react";




const Nav_Buttons = [
  {
    index: 0,
    icon: BsChatDots,
    name:'chat'
  },
  {
    index: 1,
    icon: PiUsers,
    name:'group'
  },
  {
    index: 2,
    icon: BsTelephone,
    name:'call'
  },
];

const Nav_Setting = [
  {
    index: 3,
    icon: GoGear,
    name:'setting'
  },
];

// const ChatList = [
//   {
//     id: 0,
//     img: faker.image.avatar(),
//     name: faker.name.firstName(),
//     msg: faker.music.songName(),
//     time: "9:36",
//     unread: 0,
//     pinned: true,
//     online: true,
//   },
//   {
//     id: 1,
//     img: faker.image.avatar(),
//     name: faker.name.firstName(),
//     msg: faker.music.songName(),
//     time: "12:02",
//     unread: 2,
//     pinned: true,
//     online: false,
//   },
//   {
//     id: 2,
//     img: faker.image.avatar(),
//     name: faker.name.firstName(),
//     msg: faker.music.songName(),
//     time: "10:35",
//     unread: 3,
//     pinned: false,
//     online: true,
//   },
//   {
//     id: 3,
//     img: faker.image.avatar(),
//     name: faker.name.firstName(),
//     msg: faker.music.songName(),
//     time: "04:00",
//     unread: 0,
//     pinned: false,
//     online: true,
//   },
//   {
//     id: 4,
//     img: faker.image.avatar(),
//     name: faker.name.firstName(),
//     msg: faker.music.songName(),
//     time: "08:42",
//     unread: 0,
//     pinned: false,
//     online: false,
//   },
//   {
//     id: 5,
//     img: faker.image.avatar(),
//     name: faker.name.firstName(),
//     msg: faker.music.songName(),
//     time: "08:42",
//     unread: 0,
//     pinned: false,
//     online: false,
//   },
//   {
//     id: 6,
//     img: faker.image.avatar(),
//     name: faker.name.firstName(),
//     msg: faker.music.songName(),
//     time: "08:42",
//     unread: 0,
//     pinned: false,
//     online: false,
//   },
//   {
//     id: 7,
//     img: faker.image.avatar(),
//     name: faker.name.firstName(),
//     msg: faker.music.songName(),
//     time: "08:42",
//     unread: 0,
//     pinned: false,
//     online: false,
//   },
// ];

const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.urlLoremFlickr({ category: 'cats' }),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
];

// const Message_options = [
//   {
//     title: "Reply",
//   },
//   {
//     title: "React to message",
//   },
//   {
//     title: "Forward message",
//   },
//   {
//     title: "Star message",
//   },
//   {
//     title: "Report",
//   },
//   {
//     title: "Delete Message",
//   },
// ];

// const Shared_links = [
//   {
//     preview: faker.image.cats(),
//     title: 'Meow Meow',
//     link: 'https://www.youtube.com/'
//   },
//   {
//     preview: faker.image.cats(),
//     title: 'Meow Meow',
//     link: 'https://www.youtube.com/'
//   },
//   {
//     preview: faker.image.cats(),
//     title: 'Meow Meow',
//     link: 'https://www.youtube.com/'
//   },
//   {
//     preview: faker.image.cats(),
//     title: 'Meow Meow',
//     link: 'https://www.youtube.com/'
//   },
//   {
//     preview: faker.image.cats(),
//     title: 'Meow Meow',
//     link: 'https://www.youtube.com/'
//   },
//   {
//     preview: faker.image.cats(),
//     title: 'Meow Meow Meow Meow Mwoe',
//     link: 'https://www.youtube.com/'
//   },
  
// ];

// const Shared_docs = [
//   {
//     type: "msg",
//     subtype: "doc",
//     message: "Yes sure, here you go.",
//     incoming: true,
//     outgoing: false,
//   },
//   {
//     type: "msg",
//     subtype: "doc",
//     message: "Yes sure, here you go.",
//     incoming: true,
//     outgoing: false,
//   },
//   {
//     type: "msg",
//     subtype: "doc",
//     message: "Yes sure, here you go.",
//     incoming: true,
//     outgoing: false,
//   },
//   {
//     type: "msg",
//     subtype: "doc",
//     message: "Yes sure, here you go.",
//     incoming: true,
//     outgoing: false,
//   },
//   {
//     type: "msg",
//     subtype: "doc",
//     message: "Yes sure, here you go.",
//     incoming: true,
//     outgoing: false,
//   },
//   {
//     type: "msg",
//     subtype: "doc",
//     message: "Yes sure, here you go.",
//     incoming: true,
//     outgoing: false,
//   },
//   {
//     type: "msg",
//     subtype: "doc",
//     message: "Yes sure, here you go.",
//     incoming: true,
//     outgoing: false,
//   },
//   {
//     type: "msg",
//     subtype: "doc",
//     message: "Yes sure, here you go.",
//     incoming: true,
//     outgoing: false,
//   },
// ];


export {
  Nav_Setting,
  Nav_Buttons,
};
