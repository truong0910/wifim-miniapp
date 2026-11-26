// Biến môi trường (xem .env.example). Giá trị rỗng/không hợp lệ → tính năng tương ứng bị ẩn,
// để app không bao giờ có nút "giả" không hoạt động.
const env = import.meta.env;

export const OA_ID: string = (env.VITE_ZALO_OA_ID ?? "").trim();

const endpoint: string = (env.VITE_LEAD_ENDPOINT ?? "").trim();
export const LEAD_ENDPOINT = endpoint.startsWith("https://") ? endpoint : "";
