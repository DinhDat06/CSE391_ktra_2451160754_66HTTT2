$(document).ready(function(){

    initData();

    renderTable();

    $("#btnThem").click(function(){

        $("#borrowForm")[0].reset();

        $("#editIndex").val("");

        $("#borrowModal").css("display","flex");
    });

    $("#btnClose").click(function(){

        $("#borrowModal").hide();
    });

});