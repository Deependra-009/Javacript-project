class library
{
    constructor(name,author,type)
    {
        this.name=name;
        this.author=author;
        this.type=type;
    }
}

class display
{
    validate(library1)
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
    add(library1)
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
    clear()
    {
        let form1=document.getElementById("form1");
        form1.reset();
    }
    show(type,displaymessage)
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
}


let but=document.getElementById("form1");
but.addEventListener("submit",function(e)
{
    e.preventDefault();
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
    else 
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
    
});

