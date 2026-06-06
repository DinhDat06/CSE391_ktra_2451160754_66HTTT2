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