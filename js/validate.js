$(function() {

    // 1. Chỉ chấp nhận chữ cái (kể cả có dấu) và khoảng trắng
    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[^\d,._+=\[\]{}()!@#$%^&*"'-]+$/i.test(value);
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

    // 4. Kiểm tra Ngày mượn và Hạn trả
    $.validator.addMethod("validDates", function(value) {
        let bDate = $("#borrowDate").val();
        let dDate = $("#dueDate").val();
        if (!bDate || !dDate) return true; // Để quy tắc 'required' xử lý nếu trống

        let borrow = new Date(bDate);
        let due = new Date(dDate);
        let today = new Date();
        today.setHours(0, 0, 0, 0); // Reset giờ về 0 để so sánh chính xác ngày

        // Ngày mượn không được vượt quá ngày hôm nay
        if (borrow > today) return false;
        // Hạn trả phải lớn hơn hoặc bằng ngày mượn
        if (due < borrow) return false;

        // Khoảng cách giữa ngày mượn và hạn trả không quá 30 ngày (30 * 24 * 60 * 60 * 1000)
        let timeDiff = due.getTime() - borrow.getTime();
        let daysDiff = timeDiff / (1000 * 3600 * 24);
        if (daysDiff > 30) return false;

        return true;
    });

    // CẤU HÌNH KIỂM TRA FORM (VALIDATE)
    $("#borrowForm").validate({
        // Định nghĩa các quy tắc kiểm tra (Rules)
        rules: {
            borrowId: {
                required: true,
                validBorrowId: true
            },
            borrower: {
                required: true,
                minlength: 2,
                maxlength: 40,
                lettersonly: true
            },
            bookId: {
                required: true,
                validBookId: true
            },
            category: {
                required: true
            },
            borrowDate: {
                required: true,
                validDates: true
            },
            dueDate: {
                required: true,
                validDates: true
            },
            phone: {
                required: true,
                digits: true, // Quy tắc chuẩn là 'digits' chứ không phải 'digital'
                pattern: /^(03|05|07|08|09)\d{8}$/
            },
            email: {
                required: true,
                email: true,
                pattern: /^[A-Za-z0-9._%+-]+@library\.vn$/
            },
            status: {
                required: true
            },
            note: {
                maxlength: 120
            }
        },

        // Định nghĩa thông báo lỗi bằng Tiếng Việt (Messages)
        messages: {
            borrowId: {
                required: "Mã phiếu mượn không được để trống.",
                validBorrowId: "Mã phiếu phải có dạng PM-XXXX (X là số) và không được trùng lặp."
            },
            borrower: {
                required: "Họ tên người mượn không được để trống.",
                minlength: "Họ tên phải chứa ít nhất 2 ký tự.",
                maxlength: "Họ tên không được vượt quá 40 ký tự.",
                lettersonly: "Họ tên chỉ được chứa chữ cái và khoảng trắng."
            },
            bookId: {
                required: "Mã sách không được để trống.",
                validBookId: "Mã sách phải bắt đầu bằng BK và có đúng 5 chữ số (Ví dụ: BK10001)."
            },
            category: {
                required: "Vui lòng chọn thể loại sách."
            },
            borrowDate: {
                required: "Vui lòng chọn ngày mượn sách.",
                validDates: "Ngày mượn không được quá hôm nay. Hạn trả phải lớn hơn ngày mượn và tối đa là 30 ngày."
            },
            dueDate: {
                required: "Vui lòng chọn hạn trả sách.",
                validDates: "Ngày mượn không được quá hôm nay. Hạn trả phải lớn hơn ngày mượn và tối đa là 30 ngày."
            },
            phone: {
                required: "Số điện thoại không được để trống.",
                digits: "Số điện thoại chỉ được chứa các ký tự số.", // Đã sửa từ 'digital' thành 'digits'
                pattern: "Số điện thoại phải gồm đúng 10 số và bắt đầu bằng các đầu số: 03, 05, 07, 08, 09."
            },
            email: {
                required: "Địa chỉ email không được để trống.",
                email: "Email không đúng định dạng thông thường.",
                pattern: "Email phải kết thúc bằng đuôi hệ thống: @library.vn"
            },
            status: {
                required: "Vui lòng chọn trạng thái của phiếu mượn."
            },
            note: {
                maxlength: "Ghi chú quá dài, không được vượt quá 120 ký tự."
            }
        },

        // Xử lý vị trí hiển thị lỗi hoặc tùy biến giao diện nếu cần
        errorElement: "span",
        errorPlacement: function(error, element) {
            error.addClass("error");
            error.insertAfter(element);
        }
    });
});