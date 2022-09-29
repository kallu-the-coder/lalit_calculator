const res = document.getElementById("res");                                        //selecting elements

var row1 = document.getElementById("row1");                                      
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var row4 = document.getElementById("row4");
var row5 = document.getElementById("row5");


  for (let i = 1; i <=3 ; i++) {                                                   //loop for inserting elements in first row
    row1.innerHTML += `<td><button onclick="main(${i})">${i}</button></td>`;
  }

  for (let i = 4; i <=6 ; i++) {
    row2.innerHTML += `<td><button onclick="main(${i})">${i}</button></td>`;      //loop for inserting elements in second row
  }

  for (let i = 7; i <=9 ; i++) {
    row3.innerHTML += `<td><button onclick="main(${i})">${i}</button></td>`;      //loop for inserting elements in third row
  }

  row1.innerHTML += `<td><button onclick="main('/')">/</button></td>`;          
  row2.innerHTML += `<td><button onclick="main('-')">-</button></td>`;
  row3.innerHTML += `<td><button onclick="main('+')">+</button></td>`;

  row4.innerHTML += `<td><button onclick="main('.')">.</button></td>`;           //adding fourth row elements 
  row4.innerHTML += `<td><button onclick="square()">Sq.</button></td>`;
  row4.innerHTML += `<td><button onclick="main('0')">0</button></td>`;
  row4.innerHTML += `<td><button onclick="main('*')">*</button></td>`;

  row5.innerHTML += `<td><button onclick="main('%')">%</button></td>`;           //adding fofth row elements 
  row5.innerHTML += `<td><button onclick="main('enter')" >Ans</button></td>`;
 

  function square()
  {
      const num = document.getElementById('res').innerHTML;;
      main(`*${num}`);
      main('enter');
  }


function main(dat){
    if (dat == "erase"){
        res.innerText = ""
    }
    else if (dat == "enter"){
        res.innerText = eval(res.innerText);
    }
    else{
        res.innerText = res.innerText + dat;
    }
}

