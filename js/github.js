var profilInput = document.getElementById("profil");
var searchButton = document.getElementById("search");

var profilPic = document.getElementById("profilPic");
var profilName = document.getElementById("profilName");
var profilUrl = document.getElementById("profilUrl");


const client_ID = "Iv1.184101f48047747b";
const client_secret = "1c8a42ed6a1ec37385b42bea18f7abb911989b71";

const fetchUsers = async (user) => {
    var apiCall = await fetch(`https://api.github.com/users/${user}?client=${client_ID}&client_secret=${client_secret}`);
    var data = await apiCall.json();
    return { data };
};

function check(name){
    if (name == null){
        return "This User hasn't chosen his name yet!"
    }
    else{
        return name;
    }
}
const showData = () => {
    fetchUsers(profilInput.value).then((res) => {
        console.log(res);
        profilName.textContent = ` Name: ${check(res.data.name)} `;
        profilUrl.textContent = `Profil Link: ${res.data.html_url} `;
        profilUrl.href = res.data.html_url;
        profilPic.src = res.data.avatar_url;
    })
};


searchButton.addEventListener("click",function(e){
    e.preventDefault();
    showData();
});