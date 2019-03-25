const tableBody = document.getElementById('table-body');
const companiesDetails = [
  {
    company: 'ABBEYBDS',
    pop: 0.9,
    op: 0.9,
    high: 0.9,
    low: 0.9,
    change: 0,
    value: 1143524.70
  }
];

for (let i = 0; i < companiesDetails.length; i++) {
  const row = document.createElement('tr');
  for (let j in companiesDetails[i]) {
    const data = document.createElement('td');
    data.innerText = companiesDetails[i][j];
    row.appendChild(data);
  }
  tableBody.appendChild(row);
}