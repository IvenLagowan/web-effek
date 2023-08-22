window.onscroll = function () { myFunction() };

    function myFunction() {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            document.getElementById("bgPosition").classList.add("bg");
            document.getElementById("header").classList.add("headerFixed");
        }
        else {
            document.getElementById("bgPosition").classList.remove("bg");
            document.getElementById("header").classList.remove("headerFixed");
        }
    }