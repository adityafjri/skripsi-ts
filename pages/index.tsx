import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

type Feature = {
  id: number;
  name: string;
  detail: string;
};

type HomeProps = {
  features: Feature[];
};

const Home: React.FC<HomeProps> = ({ features }) => {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <section className="w-fit mx-auto flex flex-col items-center my-8">
        <div className="grid grid-cols-3 gap-6">
            
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
