import { useEffect,useState } from "react"
import { GetServerSideProps } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Chart from "../../components/Chart";

const Neo4jPage = ({ records }) => {
    return (
        <main className="w-full">
            <Navigation />
                <section className="w-fit mx-auto flex flex-col items-center my-8">
                    {/* 19 tahun 1964 */}
                    {/* 9 tahun 1968 */}
                    <Chart data = {records}/>
                </section>
            <Footer />
        </main>
    );
};
  
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { dst } = context.params;
  
    try {
        const response = await fetch(`http://localhost:3000/findByDst/${dst}`);
        const data = await response.json();
        return {
            props: {
            records: data,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
            records: [],
            },
        };
    }
  };
  
  export default Neo4jPage; 