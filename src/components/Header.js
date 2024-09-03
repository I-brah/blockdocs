import React from 'react';
import './Header.css';
import { FaSearch, FaBell, FaUserCircle, FaCog } from 'react-icons/fa';

const Header = ({ onSort, onFilter, onSettingsClick }) => {
    const [isAscending, setIsAscending] = useState(true);

    const handleSort = () => {
        setIsAscending(!isAscending);
        onSort(isAscending ? 'asc' : 'desc');
    };
    const handleFilterChange = (e) => {
        onFilter(e.target.value);
    };

    return (
        <div className="header">
            <div className="header__title">
                <h1>Welcome to Blockdocs</h1>
            </div>
            <div className="header__search">
                <FaSearch className="header__search-icon" />
                <input type="text" placeholder="Search in blockdocs" />
                <button>Search</button>
            </div>
             <div className="header__actions">
                 <FaBell className="header__icon" />
                  <FaUserCircle className="header__icon" />
                  <FaCog className="header__icon" onClick={onSettingsClick} />
            </div>
            <div className="header__filters">
            <select onChange={handleFilterChange}>
                    <option value="all">All Types</option>
                    <option value="pdf">PDF</option>
                    <option value="image">Image</option>
                    <option value="ppt">Presentation</option>
            </select>
            <button onClick={handleSort}>
            Sort by Name {isAscending ? '↑' : '↓'}
            </button>
            <button>Modified</button>
                <button>Location</button>
            <button onClick={() => onSort('name')}>Sort by Name {isAscending ? '↑' : '↓'}</button>
             <button onClick={() => onSort('owner')}>Sort by Owner {isAscending ? '↑' : '↓'}</button>
             <button onClick={() => onSort('location')}>Sort by Location {isAscending ? '↑' : '↓'}</button>

             
                <button>Type</button>
                <button>After</button>
                <button>Modified</button>
                <button>Location</button>
            </div>
            <div className="header__icons">
                <i className="fas fa-cog"></i>
                <i className="fas fa-bell"></i>
                <i className="fas fa-user"></i>
            </div>
        </div>
    );
};

export default Header;
