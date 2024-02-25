import React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

// react v6
export const withRouter = (Component) => {
  return (props) => {
    const router = { location: useLocation(), navigate: useNavigate(), params: useParams() };
    return <Component {...props} router={router} />
  }
}