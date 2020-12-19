let sol=0;
function solve(value1)
{
    let temp;
    temp=document.getElementById("text1");
    temp.value=temp.value+value1;

}
function oper(ele)
{
    let t1=document.getElementById("text1");
    let ans=document.getElementById("text2");
    if(ele=='cle')
    {
        t1.value='';
        ans.value='';
        sol=0;
    }
    if(t1.value!='')
    {
        if(ele=='su')
        {
            sol=sol+parseInt(t1.value);
            ans.value=sol;
            t1.value='';
        }
        else if(ele=='min')
        {
            sol=sol-parseInt(t1.value);
            ans.value=sol;
            t1.value='';
        }
        else if(ele=='mu')
        {
            sol=sol*parseInt(t1.value)
            ans.value=sol;
            t1.value='';
        }
        else if(ele=='div')
        {
            sol=sol/parseInt(t1.value);
            ans.value=sol;
            t1.value='';
        }
        else if(ele=='per')
        {
            ans.value='';
            sol=parseInt(t1.value)/100;
            ans.value=sol;
            t1.value='';
        }
        else if(ele=='sq')
        {
            sol=Math.sqrt(parseInt(t1.value));
            ans.value=sol;
            t1.value='';
        }
        else if(ele=='back')
        {
            sol=Math.floor(parseInt(t1.value)/10);
            if(sol==0)
            {
                t1.value='';
            }
            else
            {
                t1.value=sol;
            }
        }
    }
    else if((t1.value=='') && (ans.value!=''))
    {
        if(ele=='per')
        {
            sol=parseInt(ans.value)/100;
            ans.value=sol;
            t1.value='';
        }
        else if(ele=='sq')
        {
            sol=Math.sqrt(parseInt(ans.value));
            ans.value=sol;
            t1.value='';
        }

    }

    

   
}
