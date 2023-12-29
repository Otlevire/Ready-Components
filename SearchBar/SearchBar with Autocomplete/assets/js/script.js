const searchWrapper = document.querySelector(".search-input");
const inputBox = document.getElementById("searchName");
const suggBox = document.querySelector(".autocom-box");
const btn = document.querySelector(".icon");

btn.addEventListener("click", ()=>{
    makeSearch() 
        
});

inputBox.addEventListener("keypress", (e)=>{
    if (e.key == "Enter")
        makeSearch()
});

// if user press any key and release
inputBox.addEventListener("keyup", (e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().includes(userData.toLocaleLowerCase());
        });
       emptyArray = emptyArray.map((data)=>{
        return data = '<li>'+ data+'</li>';
       });
       console.log(emptyArray);
       searchWrapper.classList.add("active");
       showSuggestions(emptyArray);
       let allList = suggBox.querySelectorAll("li")
       allList.forEach(element => {
        element.setAttribute("onclick", "select(this)");
       });
    }
    else{
        searchWrapper.classList.remove("active");
    }
})

function select(element) {
    inputBox.value = element.textContent;
    searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
    suggBox.innerHTML = (!list.length)? '<li>'+inputBox.value+'</li>': list.join('');
}

function makeSearch() {
    if(inputBox.value)
        window.open("https://www.google.com/search?q="+inputBox.value,"SingleSecondaryWindowName")
    inputBox.value =""
}