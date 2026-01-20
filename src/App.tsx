import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";


function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "main main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} >
        <Navbar/>
      </GridItem>
      <GridItem area={"aside"} hideBelow="lg">
        Aside
      </GridItem>
      <GridItem area={"main"} >
        Mian
      </GridItem>
    </Grid>
  );
}

export default App
