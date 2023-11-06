let title =document.getElementById('title');
let price =document.getElementById('price');
let taxes =document.getElementById('taxes');
let ads =document.getElementById('ads');
let discount =document.getElementById('discount');
let total =document.getElementById('total');
let count =document.getElementById('count');
let catogary =document.getElementById('catogary');
let submet =document.getElementById('submet');

// get total
function getTotal()
{
    if(price.value !=''){
        let result =(+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML=result;
        total.style.background='#040'

    }else{
       total.innerHTML='';
       total.style.background=' rgb(185, 51, 3)';
    }
}

// create product
let datapro;
if(localStorage.product!=null)
{
    datapro=JSON.parse(localStorage.product) 
}else{
    datapro=[];
}


submet.onclick= function(){
    let newpro={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        catogary:catogary.value,
        

    }
    datapro.push(newpro)
    // savelocalstorage
    localStorage.setItem('product' , JSON.stringify(datapro))
    cleardata()
    showdata()
}

// clear data

function cleardata(){
    title.value=''; 
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    catogary.value='';

}

function showdata(){
    let table='';
    for(let i=0 ;i < datapro.length ; i++){
        table += `
        <tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].catogary}</td>
            <td><button id="update">update</button></td>
            <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
        
        </tr>
        `

    }
    
    document.getElementById('tbody').innerHTML=table;
    let btndelete=document.getElementById('deleteall')
    if(datapro.length>0){
        btndelete.innerHTML=`
       <button onclick ="deleteall()">Delete All</button>
        `
    }else{
        btndelete.innerHTML='';
    }
}
showdata()

// delete
function deletedata(i){
    datapro.splice(i,1);
    localStorage .product=JSON.stringify(datapro) 
    showdata()
    

}

// deleteall
function deleteall(){
    localStorage.clear();
    datapro.splice(0);
    showdata()

}