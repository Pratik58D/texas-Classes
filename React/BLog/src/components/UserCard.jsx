import React, { useState } from "react";

const UserCard = ({ name, bio }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((likes) => likes + 1);
  };
  function handleDislike(){
    setLikes((likes)=> likes -1)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>👍Likes : {likes}</p>
      {likes > 0 && <p>you have liked this user!</p>}
      <button onClick={handleLike} className="btn">Like</button>
      <button onClick={handleDislike} className="dislikeBtn" >dislike</button>
    </div>
  );
};

export default UserCard;
