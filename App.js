import Amplify from "aws-amplify";
import App from "./src/App";
import config from "./src/aws-exports";

Amplify.configure(config);

export default App;
