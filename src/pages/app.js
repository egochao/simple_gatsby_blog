import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import AppML from "../components/AppML"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

const App = () => (
  <Layout>
    <Status />
    <Router>
      <PrivateRoute path="/app/ml" component={AppML} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
