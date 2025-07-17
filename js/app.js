const form = document.getElementById("myForm");
const fileInput = document.getElementById("photo");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.querySelector("#firstname").value
    const lastName = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const hireDate = document.querySelector("#hire_date").value;


    const tr = document.createElement("tr");

    const fileName = fileInput.files[0].name;

    const tdImage = document.createElement('td');
    tdImage.innerHTML = `<img src="../images/${fileName}" width="30" />`

    tr.appendChild(tdImage)

    const tdFirstName = document.createElement('td');
    tdFirstName.textContent = firstName;
    tr.appendChild(tdFirstName);

    const tdLastName = document.createElement('td');
    tdLastName.textContent = lastName;
    tr.appendChild(tdLastName);

    const tdEmail = document.createElement('td');
    tdEmail.textContent = email;
    tr.appendChild(tdEmail);

    const tdHireDate = document.createElement('td');
    tdHireDate.textContent = hireDate;
    tr.appendChild(tdHireDate);

    form.reset();

    const tdAction = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        if (confirm("Are you sure you want to delete this Employee?")) {
            tr.remove();
        } else {
            return;
        }


    });
    tdAction.appendChild(deleteButton);
    tr.appendChild(tdAction);

    //alert(tr)
    document.querySelector("#employeeList").appendChild(tr);
})

/*
createElement()
appendChild()
remove()
addEventListenr()

*/