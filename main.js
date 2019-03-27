const tableBody = document.getElementById('table-body');
const companyGraph = document.getElementById('company');
companyGraph.addEventListener('change', getSelectedCompany);
const ctx = document.getElementById('myChart').getContext('2d');

// fake company data
const companiesDetails = [
  {
    name: 'Viacom Inc',
    data: [
      { month: 'Feb', value: 26.32, high: 27.50, low: 24.30, change: '+0.98' },
      { month: 'Jan', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Dec', value: 21.55, high: 23.73, low: 20.01, change: '-0.51' },
      { month: 'Nov', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Oct', value: 23.55, high: 25.43, low: 22.21, change: '+0.31' },
      { month: 'Sep', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Aug', value: 24.55, high: 26.73, low: 21.01, change: '+0.71' },
      { month: 'Jul', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Jun', value: 23.55, high: 23.73, low: 22.01, change: '+0.05' },
      { month: 'May', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Apr', value: 21.55, high: 23.73, low: 20.01, change: '-0.81' },
      { month: 'Mar', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' }
    ],
  },
  {
    name: 'Lennar Corp',
    data: [
      { month: 'Feb', value: 49.55, high: 53.21, low: 46.31, change: '+1.71' },
      { month: 'Jan', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Dec', value: 40.55, high: 41.56, low: 38.71, change: '-3.71' },
      { month: 'Nov', value: 45.55, high: 47.56, low: 43.71, change: '-2.71' },
      { month: 'Oct', value: 47.55, high: 49.56, low: 46.71, change: '-1.71' },
      { month: 'Sep', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Aug', value: 49.55, high: 51.56, low: 47.71, change: '-1.71' },
      { month: 'Jul', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Jun', value: 51.55, high: 53.56, low: 49.71, change: '+1.01' },
      { month: 'May', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Apr', value: 46.55, high: 50.56, low: 44.71, change: '-2.71' },
      { month: 'Mar', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' }
    ]
  },
  {
    name: 'Brands Inc',
    data: [
      { month: 'Feb', value: 23.30, high: 21.90, low: 19.87, change: '+0.61' },
      { month: 'Jan', value: 44.55, high: 45.02, low: 43.55, change: '+1.71' },
      { month: 'Dec', value: 21.55, high: 23.73, low: 20.01, change: '-0.51' },
      { month: 'Nov', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Oct', value: 23.55, high: 25.43, low: 22.21, change: '+0.31' },
      { month: 'Sep', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Aug', value: 24.55, high: 26.73, low: 21.01, change: '+0.71' },
      { month: 'Jul', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Jun', value: 23.55, high: 23.73, low: 22.01, change: '+0.05' },
      { month: 'May', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Apr', value: 21.55, high: 23.73, low: 20.01, change: '-0.81' },
      { month: 'Mar', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' }
    ]
  },
  {
    name: 'Yourex',
    data: [
      { month: 'Feb', value: 23.30, high: 21.90, low: 19.87, change: '+0.61' },
      { month: 'Jan', value: 44.55, high: 45.02, low: 43.55, change: '+1.71' },
      { month: 'Dec', value: 40.55, high: 41.56, low: 38.71, change: '-3.71' },
      { month: 'Nov', value: 45.55, high: 47.56, low: 43.71, change: '-2.71' },
      { month: 'Oct', value: 47.55, high: 49.56, low: 46.71, change: '-1.71' },
      { month: 'Sep', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Aug', value: 49.55, high: 51.56, low: 47.71, change: '-1.71' },
      { month: 'Jul', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Jun', value: 51.55, high: 53.56, low: 49.71, change: '+1.01' },
      { month: 'May', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Apr', value: 46.55, high: 50.56, low: 44.71, change: '-2.71' },
      { month: 'Mar', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' }
    ]
  },
  {
    name: 'Apple LLC',
    data: [
      { month: 'Feb', value: 23.30, high: 21.90, low: 19.87, change: '+0.61' },
      { month: 'Jan', value: 44.55, high: 45.02, low: 43.55, change: '+1.71' },
      { month: 'Dec', value: 21.55, high: 23.73, low: 20.01, change: '-0.51' },
      { month: 'Nov', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Oct', value: 23.55, high: 25.43, low: 22.21, change: '+0.31' },
      { month: 'Sep', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Aug', value: 24.55, high: 26.73, low: 21.01, change: '+0.71' },
      { month: 'Jul', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Jun', value: 23.55, high: 23.73, low: 22.01, change: '+0.05' },
      { month: 'May', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Apr', value: 21.55, high: 23.73, low: 20.01, change: '-0.81' },
      { month: 'Mar', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' }
    ]
  },
  {
    name: 'Primedsoft',
    data: [
      { month: 'Feb', value: 23.30, high: 21.90, low: 19.87, change: '+0.61' },
      { month: 'Jan', value: 44.55, high: 45.02, low: 43.55, change: '+1.71' },
      { month: 'Dec', value: 40.55, high: 41.56, low: 38.71, change: '-3.71' },
      { month: 'Nov', value: 45.55, high: 47.56, low: 43.71, change: '-2.71' },
      { month: 'Oct', value: 47.55, high: 49.56, low: 46.71, change: '-1.71' },
      { month: 'Sep', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Aug', value: 49.55, high: 51.56, low: 47.71, change: '-1.71' },
      { month: 'Jul', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Jun', value: 51.55, high: 53.56, low: 49.71, change: '+1.01' },
      { month: 'May', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Apr', value: 46.55, high: 50.56, low: 44.71, change: '-2.71' },
      { month: 'Mar', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' }
    ]
  },
  {
    name: 'KSIH',
    data: [
      { month: 'Feb', value: 23.30, high: 21.90, low: 19.87, change: '+0.61' },
      { month: 'Jan', value: 44.55, high: 45.02, low: 43.55, change: '+1.71' },
      { month: 'Dec', value: 21.55, high: 23.73, low: 20.01, change: '-0.51' },
      { month: 'Nov', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Oct', value: 23.55, high: 25.43, low: 22.21, change: '+0.31' },
      { month: 'Sep', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Aug', value: 24.55, high: 26.73, low: 21.01, change: '+0.71' },
      { month: 'Jul', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Jun', value: 23.55, high: 23.73, low: 22.01, change: '+0.05' },
      { month: 'May', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Apr', value: 21.55, high: 23.73, low: 20.01, change: '-0.81' },
      { month: 'Mar', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' }
    ]
  },
  {
    name: 'Snappy Labs',
    data: [
      { month: 'Feb', value: 23.30, high: 21.90, low: 19.87, change: '+0.61' },
      { month: 'Jan', value: 44.55, high: 45.02, low: 43.55, change: '+1.71' },
      { month: 'Dec', value: 40.55, high: 41.56, low: 38.71, change: '-3.71' },
      { month: 'Nov', value: 45.55, high: 47.56, low: 43.71, change: '-2.71' },
      { month: 'Oct', value: 47.55, high: 49.56, low: 46.71, change: '-1.71' },
      { month: 'Sep', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Aug', value: 49.55, high: 51.56, low: 47.71, change: '-1.71' },
      { month: 'Jul', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Jun', value: 51.55, high: 53.56, low: 49.71, change: '+1.01' },
      { month: 'May', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Apr', value: 46.55, high: 50.56, low: 44.71, change: '-2.71' },
      { month: 'Mar', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' }
    ]
  },
  {
    name: 'XYZ',
    data: [
      { month: 'Feb', value: 23.30, high: 21.90, low: 19.87, change: '+0.61' },
      { month: 'Jan', value: 44.55, high: 45.02, low: 43.55, change: '+1.71' },
      { month: 'Dec', value: 21.55, high: 23.73, low: 20.01, change: '-0.51' },
      { month: 'Nov', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Oct', value: 23.55, high: 25.43, low: 22.21, change: '+0.31' },
      { month: 'Sep', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Aug', value: 24.55, high: 26.73, low: 21.01, change: '+0.71' },
      { month: 'Jul', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Jun', value: 23.55, high: 23.73, low: 22.01, change: '+0.05' },
      { month: 'May', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' },
      { month: 'Apr', value: 21.55, high: 23.73, low: 20.01, change: '-0.81' },
      { month: 'Mar', value: 22.55, high: 24.73, low: 21.01, change: '-0.71' }
    ]
  },
  {
    name: 'ABC',
    data: [
      { month: 'Feb', value: 23.30, high: 21.90, low: 19.87, change: '+0.61' },
      { month: 'Jan', value: 44.55, high: 45.02, low: 43.55, change: '+1.71' },
      { month: 'Dec', value: 40.55, high: 41.56, low: 38.71, change: '-3.71' },
      { month: 'Nov', value: 45.55, high: 47.56, low: 43.71, change: '-2.71' },
      { month: 'Oct', value: 47.55, high: 49.56, low: 46.71, change: '-1.71' },
      { month: 'Sep', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Aug', value: 49.55, high: 51.56, low: 47.71, change: '-1.71' },
      { month: 'Jul', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Jun', value: 51.55, high: 53.56, low: 49.71, change: '+1.01' },
      { month: 'May', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' },
      { month: 'Apr', value: 46.55, high: 50.56, low: 44.71, change: '-2.71' },
      { month: 'Mar', value: 50.55, high: 52.56, low: 48.71, change: '+1.71' }
    ]
  }
];

const monthButtons = document.querySelectorAll('.mb-button');
monthButtons.forEach(button => {
  button.addEventListener('click', toggleData);
});

// get selected company name
function getSelectedCompany(e) {
  const selectedCompany = e.target.value;
  redrawGraph(selectedCompany);
}

// draw a new graph with selected company data
function redrawGraph(companyName) {
  let comData = null;
  for (let i = 0; i < companiesDetails.length; i++) {
    if (companiesDetails[i].name.toLowerCase().includes(companyName.toLowerCase())) {
      const data = companiesDetails[i].data;
      comData = data.map(item => { return item.value });
    }
  }
  const minValue = Math.min(...comData);
  const secondMinValue = Math.min.apply(null, comData.filter(num => num !== minValue));
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Feb', 'Jan', 'Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'Jul', 'Jun', 'May', 'Apr', 'Mar'],
        datasets: [{
          label: 'Dataset 1',
          data: comData,
          backgroundColor: '#c5cae9',
          borderColor: '#3d5afe',
          borderWidth: 1
        }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      responsive: true,
      title: {
        display: true,
        text: `${companyName} Price Data`
      },
      tooltips: {
        mode: 'index',
        intersect: true
      },
      annotation: {
        annotations: [{
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: minValue,
          endValue: secondMinValue,
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 4,
          label: {
            enabled: false,
            content: 'Trendline',
            yAdjust: -16,
          }
        }]
      }
    }
  });
}

// get the selected month
function toggleData(e) {
  const selectedMonth = e.target.innerText;
  getMonthlyStock(selectedMonth);
}

// fetch company data for selected month
function getMonthlyStock(month) {
  tableBody.innerHTML = null;
  for (let i = 0; i < companiesDetails.length; i++) {
    const row = document.createElement('tr');
    for (let j in companiesDetails[i]) {
      const value = document.createElement('td');
      const change = document.createElement('td');
      const high = document.createElement('td');
      const low = document.createElement('td');
      if (j === 'data') {
        for (let k in companiesDetails[i][j]) {
          const obj = companiesDetails[i][j][k];
          if (obj.month.toLowerCase() === month.toLowerCase()) {
            value.innerText = obj.value;
            const ch = obj.change.charAt(0);
            if (ch === '+') {
              change.style.color = 'green';
            }
            else {
              change.style.color = 'red';
            }
            change.innerText = obj.change;
            change.classList.add('tb-collapse');
            low.innerText = obj.low;
            low.classList.add('tb-collapse');
            high.innerText = obj.high;
            high.classList.add('tb-collapse');
            row.appendChild(value);
            row.appendChild(high);
            row.appendChild(low);
            row.appendChild(change);
            break;
          }
        }
      }
      else {
        const data = document.createElement('td');
        data.innerText = companiesDetails[i][j];
        row.appendChild(data);
      }
    }
    tableBody.appendChild(row);
  }
}

getMonthlyStock('Feb');
redrawGraph('Viacom');