window.onload=function(){

    $('form').attr('action','/signup')

    $('#signup').prop('disabled',true);
    
    $('#gridCheck').change(function(){
        $('#signup').prop("disabled",!this.checked);
    })
    
}