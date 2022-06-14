import { Authenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import "./aws-exports";
import "./App.css";

function App() {
  Auth.currentSession().then(data => console.log("Token", data));
  return (
    <Authenticator socialProviders={["google"]}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
