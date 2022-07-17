import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import menu from './json/menu.json'

const MenuLinuxItems = menu.MenuLinuxItems
const MenuJavaItems = menu.MenuJavaItems.subNav

function Dropdown (props) {
  const checkMenuItems = props.menuType==='1' ? MenuLinuxItems : MenuJavaItems;

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (

      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {checkMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
  );
}

export default Dropdown;
