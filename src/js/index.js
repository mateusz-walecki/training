const buttonAdd = document.querySelector('#buttonAdd');
buttonAdd.addEventListener("click", addRow);

var list=[];

function addRow(){
    var name = document.getElementById('nameInput').value;
    var description = document.getElementById('descriptionInput').value;      
    var catogory = document.getElementById('categoryInput').value;      
    var price = document.getElementById('priceInput').value;      

    var obj=new Object();
    obj.name=name;
    obj.description=description;
    obj.catogory=catogory;
    obj.price=price;

    list.push(obj);
    loadTable();
    showTable();
}

function loadTable(){
    var html="";
    var equipmentTableBody=document.getElementById('equipmentTableBody');

    if(list.length>0){
        for(var i=0;i<list.length;i++){
            list[i].index=i;
            html+="<tr>";
                html+="<td>"+list[i].name+"</td>";
                html+="<td>"+list[i].description+"</td>";
                html+="<td>"+list[i].catogory+"</td>";
                html+="<td>"+list[i].price+"</td>";
            html+="</tr>";
        }

        equipmentTableBody.innerHTML=html;
    }
    else{
      if(equipmentTableBody.innerHTML!=""){
        equipmentTableBody.innerHTML="";
        showTable();
      }
    }
}


function showTable(){
  var el = document.getElementById("equipmentTable");

  if(list.length>0){
        if(el.classList.contains('d-none')){
          el.classList.remove('d-none');
        }
    }
    else{
      if(!el.classList.contains('d-none')){
        el.classList.add('d-none');
      }
    }
}