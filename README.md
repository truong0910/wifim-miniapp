# WIFIM Digital Marketing (Zalo Mini App)

Mini App giới thiệu công ty và 7 nhóm dịch vụ của **Công ty Cổ phần Công nghệ WIFIM**.
Công nghệ: React 18 + TypeScript + Vite 5 + `zmp-ui` + `zmp-sdk`. Nội dung tĩnh trong `src/data/*.ts`, không cần backend.

## 1. Cài đặt

Yêu cầu: Node.js ≥ 18.

```bash
npm install
```

```bash
npm install -g zmp-cli
```

## 2. Cấu hình

### 2.1 `app-config.json` (tên app, màu header)

| Khóa | Ý nghĩa |
|---|---|
| `app.title` | Tên Mini App: `WIFIM Digital Marketing` (giữ nguyên, không IN HOA toàn bộ) |
| `app.headerColor` | Màu thanh trạng thái/header – đặt trùng màu thương hiệu |
| `app.actionBarHidden: true` | Ẩn action bar mặc định của Zalo vì app tự vẽ header bằng `zmp-ui` |

**Màu thương hiệu:** sửa `--brand`, `--brand-dark`, `--brand-soft` ở đầu `src/css/app.css` và `headerColor` trong `app-config.json` + `<meta name="theme-color">` trong `src/index.html`. Màu hiện tại `#0B4DB8` là màu tạm, thay bằng mã màu chính thức của WIFIM.

**Logo / icon app:** icon Mini App (PNG nền trong, ≥ 512×512) được tải lên tại trang quản lý Mini App (mini.zalo.me), không nằm trong source.
Trong app, header đang dùng logo dạng chữ (`BrandMark` trong `src/components/ui.tsx`). Khi có logo chính thức: lưu `src/static/logo.webp` (nén, ≤ 30 KB) rồi thay ô chữ "W" bằng
`<img src={logo} width={44} height={44} alt="WIFIM" />` (với `import logo from "../static/logo.webp"`).

**Ảnh banner:** banner trang chủ đang dựng bằng chữ + màu thương hiệu (không dùng ảnh placeholder). Khi có ảnh thật của công ty (WebP, ≤ 100 KB/ảnh), thêm `<img loading="lazy" … />` vào từng slide trong `src/pages/home.tsx`.

### 2.2 Biến môi trường (`.env`)

Sao chép `.env.example` thành `.env`:

| Biến | Bắt buộc | Mô tả | Nếu để trống |
|---|---|---|---|
| `VITE_ZALO_OA_ID` | Nên có | OA ID của Zalo OA đã xác thực (dãy số, lấy tại oa.zalo.me → Thông tin OA) | Ẩn mọi nút "Chat" (chỉ còn nút Gọi hotline) |
| `VITE_LEAD_ENDPOINT` | Tuỳ chọn | URL **HTTPS** nhận form Đăng ký tư vấn | Ẩn form, trang Liên hệ chỉ còn Chat OA + Gọi hotline |

Endpoint nhận `POST` với `Content-Type: application/json`:

```json
{ "name": "Nguyễn Văn A", "phone": "0912345678", "service": "Thiết kế website", "note": "", "source": "zalo-miniapp", "createdAt": "2026-11-12T03:00:00.000Z" }
```

Trả về HTTP 2xx là thành công; khác 2xx hoặc lỗi mạng/timeout 15 giây → app hiện thông báo lỗi + nút **Thử lại**.
Endpoint phải bật CORS cho domain Mini App và **được khai báo trong mục "Whitelist domain" của Mini App** trên mini.zalo.me.

> App **không** gọi `getPhoneNumber`, `getLocation`, `getUserInfo` hay bất kỳ API cần cấp quyền nào. Người dùng tự nhập số điện thoại.

## 3. Chạy thử

```bash
zmp start
```

Hoặc chạy nhanh trên trình duyệt (không có khung Zalo):

```bash
npm run dev
```

Lưu ý: ngoài Zalo, `openChat`/`openPhone` không mở được — app bắt lỗi và hiện toast, không lỗi console.

### Test trên điện thoại bằng QR

1. Đăng nhập: `zmp login` (quét QR bằng Zalo của tài khoản quản trị Mini App).
2. Deploy bản thử nghiệm: `zmp deploy` → chọn **Testing**.
3. Vào mini.zalo.me → Mini App → **Phiên bản** → bản Testing → quét mã QR bằng Zalo để mở trên điện thoại (tài khoản phải được thêm vào danh sách tester).

## 4. Build & deploy

```bash
npm run build
```

```bash
zmp deploy
```

`npm run build` chạy typecheck rồi build ra thư mục `www/` (kèm `app-config.json` sinh tự động). `zmp deploy` hỏi loại phiên bản (Testing/Development) và mô tả.

## 5. Gửi duyệt

1. Hoàn thành [CHECKLIST.md](CHECKLIST.md).
2. Trên mini.zalo.me: điền thông tin theo [SUBMISSION.md](SUBMISSION.md) (mô tả, danh mục, ảnh chụp màn hình).
3. Chọn phiên bản đã deploy → **Gửi duyệt**. Sau khi được duyệt → **Phát hành**.

## Cấu trúc

```
src/
  app.tsx                 # router + bottom navigation 4 tab
  config.ts               # đọc biến môi trường
  data/company.ts         # thông tin doanh nghiệp, giá trị cốt lõi, quy trình
  data/services.ts        # 7 dịch vụ: mô tả, lợi ích, quy trình, FAQ
  components/             # ContactButtons (openChat/openPhone), LeadForm, UI dùng chung
  pages/                  # home, services, service-detail, about, contact, policy (privacy + terms)
  css/app.css             # màu thương hiệu & style
```

Sửa nội dung dịch vụ/công ty: chỉ cần chỉnh `src/data/*.ts`.
