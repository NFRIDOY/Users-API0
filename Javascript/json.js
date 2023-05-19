document.getElementById("showUsers").addEventListener("click", function () {
    //  alert("Clicked");
    document.getElementById("User-List").style.display = "block";

    loadData();
})

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
function loadData() {
    const usersList = document.getElementById("User-List");
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const names = data[i].name;
                console.log(names);
                const userNames = document.createElement("li");
                userNames.innerHTML = names;
                usersList.appendChild(userNames);
            }

        })
}
document.getElementById("hideUsers").addEventListener("click", function(){
    deleteData("User-List");
})

function deleteData(id) {
    console.log("Hide");
    document.getElementById(id).innerHTML=" ";
}