import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import './App.css';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

const rootElement = document.getElementById('root');

if (rootElement) {
  // rootElement is narrowed to type Element
  createRoot(rootElement).render(<Root name={""} />);
}
export const { bootstrap, mount, unmount } = lifecycles;
