import React from 'react';
import regardItem from './RegardItem.module.css';
export const RegardItem = ({ author, content }) => {
  return (
    <>
      <p className={regardItem.author}>{author}&nbsp;</p>
      <p className={regardItem.content}>{content}&nbsp;</p>
    </>
  );
};