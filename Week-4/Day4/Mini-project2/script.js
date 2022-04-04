


let buttons = document.getElementsByTagName("div")
let audioDog=document.getElementById("audiodog")
let dog=document.getElementById("audiodog")
let audioCat=document.getElementById("audiocat")
let cat=document.getElementById("cat")
let audioChip=document.getElementById("audiochip")
let chip=document.getElementById("chipmonk")
let audioPlane=document.getElementById("audioplane")
let plane=document.getElementById("aircraft")



for (x of buttons){
	x.addEventListener("click",getSound)

}




function getSound(e){

	if (e.target.innerHTML=="dog"){
		dog.play()
	} else if (e.target.innerHTML=="cat"){
		audioCat.play()
	} else if (e.target.innerHTML=="chipmonk"){
		audioChip.play()
	}else { audioplane.play()

	}


}


