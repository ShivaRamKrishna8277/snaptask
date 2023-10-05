

//post project form
var individualtext = document.getElementById("individual");
var businesstext = document.getElementById("business");
var individualform = document.getElementById("individual-form");
var businessform = document.getElementById("business-form");

function showindividual() {
  individualtext.style.color = "#2f3c7e";
  individualtext.style.borderBottom = "2px solid #2f3c7e";
  businesstext.style.color = "#0000007e";
  businesstext.style.borderBottom = "none";
  individualform.style.display = "block";
  businessform.style.display = "none";
}

function showbusiness() {
  individualtext.style.color = "#0000007e";
  individualtext.style.borderBottom = "none";
  businesstext.style.color = "#2f3c7e";
  businesstext.style.borderBottom = "2px solid #2f3c7e";
  individualform.style.display = "none";
  businessform.style.display = "block";
}

//dropdown list
document.addEventListener("click", function (event) {
  const dropdowns = document.getElementsByClassName("custom-select");
  for (let i = 0; i < dropdowns.length; i++) {
    const dropdown = dropdowns[i];
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
    }
  }
});

const customSelects = document.getElementsByClassName("custom-select");
for (let i = 0; i < customSelects.length; i++) {
  const customSelect = customSelects[i];
  const selected = customSelect.querySelector(".select-selected");
  const items = customSelect.querySelector(".select-items");

  selected.addEventListener("click", function () {
    customSelect.classList.toggle("open");
  });

  items.addEventListener("click", function (event) {
    selected.innerHTML = event.target.innerHTML;
    customSelect.classList.remove("open");
  });
}


//filter
const filterItems = document.querySelectorAll('.select-items > div');
const projectsTable = document.getElementById('projects-table');
const tableRows = projectsTable.getElementsByTagName('tr');

// Attach click event listeners to filter items
filterItems.forEach(item => {
  item.addEventListener('click', () => {
    const selectedOption = item.textContent.trim();
    filterTable(selectedOption);
  });
});

// Function to filter the table based on the selected option
function filterTable(option) {
  // Convert the option to lowercase for case-insensitive matching
  const lowercaseOption = option.toLowerCase();

  // Iterate over the table rows and show/hide them based on the selected option
  for (let i = 1; i < tableRows.length; i++) {
    const category = tableRows[i].getElementsByTagName('td')[2].textContent.toLowerCase();
    if (category === lowercaseOption || lowercaseOption === 'all') {
      tableRows[i].style.display = '';
    } else {
      tableRows[i].style.display = 'none';
    }
  }
}
// Initially show all table rows
filterTable('all');



//search
const searchInput = document.querySelector('#search input');

// Attach input event listener to search input
searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.trim().toLowerCase();
  filterTableBySearch(searchValue);
});

// Function to filter the table based on the search input
function filterTableBySearch(searchValue) {
  // Iterate over the table rows and show/hide them based on the search input
  for (let i = 1; i < tableRows.length; i++) {
    const rowText = tableRows[i].textContent.toLowerCase();
    if (rowText.includes(searchValue)) {
      tableRows[i].style.display = '';
    } else {
      tableRows[i].style.display = 'none';
    }
  }
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

