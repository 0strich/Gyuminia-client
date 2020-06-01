import React from "react";
import { useDispatch } from "react-redux";
import HomeForm from "../../components/home/HomeForm";
import Content from "../../components/home/Content";
import { signOut } from "../../modules/auth";

const HomePage = () => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(signOut());
  };

  return (
    <>
      <HomeForm onSubmit={onSubmit} />
      <Content />
    </>
  );
};

export default HomePage;
