// import Highcharts.js
import Highcharts from "highcharts";
import networkgraph from "highcharts/modules/networkgraph";
import HighchartsReact from "highcharts-react-official";
import { useRouter } from "next/router";

// memastikan komponen yang di-render benar, agar tidak terjadi kesalahan pada proses hidrasi
if (typeof Highcharts === "object") {
  networkgraph(Highcharts);
}

// konfigurasi chart yang dicoba

export default function Chart(data) {
  const router = useRouter()
      const handleNodeClick = (e) => {
        const node = e.point.name
        console.log('Clicked Node:', node)
        const pdfUrl = `03Tugas-GraphAlgorithm2.pdf`
        window.open(`/${pdfUrl}`, '_blank')
      }
    const options = {
        chart: {
          type: "networkgraph",
          height: "500px",
        },
        title: {
          text: "Network Graph"
        },
    
        plotOptions: {
          networkgraph: {
            keys: ["from", "to"],
            layoutAlgorithm: {
              enableSimulation: true,
              friction: -0.9
            }
          }
        },
    
        series: [
          {
            color:'#121212',
            link:{
                width: 2,
                color: '#121212',
                length: 30,
                dashStyle: 'dash'
            },
            marker: {
                fillColor: '#FFFFFF',
                lineWidth: 1,
                lineColor: '#121212',
                radius: 20
            },
            dataLabels: {
                enabled: true,
                linkFormat: "",
                allowOverlap: true,
                style:{
                    fontSize: '12px'
                }
            },
            id: "lang-tree",
            data: data['data'],
            events: {
              click: handleNodeClick,
            }
          }
        ]
    };

  
    
    return(
        <div>
           
            <div className="w-auto">
                <HighchartsReact highcharts={Highcharts} options={options}/>
            </div>
        </div>
    )
}
