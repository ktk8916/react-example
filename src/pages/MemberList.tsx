import React, { useState } from 'react';
import { members, tMember } from '../data/Member';
import MemberCard from './MemberCard';

const MemberList = ({ myMembers }: { myMembers: tMember[] }) => {
  const [loginName, setLoginName] = useState<string | null>(
    localStorage.getItem('loginName'),
  );
  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>number</td>
          <td>image</td>
          <td>수정</td>
        </tr>
      </thead>
      <tbody>
        {myMembers.map((member, index) => (
          <MemberCard key={index} myMember={member} loginName={loginName} />
        ))}
      </tbody>
    </table>
  );
};

export default MemberList;
