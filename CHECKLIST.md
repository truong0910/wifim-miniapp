# Checklist trước khi gửi duyệt

Ký hiệu: [x] đã đáp ứng trong code (đã kiểm tra) · [ ] cần người phụ trách làm/kiểm tra trước khi gửi.

## Quy tắc bắt buộc

1. [x] **Không openWebView / iframe.** Toàn bộ nội dung dựng native bằng React + zmp-ui (`grep openWebView|iframe src` → không có).
2. [x] **Không điều hướng ra liên kết ngoài.** Không có `<a href>` ra ngoài, không `tel:`/`mailto:`/`zalo.me`, không nút tải file. Email, website chỉ hiển thị dạng chữ.
3. [x] **Chat dùng `openChat` (type `oa`), gọi điện dùng `openPhone`** của `zmp-sdk` — `src/components/contact-actions.tsx`.
   - [ ] Điền `VITE_ZALO_OA_ID` (OA đã xác thực) trước khi build bản gửi duyệt và bấm thử nút Chat trên điện thoại.
4. [x] **Mọi nút/tab đều hoạt động**, không "coming soon", lorem ipsum, ảnh placeholder. Nút Chat tự ẩn khi thiếu OA ID; form tự ẩn khi thiếu endpoint. Route lạ → về Trang chủ; ID dịch vụ sai → màn "Không tìm thấy" có nút quay lại.
5. [x] **Không xin quyền nào.** Không gọi `getPhoneNumber`, `getLocation`, `getUserInfo`, `authorize`.
   - [ ] Trên mini.zalo.me, mục Quyền: không tick quyền nào.
6. [x] **Không thanh toán, ví, minigame, quay thưởng, thu thập ngầm.** Chỉ gửi dữ liệu form khi người dùng bấm Gửi và đã tick đồng ý.
7. [x] **Tên app:** `WIFIM Digital Marketing` (`app-config.json`, `index.html`). Không IN HOA toàn bộ, không thương hiệu bên thứ ba.
   - [ ] Icon app (PNG nền trong ≥ 512×512) là logo WIFIM, không chứa logo Google/TikTok/Meta.
8. [x] **Không dùng logo Google/TikTok/Meta.** Icon dịch vụ dùng bộ icon zmp-ui; tên nền tảng chỉ xuất hiện dạng chữ.
9. [ ] **Nội dung khớp mô tả gửi duyệt** — đối chiếu SUBMISSION.md, đặc biệt dòng form/chat tuỳ theo env đã cấu hình.
10. [x] **Chuẩn mobile:** vùng chạm ≥ 44px (nút 48px, ô dịch vụ ≥ 104px, FAQ 48px, tab 52px), chữ ≥ 14px (đã đo trên mọi trang), có safe-area (header zmp-ui + padding đáy), không tràn ngang ở 360px (đã đo cả 8 route). Có trạng thái loading/lỗi/thành công cho form, màn rỗng cho dịch vụ không tồn tại.
11. [x] **Không console error** từ code app; mọi lời gọi `zmp-sdk` nằm trong `try/catch` + toast; `fetch` có `try/catch`, timeout 15 giây.

## Nội dung

- [x] Thông tin doanh nghiệp đúng: tên, MST 0316863281, địa chỉ Số 13 Đường 8, KDC Hiệp Bình, P. Hiệp Bình, TP.HCM; hotline 096.234.36.13; SĐT 0368.867.667; email wifimjsc@gmail.com, info@wifim.vn.
- [x] Không dùng "200+ dự án / 100+ khách hàng" (chưa được xác nhận). Nếu công ty xác nhận, thêm vào `src/data/company.ts`.
- [x] Không cam kết kết quả tuyệt đối, không "top 1", "100%", "rẻ nhất"; không so sánh đối thủ; giá hiển thị "Liên hệ báo giá".
- [ ] Người phụ trách WIFIM đọc duyệt lại nội dung 7 dịch vụ, Chính sách bảo mật và Điều khoản.

## Form đăng ký tư vấn (nếu bật)

- [x] Họ tên bắt buộc; SĐT bắt buộc, kiểm tra 10 số đầu 03/05/07/08/09; checkbox đồng ý bắt buộc, có link Chính sách bảo mật.
- [x] Chống gửi trùng (khoá đồng bộ, đã kiểm tra 3 lần bấm liên tiếp → 1 request).
- [x] Đã kiểm tra trạng thái lỗi + nút Thử lại và trạng thái thành công.
- [ ] Endpoint thật dùng HTTPS, bật CORS, đã khai báo whitelist domain trên mini.zalo.me; gửi thử 1 lần từ điện thoại và xác nhận dữ liệu tới nơi.

## Trước khi bấm Gửi duyệt

- [ ] `npm run build` không lỗi.
- [ ] `zmp deploy` bản Testing, mở bằng QR trên **cả Android và iOS**: bấm qua từng tab, từng dịch vụ, nút Chat, nút Gọi, form, 2 trang chính sách, nút back.
- [ ] Chụp đủ ảnh màn hình theo SUBMISSION.md.
- [ ] Đã thay màu tạm `#0B4DB8` bằng màu thương hiệu chính thức (nếu khác).
