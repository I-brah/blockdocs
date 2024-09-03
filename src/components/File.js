import React from 'react';
import './File.css';
import { FaDownload, FaShareAlt, FaTrashAlt } from 'react-icons/fa';

const File = ({ name, owner, location }) => {
    return (
        <div className="file">
            <span>{name}</span>
            <span>{owner}</span>
            <span>{location}</span>
            <div className="file__actions">
                <FaDownload className="file__icon" />
                <FaShareAlt className="file__icon" />
                <FaTrashAlt className="file__icon" />
            </div>
        </div>
    );
};

export default File;
