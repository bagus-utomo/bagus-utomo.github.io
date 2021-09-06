(function ($) {
    "use strict";

    /*==================================================================
    [ Send Message ]*/

    //Contact Form in PHP
    const form = document.querySelector("form"),
        statusTxt = form.querySelector(".button-area span");
    form.onsubmit = (e) => {
        e.preventDefault();
        statusTxt.style.color = "#0D6EFD";
        statusTxt.style.display = "block";
        statusTxt.innerText = "Sending your message...";
        form.classList.add("disabled");

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "message.php", true);
        xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let response = xhr.response;
                if (response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1) {
                    statusTxt.style.color = "red";
                } else {
                    form.reset();
                    setTimeout(() => {
                        statusTxt.style.display = "none";
                    }, 3000);
                }
                statusTxt.innerText = response;
                form.classList.remove("disabled");
            }
        }
        let formData = new FormData(form);
        xhr.send(formData);
    }
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



    /*==================================================================
     [ Simple slide100 ]*/

    $('.simpleslide100').each(function () {
        var delay = 7000;
        var speed = 1000;
        var itemSlide = $(this).find('.simpleslide100-item');
        var nowSlide = 0;

        $(itemSlide).hide();
        $(itemSlide[nowSlide]).show();
        nowSlide++;
        if (nowSlide >= itemSlide.length) {
            nowSlide = 0;
        }

        setInterval(function () {
            $(itemSlide).fadeOut(speed);
            $(itemSlide[nowSlide]).fadeIn(speed);
            nowSlide++;
            if (nowSlide >= itemSlide.length) {
                nowSlide = 0;
            }
        }, delay);
    });


})(jQuery);