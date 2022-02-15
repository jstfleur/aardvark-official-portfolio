

//active nav
const nav=document.querySelector("nav"),
      navList=nav.querySelectorAll("div.left-nav > a, div.right-nav > a"),
      totalNavList=navList.length,
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length;



for(let i=0; i<totalNavList; i++) {
    const a = navList[i];
    a.addEventListener("click", function() {
        //idk
        removeActiveClass();
        
        for (let j=0; j<totalNavList; j++){
            if (navList[j].classList.contains("active")){
//                addActiveClass(j);
//                 allSection[j].classList.remove("active");
                removeActiveClass();
            }
            navList[j].classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
    })
}



//for(let i=0; i<totalNavList; i++){
//    const a=navList[i];
//    a.addEventListener("click", function(){
//        var current = document.getElementsByClassName("active");
//        current[0].classList.remove("active");
//        this.classList.add("active");
//        
//        if (window.innerWidth < 1200){
//            
//        }
//        
//    })
//
//}

function removeActiveClass(){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
}

function addActiveClass(num){
    allSection[num].classList.add("active");
}

function showSection(element){
    for (let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active"); 
}

function updateNav(element){
    for (let i=0; i<totalNavList; i++){
        navList[i].classList.remove("active");
        const target=element.getAttribute("href").split("#")[1];
        if (target === navList[i].getAttribute("href").split("#")[1]){
            navList[i].classList.add("active");
        } 
    }
}

document.querySelector(".learn-more").addEventListener("click",function(){
    const sectionIndex=this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
})

document.querySelector(".check-out").addEventListener("click",function(){
    const sectionIndex=this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
})

document.querySelector(".check-out2").addEventListener("click",function(){
    const sectionIndex=this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
})

document.querySelector(".contact-me").addEventListener("click",function(){
    const sectionIndex=this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
})

document.querySelector(".contact-me2").addEventListener("click",function(){
    const sectionIndex=this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
})
















const cursor = document.querySelector('.cursor');

const editCursor = e => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
};

window.addEventListener('mousemove', editCursor);




const links = document.querySelectorAll('a, .hover-this')

links.forEach(link => {
    link.addEventListener('mouseenter', e => {
        cursor.classList.add('enlarged')
    })
    link.addEventListener('mouseout', e => {
        cursor.classList.remove('enlarged')
    })
});




$(document).ready(function(){
    $('.accordion-list > li > .answer').hide();
    $('.imageContainer > li > img').hide();

    
    $('.accordion-list > li').click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }

        return false;
    });
    
    
    $('.accordion-list > .project1').click(function() {
        if ($(this).hasClass("active")) {
            $(this).parent(".accordion-list").siblings(".imageContainer").find("li img").hide();
            $(this).parent(".accordion-list").siblings(".imageContainer").find("li.project1 img").show();
            
        } else {
            $(this).parent(".accordion-list").siblings(".imageContainer").find("li.project1 img").hide();
        }

        return false;
        
        
    });
    
    $('.accordion-list > .project2').click(function() {
        if ($(this).hasClass("active")) {
            $(this).parent(".accordion-list").siblings(".imageContainer").find("li img").hide();
            $(this).parent(".accordion-list").siblings(".imageContainer").find("li.project2 img").show();
            
        } else {
            $(this).parent(".accordion-list").siblings(".imageContainer").find("li.project2 img").hide();
        }

        return false;
        
        
    });
    
    $('.accordion-list > .project3').click(function() {
        if ($(this).hasClass("active")) {
            $(this).parent(".accordion-list").siblings(".imageContainer").find("li img").hide();
            $(this).parent(".accordion-list").siblings(".imageContainer").find("li.project3 img").show();
            
        } else {
            $(this).parent(".accordion-list").siblings(".imageContainer").find("li.project3 img").hide();
        }

        return false;
        
        
    });
    
    $('.accordion-list > .project4').click(function() {
        if ($(this).hasClass("active")) {
            $(this).parent(".accordion-list").siblings(".imageContainer").find("li img").hide();
            $(this).parent(".accordion-list").siblings(".imageContainer").find("li.project4 img").show();
            
        } else {
            $(this).parent(".accordion-list").siblings(".imageContainer").find("li.project4 img").hide();
        }

        return false;
        
        
    });
    
  
});













