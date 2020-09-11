document.getElementById("next").addEventListener('click', function(){
    
    let h4 = document.querySelector("h4")
    h4.innerHTML = "John Tarkpor"
    console.log(document.querySelector("h4"));
    
    let title = document.getElementById("title")
    title.innerHTML = "Junior Front-end Developer"
    console.log(document.getElementById("title"));

    let text = document.getElementById("text")
    text.innerHTML = "If you want to lay the best foundation possible I’d recommend taking this course.  The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."

    let image = document.getElementById("image")
    image.src = 'images/image-john.jpg'
});