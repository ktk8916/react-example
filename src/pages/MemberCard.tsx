import React, { useState } from 'react';
import { tMember } from '../data/Member';
import { Link } from 'react-router-dom';

const MemberCard = ({
  myMember,
  loginName,
}: {
  myMember: tMember;
  loginName: string | null;
}) => {
  const isLoginMember = (): boolean => {
    return myMember.name === loginName;
  };
  return (
    <tr>
      <td>
        {isLoginMember() ? (
          <Link to={`/member/${myMember.id}`}>{myMember.id}</Link>
        ) : (
          <p>{myMember.id}</p>
        )}
      </td>
      <td>{myMember.name}</td>
      <td>{myMember.number}</td>
      <td>
        <img src={myMember.image} width="5%" alt="profileImage" />
      </td>
      {isLoginMember() && <Link to="/update">수정</Link>}
    </tr>
  );
};

export default MemberCard;
