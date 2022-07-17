import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: black;
  font-size: 18px;

  &:hover {
    background: #6899ff;
    border-left: 4px solid #fff;
    cursor: pointer;
    
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: left;
  text-decoration: none;
  color: #fff;
  font-size: 18px;

  &:hover {
    background: #6899ff;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const show = () => setSubnav(true);

  return (
    <>
      <SidebarLink to={item.path} onMouseEnter={show} onclick="ajudaUpload();return false;">
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
