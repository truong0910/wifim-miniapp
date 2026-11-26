import { useRef, useState, type FormEvent } from "react";
import { Button, useNavigate } from "zmp-ui";
import { LEAD_ENDPOINT } from "../config";
import { services } from "../data/services";

// Số di động VN: 10 số, đầu 03/05/07/08/09. Cho phép người dùng gõ dấu cách/chấm.
export const normalizePhone = (v: string) => v.replace(/[\s.-]/g, "");
export const isVnPhone = (v: string) => /^0[35789]\d{8}$/.test(normalizePhone(v));

type Status = "idle" | "sending" | "success" | "error";

export default function LeadForm({ defaultService = "" }: { defaultService?: string }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService);
  const [note, setNote] = useState("");
  const [agree, setAgree] = useState(false);
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const sending = useRef(false); // khoá đồng bộ, chặn bấm gửi nhiều lần trước khi state kịp cập nhật

  // Không có endpoint thật → không hiển thị form (tránh tính năng "giả").
  if (!LEAD_ENDPOINT) return null;

  const errors = {
    name: name.trim().length < 2 ? "Vui lòng nhập họ tên." : "",
    phone: !isVnPhone(phone) ? "Số điện thoại gồm 10 chữ số, bắt đầu bằng 03, 05, 07, 08 hoặc 09." : "",
    agree: !agree ? "Vui lòng đồng ý để WIFIM liên hệ tư vấn." : "",
  };
  const valid = !errors.name && !errors.phone && !errors.agree;

  const submit = async (e?: FormEvent) => {
    e?.preventDefault();
    setTouched(true);
    if (!valid || sending.current) return;
    sending.current = true;
    setStatus("sending");
    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: normalizePhone(phone),
          service,
          note: note.trim(),
          source: "zalo-miniapp",
          createdAt: new Date().toISOString(),
        }),
        signal: AbortSignal.timeout ? AbortSignal.timeout(15000) : undefined,
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
    }
  };

  if (status === "success") {
    return (
      <div className="card notice notice-success" role="status">
        <div className="card-title">Đã gửi đăng ký thành công</div>
        <p className="muted">Cảm ơn bạn! WIFIM sẽ liên hệ tư vấn qua số điện thoại bạn cung cấp trong giờ làm việc.</p>
        <Button
          variant="secondary"
          fullWidth
          onClick={() => {
            setName("");
            setPhone("");
            setNote("");
            setAgree(false);
            setTouched(false);
            setStatus("idle");
          }}
        >
          Gửi yêu cầu khác
        </Button>
      </div>
    );
  }

  const show = (msg: string) => (touched && msg ? <div className="field-error">{msg}</div> : null);

  return (
    <form className="card form" onSubmit={submit} noValidate>
      <label className="field">
        <span className="field-label">Họ tên *</span>
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={80}
          autoComplete="name"
          placeholder="Nguyễn Văn A"
        />
        {show(errors.name)}
      </label>

      <label className="field">
        <span className="field-label">Số điện thoại *</span>
        <input
          className="input"
          type="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={14}
          autoComplete="tel"
          placeholder="09xx xxx xxx"
        />
        {show(errors.phone)}
      </label>

      <label className="field">
        <span className="field-label">Dịch vụ quan tâm</span>
        <select className="input" value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Chưa xác định / Cần tư vấn chung</option>
          {services.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span className="field-label">Ghi chú</span>
        <textarea
          className="input textarea"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          maxLength={500}
          rows={3}
          placeholder="Mô tả ngắn nhu cầu của bạn (không bắt buộc)"
        />
      </label>

      <div className="field">
        <label className="agree">
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          <span>
            Tôi đồng ý để WIFIM liên hệ tư vấn theo{" "}
            <button type="button" className="link" onClick={() => navigate("/privacy")}>
              Chính sách bảo mật
            </button>
          </span>
        </label>
        {show(errors.agree)}
      </div>

      {status === "error" && (
        <div className="notice notice-error" role="alert">
          Gửi không thành công. Vui lòng kiểm tra kết nối mạng và thử lại.
        </div>
      )}

      <Button htmlType="submit" fullWidth loading={status === "sending"} disabled={status === "sending"}>
        {status === "error" ? "Thử lại" : "Gửi đăng ký tư vấn"}
      </Button>
    </form>
  );
}
