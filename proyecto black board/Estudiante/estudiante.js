$(".menu > ul > li").click(function (e){
    //remueve la clase de los elementos no seleccionados
    $(this).siblings().removeClass("active");
    //le da la clase active a los elementos clickeados
    $(this).toggleClass("active");
    //esto hace que el menu se abra
    $(this).find("ul").slideToggle() 
    //esto hace que no se puedan abrir dos sub menus seguidos
    $(this).siblings().find("ul").slideUp()
    //le quita la clase active a los sub menu
    $(this).siblings().find("ul").find("li").removeClass("active")
});
$(".menu-btn").click(function () {
    $(".sidbear").toggleClass("active");
});