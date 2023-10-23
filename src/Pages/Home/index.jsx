import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

const Home = () => {
  const [cosas, setCosas] = useState(["12", '20', '22'])//info de las cards.
  
  const updateCosas = (value) => {
    setCosas()
  }; 

  async function getCards() {
    const response = await fetch("http://localhost:3001/cards");
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <Navbar />
      <Layout>
        <div>testing1</div>
        <div>
          <Card cosas={cosas}/>
        </div>
        <div>testing3</div>
      </Layout>
    </>
  );
};

export default Home;
