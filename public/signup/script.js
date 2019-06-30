window.onload=function(){

    $('#signup').prop('disabled',true);
    
    $('#gridCheck').change(function(){
        $('#signup').prop("disabled",!this.checked);
    })
    
}