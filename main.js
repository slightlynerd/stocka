const tableBody = document.getElementById('table-body');
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
      datasets: [{
        label: 'Dataset 1',
        data: [19304,13433,9341,6931,5169, 3885,2927,2159,1853,1502, 1176,911,724,590,491, 400,335,280,239,200],
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
      text: 'Chart.js Drsw Line on Chart'
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
        value: 2000,
        endValue: 0,
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
const companiesDetails = [
  {
    company: 'Viacom Inc',
    data: [
      {
        month: 'Feb',
        value: 26.32,
        high: 27.50,
        low: 24.30,
        change: '+0.98'
      },
      {
        month: 'Jan',
        value: 22.55,
        high: 24.73,
        low: 21.01,
        change: '-0.71',
      }
    ],
  },
  {
    company: 'Lennar Corp',
    data: [
      {
        month: 'Feb',
        value: 49.55,
        high: 53.21,
        low: 46.31,
        change: '+1.71',
      },
      {
        month: 'Jan',
        value: 50.55,
        high: 52.56,
        low: 48.71,
        change: '+1.71',
      }
    ]
  },
  {
    company: 'Brands Inc',
    data: [
      {
        month: 'Feb',
        value: 23.30,
        high: 21.90,
        low: 19.87,
        change: '+0.61',
      },
      {
        month: 'Jan',
        value: 44.55,
        high: 45.02,
        low: 43.55,
        change: '+1.71',
      }
    ]
  }
];

const monthButtons = document.querySelectorAll('.mb-button');
monthButtons.forEach(button => {
  button.addEventListener('click', toggleData);
});

function toggleData(e) {
  const selectedMonth = e.target.innerText;
  // e.target.classList.add('active');
  getMonthlyStock(selectedMonth);
}

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
            low.innerText = obj.low;
            high.innerText = obj.high;
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