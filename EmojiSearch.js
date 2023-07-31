import React, { useState } from 'react'

const emojiData =[
    {
        id:1,
        Symbol:"😍",
        name:"Smiling Face with Hearts emoji"
    },
    {
        id:2,
        Symbol:"😭",
        name:"crying face"
    },
    {
        id:3,
        Symbol:"😁",
        name:"smile"
    },
    {
        id:4,
        Symbol:"😡",
        name:"angry"
    },
    {
        id:5,
        Symbol:"🤩",
        name:"Smiling Face with stars emoji"
    },
    {
        id:6,
        Symbol:"🥳",
        name:"celebration face"
    },
    {
        id:7,
        Symbol:"😇",
        name:"peaceful emoji"
    },
    {
        id:8,
        Symbol:"🥶",
        name:"freezing"
    },
    {
        id:9,
        Symbol:"😘",
        name:"kiss emoji"
    },
    {
        id:10,
        Symbol:"❤️",
        name:"heart emoji"
    },
];
function EmojiSearch() {
    const [searchEmoji,setSearchEmoji]=useState("");

    const handleChange = (e) =>{
        setSearchEmoji(e.target.value);
    }
    const showEmoji = emojiData.filter((emoji) => {
        const emojiName= emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase())

    });
  return (
    <div>
        <h1>React Emoji App!!!</h1>
        <input type="text" placeholder='Search for the emoji...' value={searchEmoji} onChange={handleChange}/>
        <div>
            {
            showEmoji.map((emoji) =>emoji.Symbol)
            }
        </div>
    </div>
  )
}

export default EmojiSearch