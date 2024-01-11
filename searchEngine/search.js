
const productLists = document.getElementsByClassName("product-list");
const products = document.querySelectorAll(".tshirt1")
const  pname = document.getElementsByTagName("h3");
// console.log(productLists);
const search =() =>
{
    const searchedInput = document.getElementById("searchBar").value.toUpperCase();
   for (let index = 0; index < pname.length; index++) {
    let match = products[index].getElementsByTagName('h3')[0];
    // console.log(match);
    if(match)
    {
        let content = match.textContent || match.innerHTML;
        // c The indexOf method returns the index of the first occurrence of the specified value in a string. If the value is not found, it returns -1.
         if(content.toUpperCase().indexOf(searchedInput)>-1){
            console.log(`content is dis ${content}`);
            console.log(`searchedInput  is dis ${searchedInput}`);
            console.log(products[index]);
                    products[index].style.display = ""
         }
         else{
            products[index].style.display = "none";
         }
    }
    
   }
}