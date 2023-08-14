import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Template from '../components/template/Template';
import { members } from '../data/Member';
import Login from '../pages/Login';
import MemberList from '../pages/MemberList';
import Update from '../pages/Update';

const MyRoutes = () => {
  const [myMembers, setMyMembers] = useState(members);
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path="/login" element={<Login myMembers={myMembers} />} />
        <Route path="/members" element={<MemberList myMembers={myMembers} />} />
        <Route
          path="/member/:id"
          element={<Update setMyMembers={setMyMembers} />}
        />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
