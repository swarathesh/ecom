import '../styles/globals.css'
import React from "react";
import {Layout} from "../views";
import {StateContext} from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
      <StateContext>
          <Layout>

              <Component {...pageProps} />
          </Layout>
      </StateContext>
      )

}

export default MyApp
