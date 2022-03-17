import { useEffect, useState } from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";

export interface AppProps {
  greeting: string;
  information?: string;
}

const App = ({ greeting, information }: AppProps) => {
  useEffect(() => {
    console.log("Hello from the client?");
  }, []);
  return (
    <>
      <Heading greeting={greeting} />
      {information && <Subheading information={information} />}
    </>
  );
};

export default App;
