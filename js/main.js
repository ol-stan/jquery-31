$('.accordeon .head').on('click', function () {
    let $oc = $(this).next();
    $(".body").not($oc).slideUp();
    $oc.slideToggle();
});