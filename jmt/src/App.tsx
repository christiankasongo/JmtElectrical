import { useState } from "react";
import { Container } from "@mui/system";
import Topbar from "./Components/Topbar";
import "./App.css";
import { CssBaseline, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <Topbar />
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography align="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ab accusantium obcaecati distinctio vel sapiente nobis veniam molestias, ducimus perferendis, eius, consequatur nesciunt inventore voluptas sit quae eveniet quia ipsam!</Typography>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
