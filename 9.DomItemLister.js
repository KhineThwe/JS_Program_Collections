<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var form = document.getElementById('addForm');
        var itemList = document.getElementById('items');
        var filter = document.getElementById('filter');

        // Form submit event
        form.addEventListener('submit', addItem);
        // Delete event
        itemList.addEventListener('click', removeItem);
        // Filter event
        filter.addEventListener('keyup', filterItems);

        // Add item
        function addItem(e){
        e.preventDefault();

        // Get input value
        var newItem = document.getElementById('item').value;

        // Create new li element
        var li = document.createElement('li');
        // Add class
        li.className = 'list-group-item';
        // Add text node with input value
        li.appendChild(document.createTextNode(newItem));

        // Create del button element
        var deleteBtn = document.createElement('button');

        // Add classes to del button
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

        // Append text node
        deleteBtn.appendChild(document.createTextNode('X'));

        // Append button to li
        li.appendChild(deleteBtn);

        // Append li to list
        itemList.appendChild(li);
        }

        // Remove item
        function removeItem(e){
        if(e.target.classList.contains('delete')){
            if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
            }
        }
        }

        // Filter Items
        function filterItems(e){
        // convert text to lowercase
        var text = e.target.value.toLowerCase();
        // Get lis
        var items = itemList.getElementsByTagName('li');
        // Convert to an array
        Array.from(items).forEach(function(item){
            var itemName = item.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
            } else {
            item.style.display = 'none';
            }
        });
        }

    </script>
</head>
<body>
    <header id="main-header" class="bg-success text-white p-4 mb-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
                <h1 id="header-title">Item Lister</h1>
            </div>
            <div class="col-md-6 align-self-center">
                <input type="text" class="form-control" id="filter" placeholder="Search Items...">
            </div>
          </div>
        </div>
      </header>
      <div class="container">
       <div id="main" class="card card-body">
        <h2 class="title">Add Items</h2>
        <form id="addForm" class="form-inline mb-3">
          <input type="text" class="form-control mr-2" id="item">
          <input type="submit" class="btn btn-dark" value="Submit">
        </form>
        <h2 class="title">Items</h2>
        <ul id="items" class="list-group">
          <li class="list-group-item">Item 1 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
          <li class="list-group-item">Item 2 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
          <li class="list-group-item">Item 3 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
          <li class="list-group-item">Item 4 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
        </ul>
       </div>
      </div>
</body>
<script src="index.js"></script>
</html>
