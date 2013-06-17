$(function() {
    $('.fancybox-media').fancybox({
        maxWidth    : 640,
        maxHeight   : 360,
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
                media : {}
        }
    });
    
    $('.scrollpane').jScrollPane({mouseWheelSpeed : 50});
});