import React from "react";
import Headers from "./components/header";
import Mains from "./components/main";
import Footers from "./components/footer";
import "./App.css";

class App extends React.Component {
  render() {
   let arrayImg= [
      {
        image_url:
          "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
        title: "UniWhal",
        description: "A unicorn and a narwhal nuzzling their horns",
        keyword: "narwhal",
        horns: 1,
      },

      {
        image_url:
          "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
        title: "Rhino Family",
        description: "Mother (or father) rhino with two babies",
        keyword: "rhino",
        horns: 2,
      },

      {
        image_url:
          "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
        title: "Unicorn Head",
        description: "Someone wearing a creepy unicorn head mask",
        keyword: "unicorn",
        horns: 1,
      },
    ];
    return (
      <div className="App">
        <Headers />
        <Mains image_url={arrayImg[0].image_url} title={arrayImg[0].title} dec={arrayImg[0].description} kWord={arrayImg[0].keyword} horns={arrayImg[0].horns} />
        <Mains  image_url={arrayImg[1].image_url} title={arrayImg[1].title} dec={arrayImg[1].description} kWord={arrayImg[1].keyword} horns={arrayImg[1].horns}/>
        <Mains  image_url={arrayImg[2].image_url} title={arrayImg[2].title} dec={arrayImg[2].description} kWord={arrayImg[2].keyword} horns={arrayImg[2].horns}/>
        <Footers />
      </div>
    );
  }
}

export default App;
