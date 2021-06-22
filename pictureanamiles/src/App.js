import React from "react";
import Headers from "./components/header";
import Mains from "./components/main2";
import Footers from "./components/footer";
import SelectedBeast from "./SelectedBeast";
import data from "./components/data.json";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Headers />
        <Container>
          <Mains
            {...data.map((beast, index) => {
              return (
                <SelectedBeast
                  key={index}
                  clicked={0}
                  title={beast.title}
                  image_url={beast.image_url}
                  description={beast.description}
                />
              );
            })}
          />
        </Container>
        <Footers />
      </>

    );
  }
}

export default App;
