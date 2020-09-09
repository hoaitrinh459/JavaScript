var svs = [];

var sv = {
    MSSV: 102170310,
    Name: "La Hoài Trinh",
    Email: "hoaitrinh459@gmail.com"
}
svs.push(sv);
var sv1 = {
    MSSV: 102170268,
    Name: "Nguyễn Tuấn Đạt ",
    Email: "bkdn.ntdat@gmail.com"
}
svs.push(sv1);

document.getElementById("add").onclick = function(){
    Add();
} 

document.getElementById("show").onclick = function(){    
    Show();
}

document.getElementById("update").onclick = function(){    
    Update();
}

document.getElementById("delete").onclick = function(){    
    Delete();
}

function Add(){
    var i;
    for(i=0; i<svs.length; i++){
        if(svs[i].MSSV == document.getElementById("mssv").value){
            alert("Mã số sinh viên đã tồn tại!");
        }
        return;
    }
    var sv = {
        MSSV: document.getElementById("mssv").value,
        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value
    }

    svs.push(sv);

    Show();
}

function Show(){
    var show_sv = document.getElementById("show_sv");
    var i;

    show_sv.innerHTML = "";

    for(i=0; i<svs.length; i++){
        show_sv.innerHTML += "<p id=\""+ svs[i].MSSV +"\" onclick=\"View(id)\">" + svs[i].MSSV +", " +svs[i].Name + ", " + svs[i].Email + "</p>";
    }
}

function View(id){
    var i;
    console.log(id)
    for(i=0; i<svs.length; i++){
        if(svs[i].MSSV == id){
            document.getElementById("mssv").value = svs[i].MSSV;
            document.getElementById("mssv").disabled = true;
            document.getElementById("name").value = svs[i].Name;
            document.getElementById("email").value = svs[i].Email;
        }
        
    } 
}

function Update(){
    var i;
    for(i=0; i<svs.length; i++){
        if(document.getElementById("mssv").value == svs[i].MSSV){
            svs[i].Name = document.getElementById("name").value;
            svs[i].Email = document.getElementById("email").value;
        }
    }

    if(confirm("Bạn có muốn Update?"))
        Show();
}

function Delete(){
    var i;
    for(i=0; i<svs.length; i++){
        if(document.getElementById("mssv").value == svs[i].MSSV){
            svs.splice(i,1);
        }
    }
    if(confirm("Bạn có muốn Delete?")){
        document.getElementById("mssv").value = "";
        document.getElementById("mssv").disabled = false;
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        Show();
    }
}