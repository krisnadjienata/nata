alert ("want in on new arrivals, exclusive collabs, sales and more? login please");

document.getElementById("button").addEventListener("click", function(){
		document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
		document.querySelector(".popup").style.display = "none";
})

function checkemail(email){
				if (email.indexOf("@")!=-1 && email.indexOf(".")!=-1)
				alert("Apakah Alamat Email Sudah Benar?")
				else
				alert("Penulisan Email Salah!")
				}
				
