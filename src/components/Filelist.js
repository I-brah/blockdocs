import React from 'react';
import './FileList.css';
import File from './File';

const FileList = ({ files }) => {
    return (
        <div className="file-list">
            <div className="file-list__header">
                <span>Name</span>
                <span>Owner</span>
                <span>Location</span>
            </div>
            <ul className="filelist__items">
                {files.map((file, index)=>(
                    <li key={index}>
                        <File
                        name={file.name}
                        owner={file.owner}
                        location={file.location}
                        />
                         className="fileList__item"
                        <span>{file.name}</span>
                        <span>{file.owner}</span>
                        <span>{file.location}</span>
                    </li>
                ))}
            </ul>
            <div className="file-list__body">
                {files.length > 0 ? (
                    files.map((file, index) => (
                        <div key={index} className="file-list__row" onClick={() => console.log(`Clicked on ${file.name}`)}>
                            <span>{file.name}</span>
                            <span>{file.owner}</span>
                            <span>{file.location}</span>
                        </div>
                    
                    ))
                ) : (
                    <div className="file-list__empty">
                        <p>No files to display</p>
                    </div>     
                )
                    (
                    <div className="file-list__row-actions">
                    <button onClick={() => handleDelete(file.name)}>Delete</button>
                    <button onClick={() => handleDownload(file.name)}>Download</button>
                    <button onClick={() => handleViewDetails(file.name)}>View Details</button>
                </div>
                
                )}
            </div>
        </div>
    );
};
const handleDelete = (fileName) => {
    const updatedFiles = files.filter(file => file.name !== fileName);
    setFiles(updatedFiles);
};

const handleDownload = (fileName) => {
    console.log(`Downloading ${fileName}`);
    // Implement download functionality here
};

const handleViewDetails = (fileName) => {
    console.log(`Viewing details for ${fileName}`);
    // Implement details view here
};


export default FileList;

