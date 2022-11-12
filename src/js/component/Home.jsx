import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
  const data = [
    "http://greenarea.me/wp-content/uploads/2016/02/img.rtve_-500x325.jpg",
    "https://images.placesonline.com/photos/53749_bari_porto_di_bari.jpg?quality=80&w=710&h=510&mode=crop",
    "http://4.bp.blogspot.com/-1Lp5wkYQqYk/TvuCF0_u7jI/AAAAAAAAAdE/aWg6u7lIfbE/s1600/Galletas-Caballos-500x325.jpg",
    "https://mejoresseries.org/wp-content/uploads/2021/01/medici-serie-italiana-500x325.jpg",
  ];
  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron
          title="A Warm Welcome!"
          descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          textbutton="Call to action!"
        />
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {data.map((item) => {
            return (
              <div className="col text-center">
                <Card
                  img={item}
                  title="Card title"
                  descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  textbutton="Find Out More!"
                />
              </div>
            );
          })}
        </div>
       </div> 
       <Footer text="Copyright © Your Website 2019" />
      
    </>
  );
};

export default Home;
