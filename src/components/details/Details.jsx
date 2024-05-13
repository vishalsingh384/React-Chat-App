import "./details.css"

const Details=()=>{
    return(
        <div className="details">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <div className="text">
                    <h3>Randy Orton</h3>
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
                <button>Block User</button>
                <button className="logout">Logout</button>
            </div>
        </div>
    )
}

export default Details