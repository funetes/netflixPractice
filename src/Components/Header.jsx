import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  z-index: 2;
  color: white;
  padding: 0px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.5);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  border-bottom: 3px solid
    ${props => (props.current ? "aquamarine" : "transparent")};
  &:not(:last-child) {
    margin-right: 10px;
  }
  transition: 0.5s;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to='/'>Home</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to='/tv'>TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to='/search'>Search</SLink>
      </Item>
    </List>
  </Header>
));
