/* ------------iputValue-----------*/
const loadPhone=()=>{
  document.getElementById("error-msg").textContent=''
    const inputField=document.getElementById("input-field").value
    // console.log(inputField);
   const url=`https://openapi.programming-hero.com/api/phones?search=${inputField}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>displayPhone(data.data))
   document.getElementById("input-field").value=''
}
/*-----------displayPhone------------*/
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
    document.getElementById("phone-details").innerHTML=''
    phones.forEach(phone=>{
        const div=document.createElement("div")
        div.classList.add('col')
        div.innerHTML=`
      <div class="card">
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
/*------------LoadPhoneDetails------------*/ 
const loadPhoneDetail=(id)=>{
  const url=` https://openapi.programming-hero.com/api/phone/${id}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayPhoneDetail(data.data))
}
/*------------displayPhoneDetails---------------- */
const displayPhoneDetail=(Details)=>{
  // console.log(Details);
  const phoneDetail=document.getElementById("phone-details")
  const div=document.createElement("div")
  div.classList.add("card")
  div.innerHTML=`
  <div class="row g-0 mt-3">
  <div class="col-md-4">
    <img src="${Details.image}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h2 class="card-title">${Details.name}
      </h2>
       <h5>${Details.releaseDate?Details.releaseDate:'release date no found'}
      </h5>
        <p class="card-text"><small class="text-muted">ChipSet: ${Details.mainFeatures.chipSet}</small></p>
        <p class="card-text"><small class="text-muted">displaySize: ${Details.mainFeatures.displaySize}</small></p>
        <p class="card-text"><small class="text-muted">memory: ${Details.mainFeatures.memory}</small></p>
        <p class="card-text"><small class="text-muted">storage: ${Details.mainFeatures.storage}</small></p>
       <p class="card-text"><small class="text-muted">sensors: ${Details.mainFeatures.sensors}</small>
       </p>

      ${Details.others?`<p class="card-text"><small class="text-muted">Bluetooth: ${Details.others.Bluetooth}</small></p>
      <p class="card-text"><small class="text-muted">GPS: ${Details.others.GPS}</small></p>
      <p class="card-text"><small class="text-muted">USB: ${Details.others.USB}</small></p>
      <p class="card-text"><small class="text-muted">WLAN: ${Details.others.WLAN}</small></p>
      <p class="card-text"><small class="text-muted">NFC: ${Details.others.NFC}</small></p>
      <p class="card-text"><small class="text-muted">Radio: ${Details.others.Radio}</small></p>
      `:''}
      
    </div>
  </div>
</div>`
phoneDetail.appendChild(div)
}