import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';
import posts from "../json/posts.json";
import Page404 from '../404';

const postOSGIItems = posts.PostOSGIItems;

function Services() {
  const params = new URLSearchParams(window.location.search);
  const tagName = params.get("tag");

  if (tagName === "OSGI-Idempiere") {
    return (
      postOSGIItems.map(osgi => 
        <li className='post__item'>
          <ul className='ul_item'>
            <li>
              <Link className='post__item__link' to={`/PostItem?post=${osgi.path}`} >
                 - {osgi.title}
              </Link>
            </li>
            <li className='description'> {osgi.description}</li>
            <li className='date'> CreateDate: {osgi.createDate}</li>
          </ul>
        </li>
      )
    );
  } 
  else {
    return (
      <Page404 />
    )
  }

}

export default Services;
