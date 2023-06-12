// import Highcharts.js
import Highcharts from "highcharts";
import networkgraph from "highcharts/modules/networkgraph";
import HighchartsReact from "highcharts-react-official";

import { useState } from 'react';

// memastikan komponen yang di-render benar, agar tidak terjadi kesalahan pada proses hidrasi
if (typeof Highcharts === "object") {
  networkgraph(Highcharts);
}

// dummy data
const data = [
    { from: 'A', to: 'B' },
    { from: 'A', to: 'C' },
    { from: 'A', to: 'D' },
    { from: 'A', to: 'E' },
    { from: 'A', to: 'F' },
    { from: 'A', to: 'G' },
    { from: 'B', to: 'C' },
  ];


// konfigurasi chart yang dicoba
export default function Chart() {
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])

    const handleSearch = (e) => {
        const inputValue = e.target.value
        setSearchValue(inputValue)
        console.log('Input Value:', inputValue)

        // filter data berdasarkan input form
        const filteredNodes = data.filter(
            (node) =>
                node?.from?.toLowerCase()?.includes(inputValue.toLowerCase()) ||
                node?.to?.toLowerCase()?.includes(inputValue.toLowerCase())
                
        )
        console.log('Filtered Data:', filteredNodes);
        
        setFilteredData(filteredNodes)
    }

    const handleNodeClick = (e) => {
        const node = e.point.name
        console.log('Clicked Node:', node)
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
                    fontSize: '18px'
                }
            },
            id: "lang-tree",
            data: filteredData.length > 0 ? filteredData : data,
            events: {
                click: handleNodeClick,
            }
          }
        ]
    };

    if (filteredData.length > 0) {
        options.series[0].data = filteredData;
    }
    
    return(
        <div>
            <form action="#" className="my-4">
                <label htmlFor="input-node">Cari Node</label>
                <input type="text" name="input-node" placeholder="cari node" className="border border-black py-2 w-full px-4"
                    value={searchValue}
                    onChange={handleSearch}
                />
            </form>
            <div className="w-auto">
                {searchValue ? (
                    <HighchartsReact highcharts={Highcharts} options={options}/>
                ) : null}
            </div>
        </div>
    )
}
