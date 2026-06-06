const KEY = "BORROWS";

// Khởi tạo dữ liệu mẫu nếu Local Storage trống
function initData() {
    if (!localStorage.getItem(KEY)) {
        const sampleData = [
            { borrowId: "PM-1001", borrower: "Nguyen Van A", bookId: "BK10001", category: "CNTT", borrowDate: "2026-06-01", dueDate: "2026-06-20", phone: "0912345678", email: "a@library.vn", status: "Đang mượn", note: "" },
            { borrowId: "PM-1002", borrower: "Tran Thi B", bookId: "BK10002", category: "Kinh tế", borrowDate: "2026-05-10", dueDate: "2026-05-25", phone: "0987654321", email: "b@library.vn", status: "Đã trả", note: "" }
        ];
        localStorage.setItem(KEY, JSON.stringify(sampleData));
    }
}

// Lấy danh sách phiếu từ Local Storage dưới dạng mảng
function getBorrows() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

// Hàm Xử lý Lưu (Gồm cả THÊM MỚI và CẬP NHẬT khi SỬA)
function saveBorrow() {
    let data = getBorrows();
    
    // Thu thập toàn bộ dữ liệu từ các ô trong Form
    let borrowObj = {
        borrowId: $("#borrowId").val().trim(),
        borrower: $("#borrower").val().trim(),
        bookId: $("#bookId").val().trim(),
        category: $("#category").val(),
        borrowDate: $("#borrowDate").val(),
        dueDate: $("#dueDate").val(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        status: $("#status").val(),
        note: $("#note").val().trim()
    };

    let editIndex = $("#editIndex").val();

    if (editIndex !== "") {
        // CHẾ ĐỘ SỬA: Cập nhật đè vào vị trí cũ
        data[editIndex] = borrowObj;
    } else {
        //