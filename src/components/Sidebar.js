import React, { useState } from 'react';
import './Sidebar.css';
import { FaHome, FaCube, FaCloud, FaStar } from 'react-icons/fa';

const Sidebar = () => {
    const [active, setActive] = useState('home');

    const handleItemClick = (item) => {
        setActive(item);
    };
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    
    };
    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar__header">
                <h2>{!isCollapsed && 'Blockdocs'}</h2>
                <FaBars className="sidebar__toggle" onClick={toggleCollapse} />
                <button className="sidebar__new-btn">+ New</button>
            </div>
            <ul className="sidebar__list">
                <li 
                    className={active === 'home' ? 'active' : ''} 
                    onClick={() => handleItemClick('home')}
                >
                    <FaHome className="sidebar__icon" />
                    {!isCollapsed && 'Home'}
                </li>
                <li 
                    className={active === 'blocks' ? 'active' : ''} 
                    onClick={() => handleItemClick('blocks')}
                >
                    <FaCube className="sidebar__icon" />
                    {!isCollapsed && 'Blocks'}
                </li>
                <li 
                    className={active === 'ipfs' ? 'active' : ''} 
                    onClick={() => handleItemClick('ipfs')}
                >
                    <FaCloud className="sidebar__icon" />
                    {!isCollapsed && 'IPFS'}
                </li>
                <li 
                    className={active === 'starred' ? 'active' : ''} 
                    onClick={() => handleItemClick('starred')}
                >
                    <FaStar className="sidebar__icon" />
                    {!isCollapsed && 'Starred'}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
