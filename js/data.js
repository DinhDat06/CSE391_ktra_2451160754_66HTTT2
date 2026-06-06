const KEY = "BORROWS";

function initData() {

    if (!localStorage.getItem(KEY)) {

        const sampleData = [
            {
                borrowId: "PM-1001",
                borrower: "Nguyen Van A",
                bookId: "BK10001",
                category: "CNTT",
                borrowDate: "2026-06-01",
                dueDate: "2026-06-20",
                phone: "0912345678",
                email: "a@library.vn",
                status: "Đang mượn",
                note: ""
            },
            {
                borrowId: "PM-1002",
                borrower: "Tran Thi B",
                bookId: "BK10002",
                category: "Kinh tế",
                borrowDate: "2026-05-10",
                dueDate: "2026-05-25",
                phone: "0987654321",
                email: "b@library.vn",
                status: "Đã trả",
                note: ""
            },
            {
                borrowId: "PM-1003",
                borrower: "Le Van C",
                bookId: "BK10003",
                category: "Ngoại ngữ",
                borrowDate: "2026-05-15",
                dueDate: "2026-06-05",
                phone: "0376543210",
                email: "c@library.vn",
                status: "Đang mượn",
                note: ""
            },
            {
                borrowId: "PM-1004",
                borrower: "Pham Thi D",
                bookId: "BK10004",
                category: "Kỹ năng",
                borrowDate: "2026-04-20",
                dueDate: "2026-05-10",
                phone: "0856789123",
                email: "d@library.vn",
                status: "Đã trả",
                note: ""
            },
            {
                borrowId: "PM-1005",
                borrower: "Hoang Van E",
                bookId: "BK10005",
                category: "CNTT",
                borrowDate: "2026-06-02",
                dueDate: "2026-06-22",
                phone: "0798765432",
                email: "e@library.vn",
                status: "Đang mượn",
                note: ""
            }
        ];

        localStorage.setItem(KEY, JSON.stringify(sampleData));
    }
}

function getBorrows() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

function saveBorrows(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
}