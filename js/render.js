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
// CHỨC NĂNG SỬA: Đổ dữ liệu ngược lại Form
function editBorrow(index) {
    let data = getBorrows();
    let item = data[index];

    // Điền dữ liệu của bản ghi vào form
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

    // Lưu lại vị trí đang sửa vào ô ẩn để hàm lưu nhận diện
    $("#editIndex").val(index);

    // Mở popup form lên
    $("#borrowModal").css("display", "flex");
}

// CHỨC NĂNG XÓA: Có hộp thoại xác nhận trước khi xóa
function deleteBorrow(index) {
    if (confirm("Bạn có chắc chắn muốn xóa phiếu mượn này không?")) {
        let data = getBorrows();
        
        // Xóa 1 phần tử tại vị trí index
        data.splice(index, 1);
        
        // Cập nhật lại Local Storage
        localStorage.setItem(KEY, JSON.stringify(data));
        
        // Vẽ lại bảng và tính toán lại thống kê tự động
        renderTable();
    }
}