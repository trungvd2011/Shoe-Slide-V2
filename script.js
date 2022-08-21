$(document).ready(function(){
    var count_group = $(".list .item").length;
    var active = 0;
    var old_active = count_group - 1;
    function Load(){
  
        $('#item_'+old_active).removeClass('item_active');
        $('#item_'+old_active).addClass('item_none');
  
        $('#item_'+active).removeClass('item_none');
        $('#item_'+active).addClass('item_active');
    
        $('.dot div').removeClass('active');
        $('#dot_'+active).addClass('active');
    
        $('#content_'+active).css('opacity',1);
        $('#content_'+active).css('left',0);
        $('#content_'+old_active).css('left','-100%');
        $('#content_'+old_active).css('opacity','0');
        $('#content_'+(active - 2 == -1 ? count_group - 1 :active - 2 == -2 ? count_group - 2 : active - 2)).css('left','100%');
        $('#content_'+(active - 2 == -1 ? count_group - 1 :active - 2 == -2 ? count_group - 2 : active - 2)).css('opacity','0');
    }
    
    Load();
    $('#next').on('click', function(){
        old_active = active;
        active = active + 1 >= count_group ? 0 : active + 1;
        Load();
    })
    $('#prev').on('click', function(){
        old_active = active;
        active = active - 1 < 0 ? count_group - 1 : active - 1;
        Load();
    })
});