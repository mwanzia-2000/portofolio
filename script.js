// Script File

// Home Section Script Starts
var typingText = document.querySelector('.text2');
var myArray = 
["Software Developer", "bockchain developer", "Freelancer", "web develloper", "Blogger"];
var arrayIndex = 1;

function textReplace(){
	setInterval(timer, 5000);
	function timer(){
		if(arrayIndex < myArray.length){
			typingText.innerHTML = myArray[arrayIndex];
			arrayIndex = arrayIndex + 1;
		}
		else{
			arrayIndex = 0;
			typingText.innerHTML = myArray[arrayIndex];
			arrayIndex = arrayIndex + 1;
		}
	}
}
textReplace();

var menuBtn = document.querySelector('.navbar .menu-btn');
var menuList = document.querySelector('.navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', addActiveClass);

function addActiveClass(){
	menuList.classList.toggle('active');
}

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuList.classList.remove('active');
}


var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 80){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
 function downloadCV() {
        // Code to trigger the download
        // For example, you can use the download attribute of an <a> tag
        var downloadLink = document.createElement('a');
        downloadLink.href = 'C:/xampp/htdocs/portofolio/cv.pdf'; // Replace 'path_to_your_cv_file.pdf' with the actual path to your CV file
        downloadLink.download = 'mambo cv'; // Replace 'your_cv_file_name.pdf' with the desired name of your CV file
        downloadLink.click();
    }