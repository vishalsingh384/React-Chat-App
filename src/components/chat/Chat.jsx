import { useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

const Chat=()=>{
    const [open, setOpen]=useState(false);
    const [text, setText]=useState("");

    const handleClick=(e)=>{
        setText((prev)=>prev+e.emoji);
    }
    
    return(
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <span>Alexa Bliss</span>
                        <p>My name is Khan</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum hic quia illum, 
                            voluptate quaerat cumque voluptatum nostrum nemo rerum fugit ducimus, 
                            quisquam atque autem obcaecati earum numquam amet officia.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum hic quia illum, 
                            voluptate quaerat cumque voluptatum nostrum nemo rerum fugit ducimus, 
                            quisquam atque autem obcaecati earum numquam amet officia.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum hic quia illum, 
                            voluptate quaerat cumque voluptatum nostrum nemo rerum fugit ducimus, 
                            quisquam atque autem obcaecati earum numquam amet officia.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://images.pexels.com/photos/19896879/pexels-photo-19896879/free-photo-of-harbor-in-stockholm-sweden.jpeg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum hic quia illum, 
                            voluptate quaerat cumque voluptatum nostrum nemo rerum fugit ducimus, 
                            quisquam atque autem obcaecati earum numquam amet officia.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message...." value={text} onChange={(e)=>setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={()=>setOpen((prev)=>!prev)}/>
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleClick}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat