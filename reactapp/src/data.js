import axios from "axios"
export const data = [
    {
        id :1,
        name:"NotePad",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, atque.",
        chartdata: [150, 100, 15, 12, 200, 300]
    },
    {
        id :2,
        name:"MS office",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, atque.",
        chartdata: [500, 90, 150, 420, 220, 430]
    },
    {
        id :3,
        name:"Vs Code",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, atque.",
        chartdata: [410, 110, 250, 112, 200, 130]
    },
    {
        id :4,
        name:"Postman",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, atque.",
        chartdata: [210, 170, 280, 150, 203, 170]
    },
    {
        id :5,
        name:"Hyperwork",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, atque.",
        chartdata: [210, 70, 580, 150, 603, 870]
    },

]


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            display :false
        },
        title: {
            display: true,
            // text: 'Total Usage',
        },
    },
};

export const backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
]

export const borderColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
]
export const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
]



export const getFiles =async ()=>{
    let files = []
    try {
        const res = await axios.get("http://localhost:5000/")
        res.data.forEach(f => {
            let x = {}
            x.name = f
            x.chartdata = [210, 70, 580, 150, 603, 870]
            files.push(x)
        });
        return files
    } catch (error) {
        console.log(error)
    }
}


