var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var lookup = $('i')
var search = $('#search')

lookup.onclick = () => {
    search.focus()
}


//getting all required elements
const searchWrapper = document.querySelector(".search_input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

// If user press any key and release
inputBox.onkeyup = (e) =>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestion.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());

        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>' +data+ '</li>';

        });
        console.log(emptyArray);
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = document.querySelectorAll("li");
        for(let i = 0; i < allList.length; i++){
            allList[i].setAttribute("onclick", "select(this)")

        }

    }else{
        searchWrapper.classList.remove('active');
        
    }
    
}
function select(element){
    let userSelectData = element.textContent;
    inputBox.value = userSelectData;
    searchWrapper.classList.remove('active');
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+userValue+'</li>';

    }else{
        listData = list.join('');

    }
    suggBox.innerHTML = listData;
}

let suggestion = [
    "Financial Analyst",
    "Freshers",
    "Freelance",
    "Front-end developer",
    "Finance and Accounting",
    "Sales",
    "Makerting Manager",
    "Banking",
    "IT- Software",
    "IT Manager",
    "IT Helpdesk",
    "IT Support",
    "IT Software Developer",
    "IT Communication",
    "Bussiness Analyst",
    "Mechanical Engineer",
    "Manager",
    "Merchandier",
    "R&D Engineer",
    "R&D Staff",
    "Recruiter",
    "Representative",
    "Receiptionist",
    "Web Developer",
    "Warehouse Managerment",
    "Warehouse Staff",
    "Warehouse Supply"
]