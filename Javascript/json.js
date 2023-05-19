document.getElementById("showUsers").addEventListener("click", function () {
    //  alert("Clicked");
    document.getElementById("User-List").style.display = "block";
    const userCount = document.getElementById("user-count").value;
    console.log(userCount);
    loadData(userCount);
});

// async function loadData(URL) {
//     const responce = await fetch("URL");
//     const data = responce.json();

//     return data;
// }

// loadData("https://jsonplaceholder.typicode.com/users").then( data => {
//     displayNames(data);

// });
// function displayNames(data) {
//     data => data.map( );
// }

// ------------
function loadData(userCount) {
    const usersList = document.getElementById("User-List");
    usersList.innerHTML = "";
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            if (userCount == "") {
                // userCount = data.length;
            } else {
                for (let i = 0; i < data.slice(0,userCount) ; i++) {
                    const names = data[i].name;
                    console.log(names);
                    const userNames = document.createElement("li");
                    
                    userNames.innerHTML = `Name: ${names}. <button ="id${data[i].id}" onclick="showDetails(${data[i].id})">show Details ${data[i].id}</button>`;
                    // userNames.setAttribute.setAttribute("class","userNamesli")
                    usersList.appendChild(userNames);
                }
            }
        });
}
document.getElementById("hideUsers").addEventListener("click", function () {
    deleteData("User-List");
});

function deleteData(id) {
    console.log("Hide");
    document.getElementById(id).innerHTML = " ";
}
function showDetails(details, userNames) {
    console.log("Show Details Clicked");
    fetch(`https://jsonplaceholder.typicode.com/users/${details}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            console.log(data.id);
            // const li = document.getElementById(`id${details}`);
            // const li = document.getElementsByClassName("userNamesli");
            const ulUserDetails = document.getElementById("user-details");
            const liUser = document.createElement("li");
            liUser.innerHTML = `
            <p>Id: ${data.id}</p>
            <p>name: ${data.name}</p>
            <p>username: ${data.username}</p>
            <p>email: ${data.email}</p>
            <p>Address: ${data.address}</p>
            <p>Id: ${data.id}</p>
            <p>Id: ${data.id}</p>`;
            ulUserDetails.appendChild(liUser);
        });
}
