var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["author"] = document.getElementById("author").value;
    formData["name"] = document.getElementById("name").value;
    formData["director"] = document.getElementById("director").value;
    formData["genre"] = document.getElementById("genre").value;
    formData["year"] = document.getElementById("year").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.author;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.director;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.genre;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.year;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Редактировать</a>
                       <a onClick="onDelete(this)">Удалить</a>`;
}

function resetForm() {
    document.getElementById("author").value = "";
    document.getElementById("name").value = "";
    document.getElementById("director").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("year").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("author").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("director").value = selectedRow.cells[2].innerHTML;
    document.getElementById("genre").value = selectedRow.cells[3].innerHTML;
    document.getElementById("year").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.director;
    selectedRow.cells[2].innerHTML = formData.genre;
    selectedRow.cells[3].innerHTML = formData.graduationYear;
}

function onDelete(td) {
    if (confirm('Вы уверены что хотите удалить?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("author").value == "") {
        isValid = false;
        document.getElementById("AuthorValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("AuthorValidationError").classList.contains("hide"))
            document.getElementById("AuthorValidationError").classList.add("hide");
    }
    return isValid;
}s