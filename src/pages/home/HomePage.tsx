import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../modules";
import Navigation from "../../components/home/Navigation";
import Content from "../../components/home/Content";
import { signOut } from "../../modules/auth";

const HomePage = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state: reducerState) => state.auth);

  const onSubmit = () => {
    dispatch(signOut());
  };

  return (
    <>
      <Navigation onSubmit={onSubmit} username={username} />
      <Content username={username} />
    </>
  );
};

export default HomePage;
