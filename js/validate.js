$(function(){

    // 1. Chỉ chấp nhận chữ cái (kể cả có dấu) và khoảng trắng (Thay cho đoạn dài dòng cũ)
    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[^\d,._+=\[\]{}()!@#$%^&*\"'-]+$/i.test(value);
    });

    // 2. Định dạng Mã phiếu (PM-XXXX) và chặn trùng khi Thêm mới
    $.validator.addMethod("validBorrowId", function(value) {
        if (!/^PM-\d{4}$/.test(value)) return false; 
        
        let editIndex = $("#editIndex").val();
        if (editIndex !== "") return true; // Đang sửa -> bỏ qua không chặn trùng

        let data = JSON.parse(localStorage.getItem("BORROWS")) || [];
        return !data.some(x => x.borrowId === value);
    });

    // 3. Định dạng Mã sách (BK + 5 chữ số)
    $.validator.addMethod("validBookId", function(value) {
        return /^BK\d{5}$/.test(value);
    });

    // 4. Kiểm tra Ngày mượn và Hạn trả (Gom hết tất cả luật ngày tháng vào đây)
    $.validator.addMethod("validDates", function(value) {
        let bDate = $("#borrowDate").val();
        let dDate = $("#dueDate").val();
        if (!bDate || !dDate) return true; 

        let date1 = new Date(bDate);
        let date2 = new Date(dDate);
        let today = new Date();
        today.setHours(0,0,0,0);

        // Ngày mượn > hôm nay HOẶC Hạn trả < Ngày mượn -> Sai
        if (date1 > today || date2 < date1) return false;

        // Khoảng cách quá 30 ngày -> Sai
        let days = (date2 - date1) / (1000 * 60 * 60 * 24);
        return days <= 30;
    });


    // CẤU HÌNH TRỰC QUAN, RÚT GỌN CHÍNH
    $("#borrowForm").validate({
        rules: {
            borrowId: { required: true, validBorrowId: true },
            borrower: { required: true, minlength: 2, maxlength: 40, lettersonly: true },
            bookId: { required: true, validBookId: true },
            category: { required: true },
            borrowDate: { required: true, validDates: true },
            dueDate: { required: true, validDates: true },
            phone: { 
                required: true, 
                pattern: /^(03|05|07|08|09)\d{8}$/ // Đúng 10 số, đúng đầu số VN
                digits: true,
            },
            email: { 
                required: true, 
                email: true,
                pattern: /^[A-Za-z0-9._%+-]+@library\.vn$/ // Đuôi bắt buộc
            },
            status: { required: true },
            note: { 
                maxlength: 120,
                pattern: /^[^<>]*$/ // Chặn nhanh HTML bằng cách cấm gõ dấu < và >
            }
        },

        // HIỂN THỊ CÁC MESSAGE THEO ĐÚNG TIÊU CHÍ ĐỀ BÀI
        messages: {
            borrowId: {
                required: "Mã phiếu không được để trống.",
                validBorrowId: "Mã phải có dạng PM-XXXX và không được trùng."
            },
            borrower: {
                required: "Họ tên không được để trống.",
                minlength: "Họ tên phải từ 2 ký tự trở lên.",
                maxlength: "Họ tên tối đa 40 ký tự.",
                lettersonly: "Họ tên chỉ được chứa chữ cái và khoảng trắng."
            },
            bookId: {
                required: "Mã sách không được để trống.",
                validBookId: "Mã sách phải bắt đầu bằng BK và có đúng 5 chữ số."
            },
            category: "Vui lòng chọn thể loại sách.",
            borrowDate: {
                required: "Vui lòng chọn ngày mượn.",
                validDates: "Ngày mượn không quá hôm nay. Hạn trả phải lớn hơn ngày mượn và tối đa 30 ngày."
            },
            dueDate: {
                required: "Vui lòng chọn hạn trả.",
                validDates: "Ngày mượn không quá hôm nay. Hạn trả phải lớn hơn ngày mượn và tối đa 30 ngày."
            },
            phone: {
                required: "Số điện thoại không được để trống.",
                pattern: "SĐT phải gồm đúng 10 số và bắt đầu bằng 03, 05, 07, 08, 09.",
                digits: "SĐT chỉ được chứa số."
            },
            email: {
                required: "Email không được để trống.",
                email: "Email không đúng định dạng.",
                pattern: "Email phải kết thúc bằng đuôi @library.vn"
            },
            status: "Vui lòng chọn trạng thái mượn.",
            note: {
                maxlength: "Ghi chú không được vượt quá 120 ký tự.",
                pattern: "Ghi chú không được chứa các thẻ hoặc ký tự HTML (<, >)."
            }
        },

        submitHandler: function(){
            saveBorrow();
        }
    });
});