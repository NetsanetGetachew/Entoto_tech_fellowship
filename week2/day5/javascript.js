var humah={
username: "netsi",
password: "4040",
phone:"0940213713"
}
function signin()
{
    
   
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var phone=document.getElementById("phone").value;
    
       if (username == humah.username && password == humah.password && phone==humah.phone){
            window.open("./home.html")
            alert("succesfully")
        }
        else{
           alert("incorrect username")
        }
    }




