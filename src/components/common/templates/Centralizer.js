// @flow

import React, { Component } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode,
  className?: string
};

const Centralizer = (props: Props) => {
  const { className, children } = props;
  return <Wrapper>{children}</Wrapper>;
};

export default Centralizer;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
