import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

export const Login  = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
});
export const name = 'login'

export const bootstrap = [
    Login.bootstrap
];

export const mount = [
    Login.mount
];

export const unmount = [
    Login.unmount
];

