var data = [];

function listing(){

    var result = "";
    
    for(var i = 0; i<data.length; i++){
        result+=`
        <tr>
            <td class="text-center">${data[i].id}</td>
            <td><img src="${data[i].profile}" style="width: 100px" alt=""></td>
            <td>${data[i].username}</td>
            <td>${data[i].phone}</td>
            <td>
                <button class="btn btn-warning btn-sm">Edit</button>
                <button onclick="remove(${data[i].id});" class="btn btn-dark btn-sm">Remove</button>
            </td>
        </tr>
        `;
    }

    document.getElementById('t-body').innerHTML = result;
}

listing();


document.getElementById("save").addEventListener("click",()=>{
    
    var id      = document.getElementById("id").value;
    var name    = document.getElementById("name").value;
    var phone   = document.getElementById("phone").value;
    var profile = document.getElementById("profile").value;
    
    data.push(
    {
        id       : id,
        username : name,
        phone    : phone,
        profile  : profile
    }
    )

    listing();
})


function remove(id){
    var result = data.filter(value=>{
        return value.id != id;
    })

    data = result;

    listing();
}