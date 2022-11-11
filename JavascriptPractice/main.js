const Students=[{
    Name:"Sima",
    Surname:"Maniyeva",
    Mark:96
},
{Name:"Nizami",
    Surname:"Miriyev",
    Mark:92
},
{Name:"Fidan",
    Surname:"Salamova",
    Mark:56
},
{Name:"Karim",
    Surname:"Aydinov",
    Mark:72
}
]
const table=document.querySelector("#siyahi");
console.log(table);
var row=document.createElement("tr")
var data=document.createElement("td");
Students.forEach(student => {
data.innerHTML=Students[i].Name;
row.append(data)
table.append(row)
});


