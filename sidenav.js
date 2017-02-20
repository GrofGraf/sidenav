var navbar = document.getElementById("navbar");
    var content = document.getElementById("content");
    initNavbar();
    window.addEventListener("resize", initNavbar);
    function initNavbar(){
        navbar.style=null;
        content.style=null;
        document.removeEventListener("scroll", setPosition);
		document.removeEventListener("touchmove", setPosition);
        if(navbar.getBoundingClientRect().height <= window.innerHeight){
            navbar.style="position:fixed;height:100%;";
            content.style="margin-left:200px;";
        }else{
            setPosition();
            document.addEventListener("scroll", setPosition);
			document.addEventListener("touchmove", setPosition);
        }
    }
    function setPosition(){
        var position = window.pageYOffset || document.body.scrollTop;
        if(position + window.innerHeight > navbar.getBoundingClientRect().height){
            navbar.style = "position:fixed;bottom:0;";
            content.style = "margin-left:200px;";
        }else{
            navbar.style = null;
            content.style = null;
        }
    }