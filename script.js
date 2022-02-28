const loadPhone=()=>{
    const inputField=document.getElementById("input-field").value
    console.log(inputField);
   const url=`https://openapi.programming-hero.com/api/phones?search=${inputField}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>displayPhone(data.data))
   document.getElementById("input-field").value=''
}
const displayPhone=(allphones)=>{
    // console.log(phones);
    
    const phones=allphones.slice(0,20)
    const phoneList=document.getElementById("phone-list")
    if(phones.length==0){
     const errorMsg= document.getElementById("error-msg")
     errorMsg.textContent="Sorry,no phone found"
     errorMsg.style.color="red"
    }
    document.getElementById("phone-list").innerHTML=''
    phones.forEach(phone=>{
        const div=document.createElement("div")
        div.classList.add('col')
        div.innerHTML=`<div class="card">
        <img class='img-fluid' src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <h5>${phone.brand}</h5>
          <button onclick="loadPhoneDetail('${phone.slug}')" class="btn-primary">Details</button>
        </div>
      </div>`
      phoneList.appendChild(div)
    })
}

const loadPhoneDetail=(id)=>{
  const url=` https://openapi.programming-hero.com/api/phone/${id}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayPhoneDetail(data.data))
}

