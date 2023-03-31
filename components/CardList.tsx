import React from 'react';
import Card from './Card';
import data from '../Submissions/members.json';

function CardList() {
  return (
    <div>
      {data.map((member, index) => (
        <Card name={member.name} github={member.links.github} pfp={member.img} />
      ))}
    </div>
  );
}

export default CardList;
