$(document).ready(function(){

    // Gọi đúng tên hàm khởi tạo dữ liệu
    initData();

    // Vẽ bảng danh sách lần đầu khi mở trang web
    renderTable();

    // Sự kiện khi bấm nút "Thêm Phiếu Mượn"
    $("#btnThem").click(function(){
        // Xóa sạch dữ liệu cũ trong form
        $("#borrowForm")[0].reset();
        
        // Reset trình duyệt xóa các thông báo lỗi Validate đỏ của lần nhập trước (nếu có)
        $("#borrowForm").validate().resetForm();

        // Đặt ô ẩn editIndex về rỗng để hệ thống hiểu là đang "Thêm mới"
        $("#editIndex").val("");

        // Hiển thị Form Popup lên màn hình
        $("#borrowModal").css("display", "flex");
    });

    // Sự kiện bấm nút "Hủy" hoặc nút đóng Form
    $("#btnClose").click(function(){
        $("#borrowModal").hide();
    });

});