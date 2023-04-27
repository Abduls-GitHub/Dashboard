// SIDEBAR TOGGLE

let sidebarOpen = false;
let sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}



// ---------- CHARTS ----------

// BAR CHART
let barChartOptions = {
    series: [{
        data: [30,20,10]
    }],
    chart: {
        type: "bar",
        background: "transparent",
        height: 200,
        width: 500,
        toolbar: {
            show: false,
        },
    },
    colors: [
        "#00BD35",
        "#BD4413",
        "#FF1919",



    ],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: "40%",
        }
    },
    noData: {
        text: "Loading..."
    },
    dataLabels: {
        enabled: true,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: "#55596e",
        yaxis: {
            lines: {
                show: false,
            },
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    legend: {
        labels: {
            colors: "black",
        },
        show: true,
        position: "top",
    },
    stroke: {
        colors: ["transparent"],
        show: true,
        width: 2
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
    xaxis: {
        categories: ["No Notifications", "Notify Customers", "Disconnect Imminent"],
        title: {
            text: "Notification status",
            style: {
                color: "#EB5E28",
            },
        },
        axisBorder: {
            show: true,
            color: "black",
        },
        axisTicks: {
            show: true,
            color: "black",
        },
        labels: {
            style: {
                colors: "black",
            },
        },
    },
    yaxis: {
        title: {
            text: "Meters" ,
            style: {
                color:  "#EB5E28",
            },
        },
        axisBorder: {
            color: "black",
            show: true,
        },
        axisTicks: {
            color: "black",
            show: true,
        },
        labels: {
            style: {
                colors: "black",
            },
        },
    }
};

/*CALLING DYNAMIC API DATA REPLACE URL FOR DB API DATA*/

/*fetch("http://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly")
    .then(response => {
        return response.json();
    })
    .then(data =>{
        console.log(data)
        barChart.updateSeries([{
            name: "sales",
            data: data
            }])

    })
    .catch(reportError =>{
        console.log("error")
    }
);*/

let barChart = new ApexCharts(document.querySelector("#mini-chart"), barChartOptions);
barChart.render();


/*Table*/

fetch('http://localhost:3000/customers') // The URL should match the server-side script that returns the data
    .then(response => response.json())
    .then(data => {

        const tableBody = document.getElementById('table-body-customers');

        data.forEach(item => {
            const row = tableBody.insertRow(-1);
            const idCell = row.insertCell(0);
            const nameCell = row.insertCell(1);
            const lastnameCell = row.insertCell(2);
            const birthCell = row.insertCell(3);
            const phoneCell = row.insertCell(4);
            const addressCell = row.insertCell(5);
            const cityCell = row.insertCell(6);
            const stateCell = row.insertCell(7);
            const pointsCell = row.insertCell(8);


            idCell.textContent = item.customer_id;
            nameCell.textContent = item.first_name;
            lastnameCell.textContent = item.last_name;
            birthCell.textContent = item.birth_date;
            phoneCell.textContent = item.phone;
            addressCell.textContent = item.address;
            cityCell.textContent = item.city;
            stateCell.textContent = item.state;
            pointsCell.textContent = item.points;

        });
    })
    .catch(error => console.error('Error fetching data:', error));


/*Table*/

fetch('http://localhost:3000/meters_customers') // The URL should match the server-side script that returns the data
    .then(response => response.json())
    .then(data => {

        const tableBody = document.getElementById('table-body-meters-customers');

        data.forEach(item => {
            const row = tableBody.insertRow(-1);
            const call_flagCell = row.insertCell(0);
            const customer_numberCell = row.insertCell(1);
            const meter_numberCell = row.insertCell(2);
            const customer_NameCell = row.insertCell(3);
            const addressCell = row.insertCell(4);
            const contact_NumberCell = row.insertCell(5);
            const emailCell = row.insertCell(6);
            const customer_typeCell = row.insertCell(7);
            const wallet_BalanceCell = row.insertCell(8);
            const limitCell = row.insertCell(9);


            call_flagCell.textContent = item.call_flag;
            customer_numberCell.textContent = item.customer_number;
            meter_numberCell.textContent = item.meter_number;
            customer_NameCell.textContent = item.customer_name;
            addressCell.textContent = item.address;
            contact_NumberCell.textContent = item.contact_number;
            emailCell.textContent = item.email;
            customer_typeCell.textContent = item.customer_type;
            wallet_BalanceCell.textContent = item.wallet_balance;
            limitCell.textContent = item.limit;

        });
    })
    .catch(error => console.error('Error fetching data:', error));