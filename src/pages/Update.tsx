import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { tMember } from '../data/Member';

const Update = ({
  setMyMembers,
}: {
  setMyMembers: React.Dispatch<React.SetStateAction<tMember[]>>;
}) => {
  const params = useParams();
  const [image, setImage] = useState<string>('');
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const changeImage = () => {
    setMyMembers((prev) => {
      return prev.map((m) =>
        m.id === Number(params.id) ? { ...m, image } : m,
      );
    });
  };
  return (
    <>
      <input
        type="text"
        name="img"
        onChange={onChangeHandler}
        placeholder="image..."
      />
      <button onClick={changeImage}>바꾸기</button>
    </>
  );
};

export default Update;
