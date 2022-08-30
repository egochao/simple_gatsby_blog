import React from "react"
import View from "../components/View"
import Layout from "../components/Layout"

const Profile = () => {

  return (
    <Layout>
      <View title="Your Profile">
        <p>Welcome back to your profile, Bac!</p>
        <p>
          This is a client-only route. You could set up a form to save information
          about a user here.
        </p>
      </View>
    </Layout>
  )
}

export default Profile

