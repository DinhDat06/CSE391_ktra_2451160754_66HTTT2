ĐỀ KIỂM TRA CSE391 - Nền tảng phát triển web
Thời gian làm bài: 45 phút
ĐỀ 01: Quản lý Phiếu Mượn Sách (Library Borrow Management) – SỬ DỤNG HTML, CSS, JS
Yêu cầu
Xây dựng trang quản lý phiếu mượn sách borrows.html với các chức năng sau:
•	Hiển thị danh sách phiếu mượn đã được lưu từ Local Storage dưới dạng bảng.
•	Mỗi dòng dữ liệu phải có các thao tác: Sửa và Xóa phiếu mượn.
•	Khi chọn Sửa, dữ liệu của phiếu mượn phải được đổ ngược lại form để người dùng cập nhật.
•	Khi chọn Xóa, cần hiển thị hộp thoại xác nhận trước khi xóa khỏi danh sách.
•	Hiển thị thêm các thông tin thống kê:
o	Tổng số phiếu mượn.
o	Số phiếu đang mượn.
o	Số phiếu đã trả.
Khi bấm nút Thêm phiếu mượn, hiển thị FORM “Thêm phiếu mượn” dạng popup hoặc modal.
Form thêm phiếu mượn
Form cần có các trường thông tin sau:
•	Mã phiếu mượn (Borrow ID)
•	Họ tên người mượn
•	Mã sách
•	Thể loại sách
•	Ngày mượn
•	Hạn trả
•	Số điện thoại liên hệ
•	Email liên hệ
•	Trạng thái mượn (Đang mượn / Đã trả)
•	Ghi chú
Validate form bằng JavaScript hoặc jQuery Validate
1. Mã phiếu mượn
•	Không được để trống.
•	Phải theo định dạng PM-XXXX, trong đó X là chữ số (ví dụ: PM-2048).
•	Không được trùng với mã phiếu đã tồn tại trong Local Storage khi thêm mới.
2. Họ tên người mượn
•	Không được để trống.
•	Phải có từ 2 đến 40 ký tự.
•	Chỉ chứa chữ cái và khoảng trắng.
3. Mã sách
•	Không được để trống.
•	Phải bắt đầu bằng BK và theo sau là đúng 5 chữ số (ví dụ: BK10234).
4. Thể loại sách
•	Bắt buộc chọn một giá trị trong danh sách: CNTT, Kinh tế, Ngoại ngữ, Kỹ năng.
5. Ngày mượn
•	Không được để trống.
•	Không được lớn hơn ngày hiện tại.
6. Hạn trả
•	Không được để trống.
•	Phải lớn hơn hoặc bằng ngày mượn.
•	Không được vượt quá 30 ngày kể từ ngày mượn.
7. Số điện thoại liên hệ
•	Không được để trống.
•	Phải gồm đúng 10 chữ số.
•	Phải bắt đầu bằng 03, 05, 07, 08 hoặc 09.
8. Email liên hệ
•	Không được để trống.
•	Phải đúng định dạng email.
•	Phải kết thúc bằng @library.vn.
9. Trạng thái mượn
•	Bắt buộc chọn một trong hai giá trị: Đang mượn hoặc Đã trả.
10. Ghi chú
•	Không bắt buộc nhập.
•	Nếu có nhập thì không vượt quá 120 ký tự.
- Không được chứa các thẻ HTML cơ bản như `<script>`, `<iframe>`, `<img>`.

Xử lý
•	Sau khi dữ liệu hợp lệ, lưu phiếu mượn vào Local Storage.
•	Nếu đang ở chế độ chỉnh sửa thì cập nhật đúng bản ghi hiện tại, không tạo bản ghi mới.
•	Sau khi thêm hoặc sửa thành công, quay lại danh sách quản lý phiếu mượn.
•	Dữ liệu hiển thị trên bảng cần cập nhật ngay sau mỗi thao tác thêm, sửa, xóa.
Yêu cầu kỹ thuật
•	Sử dụng HTML, CSS, JavaScript thuần hoặc có thể dùng jQuery.
•	Dữ liệu phải được lưu và đọc từ Local Storage.
•	Có kiểm tra validation và hiển thị thông báo lỗi ngay bên dưới từng trường.
•	Không yêu cầu làm giao diện giống mẫu, sinh viên tự thiết kế bố cục.
•	Khuyến khích giao diện responsive, dễ sử dụng trên màn hình laptop.
Hướng dẫn chấm điểm (10 điểm)
1. Cấu trúc HTML (2 điểm)
•	Form nhập liệu đầy đủ các trường theo yêu cầu.
•	Bảng danh sách phiếu mượn hiển thị đúng cấu trúc.
2. Validation Form (3 điểm)
•	Validate đúng định dạng mã phiếu mượn và mã sách.
•	Validate đúng ràng buộc ngày mượn, hạn trả, số điện thoại, email.
•	Hiển thị lỗi rõ ràng, đúng vị trí.
3. Chức năng CRUD (3 điểm)
•	Thêm mới phiếu mượn vào Local Storage.
•	Sửa đúng dữ liệu phiếu mượn đã có.
•	Xóa dữ liệu có xác nhận trước khi xóa.
4. Giao diện và xử lý dữ liệu (2 điểm)
•	Bố cục rõ ràng, dễ thao tác.
•	Có thống kê tổng số phiếu, số phiếu đang mượn và đã trả.
 

ĐỀ 02: Ứng dụng Quản lý Đăng ký Hội thảo (Workshop Registration Manager) – SỬ DỤNG REACT
Mô tả bài tập
Xây dựng ứng dụng quản lý đăng ký tham gia hội thảo cho sinh viên với các chức năng sau:
•	Thêm mới một lượt đăng ký hội thảo.
•	Hiển thị danh sách lượt đăng ký dưới dạng card hoặc bảng.
•	Chỉnh sửa thông tin của lượt đăng ký đã có.
•	Xóa một lượt đăng ký khỏi danh sách.
•	Lọc danh sách theo hình thức tham gia và trạng thái thanh toán.
•	Tìm kiếm theo họ tên hoặc mã đăng ký.
•	Hiển thị thống kê nhanh:
o	Tổng số lượt đăng ký.
o	Số lượt đăng ký online.
o	Số lượt đã thanh toán.
Yêu cầu kỹ thuật
•	Sử dụng React Hooks.
•	Dữ liệu được lưu bằng Local Storage.
•	Mỗi lượt đăng ký phải có một ID duy nhất.
•	Tách giao diện thành các component riêng biệt, ví dụ:
o	RegistrationForm
o	RegistrationList
o	RegistrationItem
o	FilterPanel
o	SummaryBox
•	Sử dụng useState để quản lý danh sách đăng ký, dữ liệu form, bộ lọc và từ khóa tìm kiếm.
•	Sử dụng useEffect để tải dữ liệu từ Local Storage khi mở ứng dụng và lưu lại khi dữ liệu thay đổi.
•	Có thể dùng Bootstrap 5 hoặc CSS tùy chọn để trình bày.
•	Không yêu cầu giao diện mẫu, sinh viên tự thiết kế.
Form đăng ký hội thảo
Form gồm các trường sau:
•	Mã đăng ký (Registration Code)
•	Họ và tên
•	Email sinh viên
•	Số điện thoại
•	Chủ đề hội thảo
•	Hình thức tham gia (Online / Offline)
•	Ngày tham gia
•	Ca tham gia (Sáng / Chiều / Tối)
•	Trạng thái thanh toán (Chưa thanh toán / Đã thanh toán)
•	Phí tham dự
•	Ghi chú thêm
Validation dữ liệu đầu vào
1. Mã đăng ký
•	Không được để trống.
•	Phải đúng định dạng WR-XXX-999, trong đó X là chữ in hoa và 9 là chữ số (ví dụ: WR-ABC-123).
•	Không được trùng với mã đã tồn tại trong danh sách.
2. Họ và tên
•	Không được để trống.
•	Phải có từ 2 đến 50 ký tự.
•	Không được chứa số hoặc ký tự đặc biệt.
3. Email sinh viên
•	Không được để trống.
•	Phải đúng định dạng email.
•	Phải kết thúc bằng @student.haui.edu.vn.
4. Số điện thoại
•	Không được để trống.
•	Chỉ gồm 10 chữ số.
•	Phải bắt đầu bằng 0.
5. Chủ đề hội thảo
•	Bắt buộc chọn một giá trị trong danh sách: AI, Web Development, IoT, Data Science.
6. Hình thức tham gia
•	Bắt buộc chọn Online hoặc Offline.
7. Ngày tham gia
•	Không được để trống.
•	Phải là ngày hiện tại hoặc ngày trong tương lai.
•	Không được quá 60 ngày kể từ ngày hiện tại.
8. Ca tham gia
•	Bắt buộc chọn Sáng, Chiều hoặc Tối.
9. Trạng thái thanh toán
•	Bắt buộc chọn Chưa thanh toán hoặc Đã thanh toán.
10. Phí tham dự
•	Không được để trống.
•	Phải là số nguyên dương.
•	Giá trị phải nằm trong khoảng từ 50000 đến 500000.
11. Ghi chú thêm
•	Không bắt buộc nhập.
•	Nếu có nhập thì tối đa 150 ký tự.
•	Không được chứa từ khóa nhạy cảm như hack, spam, test123.
Chức năng xử lý
•	Thêm mới lượt đăng ký khi dữ liệu hợp lệ.
•	Chỉnh sửa đúng bản ghi được chọn.
•	Xóa bản ghi có xác nhận trước khi xóa.
•	Lọc theo hình thức tham gia và trạng thái thanh toán.
•	Tìm kiếm theo mã đăng ký hoặc tên sinh viên.
•	Đồng bộ toàn bộ dữ liệu với Local Storage.
Hướng dẫn chấm điểm (10 điểm)
1. Cấu trúc component (2 điểm)
•	Tách component hợp lý.
•	Truyền props và quản lý state đúng.
2. React Hooks (3 điểm)
•	Sử dụng useState đúng mục đích.
•	Sử dụng useEffect đúng để load/save Local Storage.
•	Quản lý dữ liệu và cập nhật giao diện hợp lý.
3. Chức năng CRUD và lọc tìm kiếm (3 điểm)
•	Thêm, sửa, xóa lượt đăng ký đầy đủ.
•	Lọc và tìm kiếm hoạt động đúng.
•	Dữ liệu cập nhật ngay sau thao tác.
4. Validation và giao diện (2 điểm)
•	Validate đầy đủ theo yêu cầu đề bài.
•	Giao diện rõ ràng, dễ thao tác, có thống kê cơ bản.
