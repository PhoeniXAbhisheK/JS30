const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const resetData = document.querySelector('.reset-data');
const selectData = document.querySelector('.select-data');
const unselectData = document.querySelector('.unselect-data');
const items = JSON.parse(localStorage.getItem('items')) || [];

// console.log(items);
function polulateList(data, list) {
	const dataDetails = data.map((dataItems, i) => {
		return `
			<li>
				<input type="checkbox" data-index=${i} id="item${i}" ${dataItems.isChecked ? 'checked' : ''}/>
				<label for="item${i}">${dataItems.itemName}</label>
			</li>
		`;
	}).join('');
	itemsList.innerHTML = dataDetails;
	// console.log(dataDetails);
	// console.log(list);
}

function storePopulate (items, itemsList) {
	localStorage.setItem('items', JSON.stringify(items));
	console.table(items);
    polulateList(items, itemsList);
}

function addItem(e) {
    e.preventDefault();
    const textName = (this.querySelector('[name=item]')).value;
    const itemDetails = {
        itemName: textName,
        isChecked: false
    }
    items.push(itemDetails);
    storePopulate(items, itemsList);
    this.reset();
}

function toggleChecked (e) {
	if(!e.target.matches('input')) return;
	const element = e.target;
	const index = element.dataset.index;
	items[index].isChecked = !items[index].isChecked;
    storePopulate(items, itemsList);
	
}

function clearData () {
	localStorage.setItem('items', null);
	window.location.reload();
}

function checkData () {
	// console.log(typeof(this.dataset.value));
	items.forEach(dataItem => {
		dataItem.isChecked = this.dataset.value === "true" ? true : false;
	})
    storePopulate(items, itemsList);
	// window.location.reload();
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleChecked);
resetData.addEventListener('click', clearData);
selectData.addEventListener('click', checkData);
unselectData.addEventListener('click', checkData);

polulateList(items, itemsList);