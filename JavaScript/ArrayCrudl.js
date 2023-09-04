let Birdsname=["Sparrow","Eagle","Raven","Quail","Hummingbird","Pigeon","Parrot","Lovebird"]

let adding=()=>
{
    let newvalue=document.getElementById("uservalue").value;
    Birdsname.push(newvalue);
    alert(newvalue+"has been added")

    viewing()
}
let sorting=()=>
{
    Birdsname.sort()
    viewing()
}
let viewing=()=>
{
    let simple=""

    Birdsname.map((newbird)=>
    {
       simple+="<tr><td>"+newbird+"</td></tr>"
    })
    document.getElementById('listall').innerHTML="<table><thead><tr><th>birdsname</th></tr></thead><tbody>"+simple+"</tbody></table>"
}
let erasing=()=>
{
    let deletevalue =document.getElementById("uservalue").value;
    
    Birdsname=Birdsname.filter((getting)=>
    {
        if(getting!==deletevalue)
        {
            return Birdsname;
        }
    })
    viewing()
}
let 