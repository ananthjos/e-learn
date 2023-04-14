import React from "react";
import axios from "axios";

// Creating the context object and passing the default values.
const stepContext = React.createContext({ steps: [] });

export default stepContext;
