$(document).ready(function(){

    initData();

    renderTable();

 $("#btnThem").click(function(){
    $("#borrowForm")[0].reset();
    $("#editIndex").val(""); // Đưa về trống để hiểu là Thêm mới
    $("#borrowId").prop("disabled", false); // Mở khóa mã phiếu khi thêm mới
    
    // Xóa bỏ các thông báo lỗi cũ
    let validator = $("#borrowForm").validate();
    validator.resetForm();

    $("#borrowModal").css("display", "flex");
});

    $("#btnClose").click(function(){

        $("#borrowModal").hide();
    });

});