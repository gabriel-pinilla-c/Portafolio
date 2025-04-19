document.addEventListener("DOMContentLoaded",function() {
    const buttons = document.querySelectorAll(".botonesMenu")
    const buttonSobreMi = document.querySelector("#sobreMi")
    const buttonHabilidades = document.querySelector("#habilidades")
    const buttonEducacion = document.querySelector("#educacion")
    const buttonProyectos = document.querySelector("#proyectos")
    const contentSobreMi = document.querySelector("#principal")
    const contentHabilidades = document.querySelector("#principal1")
    const contentEducacion = document.querySelector("#principal2")
    const contentProyectos = document.querySelector("#principal3")


    buttons.forEach(btn =>{
        btn.addEventListener('click',()=>{
            if(btn.classList.contains("active")){
                btn.classList.remove("active");
            }else{
            buttons.forEach(b=> b.classList.remove("active"));
            btn.classList.add("active");
            }

            if(buttonSobreMi.classList.contains("active")){
                contentSobreMi.classList.add("active");
            }
            else{
                contentSobreMi.classList.remove("active");
            }

            if(buttonHabilidades.classList.contains("active")){
                contentHabilidades.classList.add("active");
            }
            else{
                contentHabilidades.classList.remove("active");
            }

            if(buttonEducacion.classList.contains("active")){
                contentEducacion.classList.add("active");
            }
            else{
                contentEducacion.classList.remove("active");
            }

            if(buttonProyectos.classList.contains("active")){
                contentProyectos.classList.add("active");
            }
            else{
                contentProyectos.classList.remove("active");
            }
        });
    });
});