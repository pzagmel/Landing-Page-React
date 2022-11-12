import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
  const datos = [
     {
             title:"Abierto de Australia",
             img:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/02/12/16131067902692.jpg",
             descripcion:"Se juega a primeros de año en Sidney sobre pista dura. Es un torneo muy exigente en el que calor juega un papel protagonista.",
             textbutton:"Find Out More!"
            },
     {
             title:"Roland Garros",
             img:"https://assets.adnradio.cl/2022/08/Clipboard-2-925x470.jpg",
             descripcion:"Es el campeonato más importante sobre pista de tierra. Tiene lugar en entre el mes de mayo y junio en París. Si un jugador es protagonista en este torneo ese es Rafa Nadal, que ha conseguido alzarse 11 victorias sobre la arcilla de París.",
             textbutton:"Find Out More!"
            },
     {
             title:"Wimbledon",
             img:"https://content.rolex.com/dam/world-of-rolex/tennis/wimbledon/2022/share-search/rolex-and-tennis-wimbledon-2022-share_wim21jb_01153_r.jpg",
             descripcion:"Se disputa en el mes de julio en la localidad inglesa de Wimbledon. Se juega sobre hierba. Los competidores están obligados a vestir de blanco durante los partidos.",
             textbutton:"Find Out More!"
            },
     {
             title:"US Open",
             img:"https://www.record.com.mx/sites/default/files/styles/amp-discovery-1200x/public/articulos/2021/08/30/us_open_2.jpg?itok=tkyx2yBW",
             descripcion:"Tiene lugar en el mes de octubre en New York. Se juega en pistas duras. Es muy común ver a estrellas internacionales de cine animando a sus jugadores favoritos desde la gradas.",
             textbutton:"Find Out More!"
            },
    ];
  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron
          title="Te invitamos a conocer los 4 Grand Slam!"
          descripcion="El Grand Slam de tenis está constituido por los cuatro torneos oficiales mayores del circuito internacional organizados por la Federación Internacional de Tenis."
          textbutton="Call to action!"
        />
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {datos.map((objeto,posicion) => {
            return (
              <div className="col text-center">
                <Card title={objeto.title} img={objeto.img} descripcion={objeto.descripcion} textbutton={objeto.textbutton}/>
                
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
