function renderTable() {

    let data = getBorrows();

    let html = "";

    data.forEach((item,index)=>{

        html += `
        <tr>
            <td>${item.borrowId}</td>
            <td>${item.borrower}</td>
            <td>${item.bookId}</td>
            <td>${item.category}</td>
            <td>${item.status}</td>

            <td>
                <button onclick="editBorrow(${index})">
                    Sửa
                </button>

                <button onclick="deleteBorrow(${index})">
                    Xóa
                </button>
            </td>
        </tr>
        `;
    });

    $("#borrowTable").html(html);

    renderStats();
}

function renderStats(){

    let data = getBorrows();

    $("#tongPhieu").text(data.length);

    $("#dangMuon").text(
        data.filter(x=>x.status=="Đang mượn").length
    );

    $("#daTra").text(
        data.filter(x=>x.status=="Đã trả").length
    );
}
// Hàm xử lý khi người dùng ấn nút "Sửa" trên một dòng của bảng
function editBorrow(index) {
    // 1. Lấy danh sách từ localStorage
    let data = JSON.parse(localStorage.getItem("BORROWS")) || [];
    let item = data[index];

    if (item) {
        // 2. Điền dữ liệu của dòng đó vào các ô input trên Form modal
        $("#borrowId").val(item.borrowId);
        $("#borrower").val(item.borrower);
        $("#bookId").val(item.bookId);
        $("#category").val(item.category);
        $("#borrowDate").val(item.borrowDate);
        $("#dueDate").val(item.dueDate);
        $("#phone").val(item.phone);
        $("#email").val(item.email);
        $("#status").val(item.status);
        $("#note").val(item.note);

        // 3. ĐẶC BIỆT QUAN TRỌNG: Lưu lại index vào thẻ ẩn editIndex để đánh dấu đang sửa
        $("#editIndex").val(index);

        // Khi sửa, mở khóa hoặc khóa ô Mã phiếu tùy thuộc vào nghiệp vụ (thường không cho sửa Mã phiếu)
        $("#borrowId").prop("disabled", true); 

        // 4. Mở modal lên để người dùng chỉnh sửa
        $("#borrowModal").css("display", "flex");
        
        // Xóa bỏ các thông báo đỏ báo lỗi cũ (nếu có) từ lần nhập trước
        let validator = $("#borrowForm").validate();
        validator.resetForm();
    }
}

// Hàm xử lý khi người dùng ấn nút "Xóa"
function deleteBorrow(index) {
    if (confirm("Bạn có chắc chắn muốn xóa phiếu mượn này không?")) {
        // Lấy dữ liệu hiện tại
        let data = JSON.parse(localStorage.getItem("BORROWS")) || [];
        
        // Xóa 1 phần tử tại vị trí index
        data.splice(index, 1);
        
        // Cập nhật lại vào localStorage
        localStorage.setItem("BORROWS", JSON.stringify(data));
        
        // Render lại bảng dữ liệu mới
        renderTable();
    }
}