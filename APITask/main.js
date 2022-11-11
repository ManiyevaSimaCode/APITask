
 const find=document.querySelector("#find");
 const input=document.querySelector("#input")
 find.addEventListener('click',function(){
    body.innerHTML="";
    
axios.get("https://northwind.vercel.app/api/suppliers").then((response)=>{
    response.data.filter(element => element.companyName==input.value).forEach(element=>{
        let tr=document.createElement("tr");
        tr.innerHTML=`
        
        <tr>
        <td>
            ${element.companyName}
        </td>
        <td>
            ${element.contactName}
        </td>
        <td>
            ${element.address.city}
        </td>
    </tr>
    `
    body.append(tr)
    })

    });

});


axios.get("https://northwind.vercel.app/api/suppliers").then((response)=>{
response.data.forEach(element => {
    console.log(element)
    const body=document.querySelector("#body")
    const row=document.createElement("tr");
    let companyName=document.createElement("td");
    let contactName=document.createElement("td");
    let city=document.createElement("td");
    companyName.innerHTML=element.companyName;
    contactName.innerHTML=element.contactName;
    city.innerHTML=element.address.city;
    row.append(companyName);
    row.append(contactName);
    row.append(city);
    body.append(row)
   
    })
});




