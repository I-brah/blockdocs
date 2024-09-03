import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import FileList from './components/Filelist';

function App() {
    // Sample data to display
    const [files, setFiles] = useState([
        { name: 'Document1.pdf', owner: 'User A', location: 'IPFS' },
        { name: 'Image1.png', owner: 'User B', location: 'Blockchain' },
        { name: 'Presentation.pptx', owner: 'User C', location: 'IPFS' },
    ]);
    };
    const handleSort = (criteria) => {
        const sortedFiles = [...filteredFiles].sort((a, b) => {
            if (isAscending) {
                return a[criteria].localeCompare(b[criteria]);
            } else {
                return b[criteria].localeCompare(a[criteria]);
            }
        });
        setFilteredFiles(sortedFiles);
    };
    const App = () => {
        const handleSettingsClick = () => {
            alert("Settings clicked!");
        }
        };
    
    return (
        <div className="app">
            <Sidebar />
            <div className="content">
                {/* This is where we'll add the Header and FileList components later */}
                <h1>Welcome to Blockdocs</h1>
                <Header onSettingsClick={handleSettingsClick}/>
                {/* The FileList component will go here next */}
                <FileList files={files}/>
            </div>
        </div>
    );


export default App;
