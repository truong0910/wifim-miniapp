# Thông tin gửi duyệt Mini App

## Tên Mini App

WIFIM Digital Marketing

## Mô tả ngắn (≤ 100 ký tự)

Giới thiệu dịch vụ digital marketing của WIFIM gồm quảng cáo website SEO social PR video và app

> Zalo chặn ký tự đặc biệt (`- : & ( ) /`) trong tên và mô tả ở một số form. Nếu bị báo lỗi, dùng các bản không dấu câu ở file này.

## Mô tả khi tạo App ID (không ký tự đặc biệt, đã dùng)

Mini App chính thức của Công ty Cổ phần Công nghệ WIFIM MST 0316863281 giới thiệu các dịch vụ digital marketing gồm quảng cáo trực tuyến thiết kế website SEO và content marketing chăm sóc fanpage PR báo điện tử video marketing và thiết kế mobile app Người dùng xem chi tiết dịch vụ quy trình làm việc và liên hệ WIFIM để được tư vấn

## Mô tả chi tiết

WIFIM Digital Marketing là Mini App chính thức của Công ty Cổ phần Công nghệ WIFIM (MST 0316863281), giúp doanh nghiệp tìm hiểu các dịch vụ digital marketing và liên hệ tư vấn nhanh chóng ngay trên Zalo.

Trong Mini App, người dùng có thể:
- Xem 7 nhóm dịch vụ: Quảng cáo trực tuyến, Thiết kế website, SEO & Content marketing, Chăm sóc fanpage / Social marketing, PR báo điện tử, Video marketing, Thiết kế mobile app.
- Đọc chi tiết từng dịch vụ: mô tả, lợi ích, quy trình triển khai và câu hỏi thường gặp.
- Tìm hiểu về công ty: giá trị cốt lõi, cam kết, quy trình làm việc và thông tin pháp lý.
- Liên hệ WIFIM: chat với Zalo OA, gọi hotline hoặc gửi form đăng ký tư vấn (người dùng tự nhập họ tên, số điện thoại).

Mini App không có thanh toán, không giao dịch tài chính và không yêu cầu quyền truy cập thông tin nhạy cảm. Chính sách bảo mật và Điều khoản sử dụng được hiển thị ngay trong ứng dụng.

## Danh sách tính năng (khớp với app)

| # | Tính năng | Vị trí trong app |
|---|---|---|
| 1 | Trang chủ: banner giới thiệu, lưới 7 dịch vụ, "Vì sao chọn WIFIM", nút Nhận tư vấn | Tab Trang chủ |
| 2 | Danh sách dịch vụ | Tab Dịch vụ |
| 3 | Chi tiết dịch vụ: mô tả, lợi ích, quy trình, FAQ, nút Chat tư vấn / Gọi hotline | Dịch vụ → chọn một dịch vụ |
| 4 | Giới thiệu công ty, giá trị cốt lõi, cam kết, quy trình, thông tin pháp lý | Tab Giới thiệu |
| 5 | Thông tin liên hệ, Chat với WIFIM trên Zalo (OA), Gọi hotline | Tab Liên hệ |
| 6 | Form Đăng ký tư vấn (họ tên, SĐT, dịch vụ quan tâm, ghi chú, đồng ý chính sách) | Tab Liên hệ (*) |
| 7 | Chính sách bảo mật, Điều khoản sử dụng | Cuối tab Giới thiệu, dưới form |

(*) Chỉ ghi tính năng #6 vào mô tả nếu bản gửi duyệt đã cấu hình `VITE_LEAD_ENDPOINT`. Nếu không, xoá cụm "hoặc gửi form đăng ký tư vấn (…)" khỏi mô tả chi tiết.
Tương tự, chỉ ghi "chat với Zalo OA" nếu đã cấu hình `VITE_ZALO_OA_ID`.

## Danh mục gợi ý

- Danh mục chính: **Dịch vụ doanh nghiệp** (hoặc "Kinh doanh / Dịch vụ" tuỳ danh sách hiện có trên mini.zalo.me)
- Từ khoá: digital marketing, quảng cáo, thiết kế website, SEO, marketing doanh nghiệp

## Ảnh chụp màn hình cần nộp

Chụp trên điện thoại thật (mở bản Testing qua QR), dọc, không chỉnh sửa nội dung:

1. Trang chủ (banner + lưới dịch vụ)
2. Trang chủ cuộn xuống: "Vì sao chọn WIFIM" + nút Nhận tư vấn
3. Tab Dịch vụ (danh sách)
4. Chi tiết một dịch vụ (vd. Thiết kế website) – phần mô tả & lợi ích
5. Chi tiết dịch vụ – phần quy trình + FAQ đang mở + nút Chat tư vấn / Gọi hotline
6. Tab Giới thiệu – thông tin pháp lý
7. Tab Liên hệ – thông tin liên hệ + nút Chat/Gọi + form (nếu có)
8. Trang Chính sách bảo mật

## Thông tin khác thường được hỏi

- Quyền sử dụng: **không** xin quyền nào.
- Domain gọi API: chỉ domain của `VITE_LEAD_ENDPOINT` (nếu có), qua HTTPS.
- Tài khoản test: không cần đăng nhập.
- Chính sách bảo mật: trong app, đường dẫn nội bộ `/privacy`.
