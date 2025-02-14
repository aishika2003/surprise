function saveName() {
    const name = document.getElementById('nameInput').value;
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');

    if (name.trim() !== "") {
        console.log("Name entered: " + name);  // Debug log
        // Hide step 1 and show step 2
        step1.style.display = 'none';
        step2.style.display = 'block';
    } else {
        alert("Please enter your name.");
    }
}

function checkDate(){
    const date = '2022-03-10';
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    if(document.getElementById('dateInput').value === ''){
        alert("Enter the date Honey!");
        return;
    }
    if(date === document.getElementById('dateInput').value){
        step2.style.display = 'none';
        step3.style.display = 'block';
    } else{
        alert("Oops! Try again...");
    }
}

function nextstep(){
    const step3 = document.getElementById('step3');
    const step4 = document.getElementById('step4');
    step3.style.display = 'none';
    step4.style.display = 'block';
}

function moveNoButton() {
    const button = document.getElementById("noButton");
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}
function showGiftSelection(){
    const step4 = document.getElementById('step4');
    const step5 = document.getElementById('step5');
    step4.style.display = 'none';
    step5.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    let scrollContainer = document.querySelector(".scroll");
    let images = Array.from(scrollContainer.children);
    
    images.forEach(img => {
        let clone = img.cloneNode(true);
        scrollContainer.appendChild(clone);
    });

    let scrollAmount = 200; 
    let totalWidth = scrollContainer.scrollWidth / 2; 

    document.getElementById("scrollLeft").addEventListener("click", function() {
        if (scrollContainer.scrollLeft <= 0) {
            scrollContainer.scrollLeft = totalWidth; 
        }
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    document.getElementById("scrollRight").addEventListener("click", function() {
        if (scrollContainer.scrollLeft >= totalWidth) {
            scrollContainer.scrollLeft = 0; 
        }
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

function showWinner(giftName) {
    document.getElementById("step5").style.display = "none"; 
    document.getElementById("step6").style.display = "block"; 
    let selectedGift = document.getElementById("selectedGift");
    selectedGift.innerHTML = `
        <img src="${getGiftImage(giftName)}" class="gift-image"> 
        <p class="text-center font-semibold">${giftName}</p>
    `;
}
function getGiftImage(giftName) {
    const giftImages = {
        "Kawasaki Ninja": "https://images.tractorjunction.com/new_bike_product_6e1470a3e1.png?format=webp",
        "Jeep Compass": "https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2025/compass/gallery/desktop/jeep_my25_compass_gallery-slider-03_desktop.jpg",
        "Biriyani": "https://cdn.dotpe.in/longtail/store-items/8165282/VQJUE0nl.jpeg",
        "Mac-Book": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQY-VJ3D9SZe83JcHTdawkLTlgbZglehl1RTuNPIrQCsCmnM28mR2w6qscuNsoEMeKKWa9UXbm4TfUee6tahBmxOK5VjefSh1BscmCE64-iYDhmW62eoR1NnA&usqp=CAE",
        "Mc Donald meal": "https://im.whatshot.in/img/2021/Feb/mcdonalds-1612522016.jpg",
        "Porota Mangsho": "https://lh3.googleusercontent.com/proxy/cBsIufPETGZiSpQKfFMTFJLQFmNReCntxEzroxqxy9azlx4J9Sclr1q3CJhZ5RmrF_Yuq9gOeVNDfMn-8Xh7zGEZVmTdFI0",
        "Me": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Me_bank_logo15.png/800px-Me_bank_logo15.png"
    };
    return giftImages[giftName] || "";
}

function showFinalMessage() {
    document.getElementById("overlay").style.display = "block";  
    document.getElementById("step6").classList.add("hidden");  
  }

  function closeTerminal() {
    document.getElementById("overlay").style.display = "none";  
    document.getElementById("step6").classList.remove("hidden");  
  }
  function allowAction(){
    const step7 = document.getElementById('step7')
    const step6 = document.getElementById("step6")
    const terminal = document.getElementById('overlay')

    step6.style.display = "none";
    terminal.style.display = "none";
    step7.style.display = "block";
  }

  function denyAction(){
    alert("Okay! You can refresh the page and go back to your work. Thank You!")
  }


  function fireworks(){
    confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 }
    });
    const mes = document.getElementById("thankYouMessage");
    mes.classList.remove("hidden");

    document.body.style.transition = "background-color 1s ease, opacity 1s ease";
    document.body.style.backgroundColor = "black";
    document.body.style.opacity = "0.7";

    // Dim the background (like the "No" button)
    document.body.style.transition = "background-color 1s ease, opacity 1s ease";
    document.body.style.backgroundColor = "black";
    document.body.style.opacity = "0.7";

    // Dim #step7 as well to make it blend
    document.getElementById("step7").style.opacity = "0.2";

    // Show the "Thank You" message after confetti
    const message = document.getElementById("thankYouMessage");
    message.classList.remove("hidden");

    // Fade in the message
    setTimeout(() => {
        message.style.opacity = "1";
    }, 100); // Small delay for fade-in effect

    // Reset the background and step7 after 10 minutes (600,000 milliseconds)
    setTimeout(function () {
        document.body.style.backgroundColor = "";
        document.body.style.opacity = "";
        document.getElementById("step7").style.opacity = ""; // Reset #step7 opacity
        message.classList.add("hidden");
    }, 600000);  

  }
  function drama() {
    document.body.style.transition = "background-color 1s ease, opacity 1s ease";
    document.body.style.backgroundColor = "black";
    document.body.style.opacity = "0.7";

    document.getElementById("step7").style.opacity = "0.2";

    const dramaticText = document.getElementById("dramaticText");
    dramaticText.textContent = "I never knew that I wasn't capable of being your Valentine; this broke me! But I will always want you as my Valentine. Thank you for everything. You can refresh the page and go back to your work...";
    dramaticText.style.color = "white";
    dramaticText.style.fontSize = "40px";
    dramaticText.style.textAlign = "center";
    dramaticText.style.position = "fixed";
    dramaticText.style.top = "50%";
    dramaticText.style.left = "50%";
    dramaticText.style.transform = "translate(-50%, -50%)";
    dramaticText.style.zIndex = "9999";  // Ensure it appears above everything else
    dramaticText.classList.remove("hidden");

    setTimeout(function () {
        document.body.style.backgroundColor = "";
        document.body.style.opacity = "";
        document.getElementById("step7").style.opacity = "";
        dramaticText.classList.add("hidden");
    }, 600000); 
  }



