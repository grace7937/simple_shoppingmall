//Fetch the items from the JSON file
function loadItems() {
  return (
    fetch('data/data.json')
      .then((response) => console.log(response))
      // .then((response) => response.json())
      // .then((json) => json.items)
      .catch((err) => console.log(err))
  );
}

//Update the list wuth the given items
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

//Create HTML list from the given data item
function createHTMLString(item) {
  return `
  <li class="item">
  <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
  <span class="item__description"${item.gender}" ${item.size}"/span>
</li>
  `;

  // Handle button click
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  if(key == null || value || null) {
  return;
}
updateItems(items, key, value);
}
  displayItems (items.filter(item=>item[key] == value));

  //Make the items matching {key : value } invisible.
function updateItems(items,key, value) {
  items.forEach(item ==> {
    if(item,dataset{key} === value) { item.classList.remove('invisible');
  }else {
    item.classList.add{'invisible'};
  }
  });
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(item));
  buttons.addEventListener('click', event => onButtonClick(event,items));
}

// main
loadItems()
  .then((items) => {
    // displayItems(items);
    // setEventListencers(items);
  })
  .catch(console.log);
