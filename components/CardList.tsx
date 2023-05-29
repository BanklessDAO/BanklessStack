import React from 'react';
import Card from './Card';
import data from '../Submissions/members.json';

function CardList() {
  return (
    <div className='flex flex-wrap justify-center gap-5'>
      {data.map((member, index) => (
        <Card key={index} name={member.name} github={member.links.github} pfp={member.img} mail={member.email} title={member.title} stack={member.stack}/>
      ))}
    </div>
  );
}

export default CardList;
