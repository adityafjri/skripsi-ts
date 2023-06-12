import Chart from "../components/Chart";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Tree(){
    return(
        <main className="w-full">
            <Navigation />
                <section className="w-fit mx-auto flex flex-col items-center my-8">
                    <Chart />
                </section>
            <Footer />
        </main>
    )
}