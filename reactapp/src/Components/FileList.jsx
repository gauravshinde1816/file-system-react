import React , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import {  Line,  Bar } from 'react-chartjs-2';
import {
  Chart, CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { data, options, labels, backgroundColor, borderColor} from '../data'
import {getFiles} from "../data"
//chartjs3
Chart.register(ArcElement, BarElement, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);


const FileList = () => {
  const [files , setFiles] = useState([])
  useEffect( async ()=>{
      setFiles(await getFiles())
  } , [])

  return (
    <div className='container-fluid'>
      <div className="row mt-5">
        <div className="col-lg-2 col-sm-4 col-xs-6 bg-dark border">
          <div className="col-header  font-weight-bold p-3 text-center text-light">
            Files
          </div>
        </div>
        <div className="col-lg-10 col-sm-8 col-xs-6 bg-dark border">
          <div className="col-header  font-weight-bold p-3 text-center text-light">
            Information
          </div>
        </div>
      </div>
      {/* data load */}
      {
        files &&  files.map(file => (
          <div className='row' key={file.name}>
            <div className="col-lg-2 col-sm-4 col-xs-6 border bg-light">
              <div className=" p-3 text-center">
                <p>{file.name}</p>
                {/* <Link key={file.id} to={`/files/${file.name}`}>{file.name}</Link> */}
              </div>
            </div>
            <div className="col-lg-10 col-sm-8 col-xs-6 border bg-light">
              <div className="p-3 text-center">
                <div className='row'>
                  <div className="col-lg-6">
                    <Bar data={{
                      labels: labels,
                      datasets: [{
                        label: file.name,
                        backgroundColor,
                        borderColor,
                        data: file.chartdata,
                      }],
                    }} options={options} />
                  </div>
                   <div className="col-lg-6">
                    <Line data={{
                      labels: labels,
                      datasets: [{
                        label: file.name,
                        backgroundColor,
                        borderColor,
                        data: file.chartdata,
                      }],
                    }} options={options} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default FileList