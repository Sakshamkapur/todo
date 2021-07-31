import React from 'react';
import LeftBar from '../components/LeftBar/LeftBar';
import Main from '../components/Main/Main';

const DashBoard = () => {
    return <div className="dashboard">
        <LeftBar />
        <Main />
    </div>
}

export default DashBoard;