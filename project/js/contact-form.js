let clicks = 0;

let IName = document.getElementById('InputName');
let IEmail = document.getElementById('InputEmail');
let IMobile = document.getElementById('InputMobile');
let IAddress = document.getElementById('InputAddress');
let message = document.getElementById("message");
let result_table = document.getElementById("outputTab");


function result() {
    
    
    clicks++;

    
    let tr = document.createElement("TR");
    let cName = IName.value;
    let cEmail = IEmail.value;
    let cMobile = IMobile.value;
    let cAddress = IAddress.value;

   
    function clearValues() {
        IName.value = '';
        IEmail.value = '';
        IMobile.value = '';
        IAddress.value = '';
    }

   

    if (cName !== "" || cEmail !== "" || cMobile !== "") {

    
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
        if (reg.test(cEmail) == false) 
        {
            
            message.classList.add("alert-success");
            message.innerHTML = "Invalid Email Address!";
           
        }
        else{
            clearValues();

            message.classList.remove("alert-danger");
            message.classList.add("alert-success");
            message.innerHTML = "Successfully form submited!";
    
            tr.setAttribute("id", "tr"+"_row"+ clicks);
    
            let cEdit = new DOMParser().parseFromString('<button  class="btn btn-icon" title="Edit"  onclick="edit(this)"><i class="icon icon-edit">-</i></button>', 'text/html');
            let cDelete = new DOMParser().parseFromString('<button class="btn btn-icon" title="Delete"  onclick="Deletefun(this)">' + '<i class="icon icon-delete">-</i>' + '</button>', 'text/html');
            
            for (i = 0; i < 6; i++) {
                let txList = [cName, cEmail, cMobile, cAddress, cEdit, cDelete];
                let td = document.createElement("TD");
                var att = document.createAttribute("id"); 
                att.value = "td_"+ i +"_row"+ clicks;       
                td.setAttributeNode(att);
                let tx = '';
                if (i > 3) {
                    tx = txList[i].body.firstChild;
                } else {
                    tx = document.createTextNode(txList[i]);
                }
                td.appendChild(tx);
                tr.appendChild(td);
            }
            result_table.appendChild(tr);
    
            setTimeout(function(){
                message.innerHTML="";
                message.classList.remove("alert-success");
            },1500);
        
            
        }

    }
    else {
        message.classList.add("alert-danger");
        message.innerHTML = "Missing Field! Please check it";

    }
}

function edit(ebtn){

    let tr_id = ebtn.parentNode.parentNode;
    let childs = tr_id.childNodes;

    let e_0 = childs[0].getAttribute("id");
    let e_1 = childs[1].getAttribute("id");
    let e_2 = childs[2].getAttribute("id");
    let e_3 = childs[3].getAttribute("id");
    let e_4 = childs[4].getAttribute("id");

    let e_name = document.getElementById(e_0);
    let e_email = document.getElementById(e_1);
    let e_mobile = document.getElementById(e_2);
    let e_address = document.getElementById(e_3);
    let e_edit = document.getElementById(e_4);

    var e_name_data = e_name.innerHTML;
    var e_email_data = e_email.innerHTML;
    var e_mobile_data = e_mobile.innerHTML;
    var e_address_data = e_address.innerHTML;
    
    
    e_name.innerHTML="<input type='text' class='td-text' id='name_text" +"' value='"+e_name_data+"'>";
    e_email.innerHTML="<input type='text' class='td-text' id='email_text" +"' value='"+e_email_data+"'>";
    e_mobile.innerHTML="<input maxlength='10' type='text'  class='td-text' id='mobile_text" +"' value='"+e_mobile_data+"'>";
    e_address.innerHTML="<input type='text' class='td-text' id='address_text" +"' value='"+e_address_data+"'>";
    e_edit.innerHTML = "<button  class='btn btn-icon' title='Save'  onclick='save(this)'><i class='icon icon-save'>save</i></button>";

    
}

function save(sbtn){


    let tr_id = sbtn.parentNode.parentNode;
    let childs = tr_id.childNodes;

    let e_0 = childs[0].getAttribute("id");
    let e_1 = childs[1].getAttribute("id");
    let e_2 = childs[2].getAttribute("id");
    let e_3 = childs[3].getAttribute("id");
    let e_4 = childs[4].getAttribute("id");


    let e_edit = document.getElementById(e_4);
    e_edit.innerHTML ="<button  class='btn btn-icon' title='Save'  onclick='edit(this)'><i class='icon icon-edit'>-</i></button>";

    var name_val =document.getElementById("name_text").value;
    var email_val =document.getElementById("email_text").value;
    var mobile_val =document.getElementById("mobile_text").value;
    var address_val =document.getElementById("address_text").value;

    document.getElementById(e_0).innerHTML= name_val;
    document.getElementById(e_1).innerHTML= email_val;
    document.getElementById(e_2).innerHTML= mobile_val;
    document.getElementById(e_3).innerHTML= address_val;

}

function Deletefun(dbtn) {
    let drow = dbtn.parentNode.parentNode.rowIndex;
    document.getElementById("outputTab").deleteRow(drow);
}

