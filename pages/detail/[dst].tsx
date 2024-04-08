import { useEffect,useState } from "react"
import { GetServerSideProps } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Chart from "../../components/Chart";

const DetailPage = ({ records }) => {
    return (
        <main className="w-full">
            <Navigation />
                <section className="w-fit mx-auto flex flex-col items-center my-8">
                    <h1 className="font-semibold my-4 text-xl">Undang-undang No.{records['0']['to']}</h1>
                    <p className="w-full text-left">Berhubungan dengan :</p>
                    <ul>
                        {records.map((record, index) => (
                            <li className="list-disc" key={index}>Undang-undang No.{record['from']}</li>
                        ))}
                    </ul>
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
  
  export default DetailPage; 