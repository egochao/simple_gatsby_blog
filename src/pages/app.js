import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import AppML from "../components/AppML"
import PrivateRoute from "../components/PrivateRoute"



const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/ml" component={AppML} />
      <Login path="/app/login" />
      <SignUp path="/app/signup" />
    </Router>
  </Layout>
)

export default App