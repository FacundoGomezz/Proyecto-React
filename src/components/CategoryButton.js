import React from 'react';
import { Link } from 'react-router-dom';

const CategoryButton = ({ title, link }) => {
  return (
    <Link to={link} className="category-button">
      {title}
    </Link>
  );
};

export default CategoryButton;
