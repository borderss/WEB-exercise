import fakeInquiryData from './fakeData.json' assert { type: "json"}

let tb = document.getElementById("tableBody")

for (let i = 0; i < fakeInquiryData.length; i++) {
  let tr = document.createElement("tr")
  let subject = document.createElement("td")
  let fullName = document.createElement("td")
  let email = document.createElement("td")
  let content = document.createElement("td")

  let contentDiv = document.createElement("div")
  content.appendChild(contentDiv)
  
  if (fakeInquiryData[i].jobRelated) {
    subject.classList.add("subject") 
    subject.setAttribute("type", "job-related")
  } else {
    subject.classList.add("subject")
  }
  fullName.classList.add("full-name")
  email.classList.add("email")
  content.classList.add("content")

  subject.innerText = fakeInquiryData[i].subject
  fullName.innerHTML = fakeInquiryData[i].fullName
  email.innerText = fakeInquiryData[i].email
  contentDiv.innerHTML = fakeInquiryData[i].message

  tr.appendChild(subject)
  tr.appendChild(fullName)
  tr.appendChild(email)
  tr.appendChild(content)

  tb.appendChild(tr)
}
