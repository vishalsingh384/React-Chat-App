import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore"
import { auth, db } from "../../lib/firebase"
import { useUserStore } from "../../lib/userStore";
import "./details.css"

const Details=()=>{
    const {chatId,user, isCurrentUserBlocked, isReceiverBlocked, changeBlock}=useChatStore();
    const {currentUser}=useUserStore();

    const handleBlock=async()=>{
        if(!user) return;

        const userDocRef=doc(db,"users",currentUser.id);

        try {
            await updateDoc(userDocRef,{
                blocked:isReceiverBlocked?arrayRemove(user.id):arrayUnion(user.id),
            });
            changeBlock();
        } catch (err) {
            console.log(err);
        }
    }
    return(
        <div className="details">
            <div className="user">
                <img src={user?.avatar||"./avatar.png"} alt="" />
                <div className="text">
                    <h3>{user?.username}</h3>
                    <p>Lorem Iutty dolor reca sitan</p>
                </div>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/20247245/pexels-photo-20247245/free-photo-of-findik-iscisi.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                                <span>photo_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/20247245/pexels-photo-20247245/free-photo-of-findik-iscisi.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                                <span>photo_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button
                onClick={handleBlock}>
                    {isCurrentUserBlocked?"You are blocked":isReceiverBlocked?"User Blocked":"Block User"}
                </button>
                <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}

export default Details