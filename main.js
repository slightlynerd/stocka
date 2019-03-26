const tableBody = document.getElementById('table-body');
const companiesDetails = [
  {
    company: 'Viacom Inc',
    data: [
      {
        month: 'Feb',
        value: 26.32,
        change: '+0.98'
      },
      {
        month: 'Jan',
        value: 22.55,
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
        change: '+1.71',
      },
      {
        month: 'Jan',
        value: 50.55,
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
        change: '+0.61',
      },
      {
        month: 'Jan',
        value: 44.55,
        change: '+1.71',
      }
    ]
  }
];

const monthButtons = document.querySelectorAll('.mb-buttons');
monthButtons.forEach(button => {
  button.addEventListener('click', toggleData);
});

function toggleData(e) {
  const selectedMonth = e.target.innerText;
  getMonthlyStock(selectedMonth);
}

function getMonthlyStock(month) {
  tableBody.innerHTML = null;
  for (let i = 0; i < companiesDetails.length; i++) {
    const row = document.createElement('tr');
    for (let j in companiesDetails[i]) {
      const value = document.createElement('td');
      const change = document.createElement('td');
      if (j === 'data') {
        for (let k in companiesDetails[i][j]) {
          if (companiesDetails[i][j][k].month === month) {
            value.innerText = companiesDetails[i][j][k].value;
            change.innerText = companiesDetails[i][j][k].change;
            row.appendChild(value);
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