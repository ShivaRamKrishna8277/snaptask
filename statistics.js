//toogle

var overview = document.getElementById('overview-container');
var earnings = document.getElementById('earnings-container');
var overviewheading = document.getElementById('overview');
var earningsheading = document.getElementById('earnings');

function showoverview(){
    overview.style.display = "block";
    earnings.style.display = "none";
    overviewheading.style.borderBottom = "2px solid #2f3c7e";
    overviewheading.style.color = "#2f3c7e";
    overviewheading.style.opacity = "1";
    earningsheading.style.borderBottom = "none";
    earningsheading.style.color = "#000000";
    earningsheading.style.opacity = "0.5";
}
function showearnings(){
    overview.style.display = "none";
    earnings.style.display = "block";
    overviewheading.style.borderBottom = "none";
    overviewheading.style.color = "#000000";
    overviewheading.style.opacity = "0.5";
    earningsheading.style.borderBottom = "2px solid #2f3c7e";
    earningsheading.style.color = "#2f3c7e";
    earningsheading.style.opacity = "1";
}



// Sample data for the earnings
const earningsData = [
    { month: 'Jan', amount: 500 },
    { month: 'Feb', amount: 800 },
    { month: 'Mar', amount: 1200 },
    { month: 'Apr', amount: 950 },
    { month: 'May', amount: 1500 },
    { month: 'Jun', amount: 1800 },
];

// Get the canvas element and create the chart context
const canvas = document.getElementById('earnings-chart');
const ctx = canvas.getContext('2d');

// Create the line chart using Chart.js
new Chart(ctx, {
    type: 'line',
    data: {
      labels: earningsData.map(data => data.month),
      datasets: [{
        label: 'Earnings',
        data: earningsData.map(data => data.amount),
        backgroundColor: 'rgba(37, 60, 126, 0.2)', // Set fill color with 20% opacity
        borderColor: '#2f3c7e',
        borderWidth: 1,
        pointRadius: 6,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
        pointHoverRadius: 6,
        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointHoverBorderColor: 'rgba(255, 255, 255, 1)',
        tension: 0.5,
        fill: true, // Enable fill below the line
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: value => '₹' + value.toLocaleString('en-IN'),
            font: {
              size: 12,
            },
            maxTicksLimit: 5, // Limit the number of visible ticks on the y-axis
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)', // Set grid line color to transparent
            drawBorder: false, // Hide the grid line border
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      elements: {
        area: {
          backgroundColor: 'rgba(37, 60, 126, 0.2)', // Set fill color for the area below the line
        },
      },
    },
  });
  

