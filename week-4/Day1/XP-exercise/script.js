


let newNavName=document.getElementById("navBar")

newNavName.setAttribute("id", "socialNetworkNavigation")


let ulElement = document.getElementsByTagName("ul")

let newElement=document.createElement("li")

let anchorElement=document.createElement("a")

let newTest=document.createTextNode("Logout")

anchorElement.setAttribute("href","#")



anchorElement.appendChild(newTest)

newElement.appendChild(anchorElement)

ulElement[0].appendChild(newElement)





let unordList=document.body.firstElementChild.firstElementChild

let firstLi=unordList.firstElementChild

let lastLi=unordList.lastElementChild