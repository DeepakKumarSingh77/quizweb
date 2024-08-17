const inputdata=document.getElementById('inputcont').getElementsByTagName("input")[0];
const btn=document.getElementById('addbtn');

const container=document.getElementById('container').getElementsByTagName("ul")[0];

function Adddata(){
    console.log("hello");
      if(inputdata.value===""){
        alert("please fill data in input field");
      }else{
        let li=document.createElement("li");
        li.innerHTML=inputdata.value;
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        container.appendChild(li);
        savedata();
      }
      inputdata.value="";
}

container.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

inputdata.addEventListener("keypress",function(e){
    if(e.key==='Enter'){
        Adddata();
    }
})

function savedata(){
      const arr=[];
      container.querySelectorAll("li").forEach(li=>{
        arr.push({
            text:li.textContent.replace("\u00d7","").trim(),
            checked:li.classList.contains("checked")
        })
      })
      localStorage.setItem("data",JSON.stringify(arr));
}

function getdata(){
    const arr=JSON.parse(localStorage.getItem("data") || "[]");
    arr.forEach(item=>{
        let li = document.createElement("li");
        li.textContent = item.text; // Set the text content of the list item
        if (item.checked) li.classList.add("checked");

        let span = document.createElement("span");
        span.textContent = "\u00d7"; // Unicode character for the multiplication sign

        li.appendChild(span);
        container.appendChild(li);
})
}


window.onload=function(){
    getdata();
}
