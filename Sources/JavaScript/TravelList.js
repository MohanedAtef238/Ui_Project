var SearchFilter;
addEventListener("DOMContentLoaded",()=>{

    cards=document.getElementsByClassName("wholeCard");
    cardTitles=document.getElementsByClassName("card-title")
    searchBar=document.getElementsByTagName("input")[0];
    SearchFilter=function(name){
        console.log(name);
        for(var i=0;i<cardTitles.length;i++)
        {
            if(!cardTitles[i].innerText.toLowerCase().trim().includes(name.toLowerCase().trim()))
            {
                cards[i].style.display="none";
            }

            if(cardTitles[i].innerText.toLowerCase().trim().includes(name.toLowerCase().trim()))
            {
                cards[i].style.display="block";
            }
 
        }
    }   

    

})



