const section1 = document.getElementById("section-part-1");
const section2 = document.getElementById("section-part-2");

const step1Title = document.getElementById("step-title-1");
const step2Title = document.getElementById("step-title-2");

const nameInput = document.getElementById("student-name");
const ageInput = document.getElementById("student-age");
const phoneInput = document.getElementById("student-phone");
const emailInput = document.getElementById("student-email");

const tableBody = document.getElementById("student-table-body");
const form = document.getElementById("registration-form");


let students = [];


function validateStepOneAndProceed() {

    let ok = true;

   
    document.getElementById("name-error-msg").textContent = "";
    document.getElementById("age-error-msg").textContent = "";
    document.getElementById("phone-error-msg").textContent = "";
    document.getElementById("email-error-msg").textContent = "";

 
    if (nameInput.value.trim() === "") {
        document.getElementById("name-error-msg").textContent = "Name is required";
        ok = false;
    }


    const age = parseInt(ageInput.value);

    if (!ageInput.value) {
        document.getElementById("age-error-msg").textContent = "Age is required";
        ok = false;
    } else if (isNaN(age) || age < 12 || age > 100) {
        document.getElementById("age-error-msg").textContent = "Enter a valid age (12-100)";
        ok = false;
    }



    const phoneValue = phoneInput.value.trim();

if (!phoneValue.match(/^03\d{9}$/)) {
    document.getElementById("phone-error-msg").textContent =
        "Phone number must start with 03 and be 11 digits long.";
    ok = false;
}


const emailValue = emailInput.value.trim();

if (!emailValue.includes("@") || !emailValue.includes(".")) {
    document.getElementById("email-error-msg").textContent =
        "Valid email enter karo";
    ok = false;
}

  
    if (ok) {

        section1.classList.add("hide-element");
        section2.classList.remove("hide-element");

        step1Title.classList.remove("active");
        step2Title.classList.add("active");

       
        document.getElementById("summary-preview-name").textContent = nameInput.value;
        document.getElementById("summary-preview-age").textContent = ageInput.value;
        document.getElementById("summary-preview-phone").textContent = phoneInput.value;
        document.getElementById("summary-preview-email").textContent = emailInput.value;
    }
}



function goBackToStepOne() {
    section2.classList.add("hide-element");
    section1.classList.remove("hide-element");

    step2Title.classList.remove("active");
    step1Title.classList.add("active");
}



function loadData() {
    const saved = localStorage.getItem("students");

    if (saved) {
        students = JSON.parse(saved);
    }

    renderTable();
}



function renderTable() {

    tableBody.innerHTML = "";

    if (!students.length) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;">
                    No data yet
                </td>
            </tr>
        `;
        return;
    }

    students.forEach((item, i) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.phone}</td>
            <td>${item.email}</td>
            <td>
                <button class="delete-item-btn" onclick="deleteStudent(${i})">
                    delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}



function deleteStudent(i) {
    students.splice(i, 1);
    localStorage.setItem("students", JSON.stringify(students));
    renderTable();
}



form.addEventListener("submit", function (e) {
    e.preventDefault();

    const newEntry = {
        name: nameInput.value.trim(),
        age: ageInput.value,
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim()
    };

    students.push(newEntry);

    localStorage.setItem("students", JSON.stringify(students));

    form.reset();
    renderTable();

    alert("Saved successfully");

    goBackToStepOne();
});



window.onload = function () {
    loadData();
};