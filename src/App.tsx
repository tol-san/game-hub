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
      <GridItem area={"aside"} bg="red.400" hideBelow="lg">
        Aside
      </GridItem>
      <GridItem area={"main"} bg="green.400">
        Mian
      </GridItem>
    </Grid>
  );
}

export default App
