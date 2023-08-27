
import { GoogleOAuthProvider } from "@react-oauth/google";



import Auth from "./Auth";

const App = () => {

  return (
    <GoogleOAuthProvider
      onScriptLoadSuccess={() => "su"}
      onScriptLoadError={() => "er"}
      clientId="155239745240-rb32d7295k2cse9m24t8jcacdqo4ifeg.apps.googleusercontent.com"
    >
<Auth />

  
    </GoogleOAuthProvider>
  );
};

export default App;
