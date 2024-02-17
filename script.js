var arr = [
    {name:"petals of roses",image:"https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=401&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Animals of town",image:"https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"the crowd of city",image:"https://images.unsplash.com/photo-1506755594592-349d12a7c52a?q=80&w=966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"fruits of planet",image:"https://images.unsplash.com/photo-1511909525232-61113c912358?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RnJ1aXRzJTIwb2YlMjBwbGFuZXR8ZW58MHx8MHx8fDA%3D"},
    {name:"orange peeled",image:"https://plus.unsplash.com/premium_photo-1676642609912-7e47d0c59ba1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwcGVlbHxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"web design",image:"https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]


function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
       clutter += `<div class="box">
       <img class = "cursor-pointer" src =  "${obj.image}" alt="${obj.name}"/>
       <div class="caption">Lorem ipsum</div>
       </div>`;
      })
      document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionality(){

    var  input = document.querySelector("#searchinput");
    
    input.addEventListener("focus",function(){
    document.querySelector(".overlay").style.display = "block";
    });
    input.addEventListener("blur",function(){
           document.querySelector(".overlay").style.display = "none";
    });
   input.addEventListener("input",function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
            </div>`
        })
        
        var res = document.querySelector(".searchdata");
        res.style.display = "block";
        res.innerHTML = clutter;
    });
    document.addEventListener("click", function (event) {
        const searchdata = document.querySelector(".searchdata");
        if (!event.target.closest(".searchdata, #searchinput")) {
            searchdata.style.display = "none";
        }
    });
    

}

handleSearchFunctionality();
showTheCards();