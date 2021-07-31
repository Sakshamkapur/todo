import React from 'react';
import './topbar.css';

const TopBar = () => {

    const handleNotification = (e) => {
        if(e.target.checked){
            Notification.requestPermission();
            new Notification("Hey")
        }
    }

    return <div className="top-bar">
        <div class="switch">
            <span>Notify</span>
            <input type="checkbox" id="toggleAll" onChange={handleNotification} />
            <label for="toggleAll"></label>
        </div>
    </div>
}

export default TopBar;