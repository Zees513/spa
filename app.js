$(document).ready(function(){
    
    function loadpage(page){
        $.ajax({
            url : page + '.html',
            success : function(data){
               $("#special").html(data)
            }

        })
    }


    $("#home").click(function(e){
        e.preventDefault(),
        loadpage("home")
    })

    $("#about").click(function(e){
        e.preventDefault(),
        loadpage("about")
    })

    $("#contact").click(function(e){
        e.preventDefault(),
        loadpage("contact")
    })

    $("#services").click(function(e){
        e.preventDefault(),
        loadpage("services")
    })

    loadpage("home")
})