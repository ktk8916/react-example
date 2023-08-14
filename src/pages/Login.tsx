import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tMember } from '../data/Member';

const Login = ({ myMembers }: { myMembers: tMember[] }) => {
  const [name, setName] = useState<string>('');
  const nav = useNavigate();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const me = myMembers.find((member) => member.name === name);
    if (me) {
      localStorage.setItem('loginName', name);
      nav('/members');
    } else {
      alert('login fail');
    }
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={onChangeHandler}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
};

export default Login;
