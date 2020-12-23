// using of literals and prototype

function library(name,author,type)
{
    this.name=name;
    this.author=author;
    this.type=type;
}
function display()
{

}
display.prototype.add=function(library1)
{
    let tablebody=document.getElementById("tablebody");
    let string=`
                <tr>
                    <td>${library1.name}</td>
                    <td>${library1.author}</td>
                    <td>${library1.type}</td>
                </tr>
               `
    tablebody.innerHTML+=string;
}
display.prototype.clear=function()
{
    let form=document.getElementById("form1");
    form.reset();
}
display.prototype.show=function(type,displaymessage)
{
    let message=document.getElementById("message");
        let mess=`
        <div class="alert-${type}" role="alert">
        <br>
        <center><h4 class="alert-heading">Message: ${displaymessage}</h4></center>
        <br>
        </div>
        `
        message.innerHTML=mess;
        setTimeout(()=>{
            message.innerHTML="";
        },2000);
}
display.prototype.validate=function(library1)
{
    if((library1.name.length<2)||(library1.name.length<2))
        {
            return false;
        }
        else
        {
            return true;
        }
}


let but=document.getElementById("form1");
but.addEventListener("submit",submitform);

function submitform(e)
{
    let name=document.getElementById("bookname").value;
    let author=document.getElementById("authorname").value;
    let type;
    let cooking=document.getElementById("cooking");
    let fiction=document.getElementById("fiction");
    let programming=document.getElementById("programming");
    if(cooking.checked)
    {
        type=cooking.value;
    }
    else if(fiction.checked)
    {
        type=fiction.value;
    }
    else if(programming.checked)
    {
        type=programming.value;
    }
    library1=new library(name,author,type);
    display1=new display();
    if(display1.validate(library1))
    {
        display1.add(library1);
        display1.clear();
        display1.show('success','Your book is successfully add in a library');
    }
    else
    {
        display1.show('danger','Your book is not successfully add in a library');
    }
    e.preventDefault();
}