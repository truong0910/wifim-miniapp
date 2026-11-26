import { Header, Page } from "zmp-ui";
import { company } from "../data/company";

const UPDATED = "12/11/2026";

type Block = { h: string; p: string[] };

function PolicyPage({ title, blocks }: { title: string; blocks: Block[] }) {
  return (
    <Page className="page">
      <Header title={title} />
      <article className="container policy">
        <h1 className="detail-title">{title}</h1>
        <p className="muted">Cập nhật lần cuối: {UPDATED}</p>
        {blocks.map((b) => (
          <section key={b.h}>
            <h2 className="section-title">{b.h}</h2>
            {b.p.map((t) => (
              <p key={t} className="para">{t}</p>
            ))}
          </section>
        ))}
      </article>
    </Page>
  );
}

const contactLine = `${company.name} – MST ${company.taxCode} – ${company.address}. Hotline: ${company.hotlineDisplay} – Điện thoại: ${company.phoneDisplay} – Email: ${company.email}, ${company.emailCc}.`;

const privacy: Block[] = [
  {
    h: "1. Phạm vi áp dụng",
    p: [
      `Chính sách này áp dụng cho Mini App "WIFIM Digital Marketing" trên nền tảng Zalo, do ${company.name} (sau đây gọi là "WIFIM") quản lý.`,
    ],
  },
  {
    h: "2. Thông tin chúng tôi thu thập",
    p: [
      "Mini App chỉ thu thập thông tin do bạn tự nguyện nhập vào form \"Đăng ký tư vấn\": họ tên, số điện thoại, dịch vụ quan tâm và ghi chú (nếu có).",
      "Mini App không yêu cầu quyền truy cập số điện thoại Zalo, vị trí, danh bạ, máy ảnh hay bất kỳ quyền nhạy cảm nào khác, và không thu thập dữ liệu ngầm.",
    ],
  },
  {
    h: "3. Mục đích sử dụng",
    p: [
      "Thông tin được dùng duy nhất để WIFIM liên hệ, tư vấn dịch vụ theo yêu cầu của bạn.",
      "WIFIM không sử dụng thông tin của bạn cho mục đích khác khi chưa có sự đồng ý của bạn.",
    ],
  },
  {
    h: "4. Lưu trữ và bảo mật",
    p: [
      "Dữ liệu được truyền qua kết nối mã hóa HTTPS và lưu trữ trên hệ thống của WIFIM, chỉ nhân sự phụ trách tư vấn được phép truy cập.",
      "Thông tin được lưu trong thời gian cần thiết để phục vụ việc tư vấn hoặc đến khi bạn yêu cầu xóa.",
    ],
  },
  {
    h: "5. Chia sẻ thông tin",
    p: [
      "WIFIM không bán, trao đổi hay cho thuê thông tin cá nhân của bạn cho bên thứ ba. Thông tin chỉ được cung cấp khi có yêu cầu của cơ quan nhà nước có thẩm quyền theo quy định pháp luật.",
    ],
  },
  {
    h: "6. Quyền của bạn",
    p: [
      "Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin đã cung cấp, cũng như rút lại sự đồng ý được liên hệ, bằng cách liên hệ WIFIM theo thông tin bên dưới.",
    ],
  },
  { h: "7. Liên hệ", p: [contactLine] },
];

const terms: Block[] = [
  {
    h: "1. Giới thiệu",
    p: [
      `Mini App "WIFIM Digital Marketing" cung cấp thông tin giới thiệu về ${company.name} và các dịch vụ digital marketing của WIFIM. Khi sử dụng Mini App, bạn đồng ý với các điều khoản dưới đây.`,
    ],
  },
  {
    h: "2. Nội dung thông tin",
    p: [
      "Thông tin dịch vụ trong Mini App mang tính giới thiệu. Phạm vi công việc, thời gian và chi phí cụ thể được thống nhất trong báo giá/hợp đồng giữa WIFIM và khách hàng.",
      "Kết quả của các hoạt động marketing phụ thuộc vào nhiều yếu tố; WIFIM không cam kết kết quả tuyệt đối.",
    ],
  },
  {
    h: "3. Không có giao dịch trực tuyến",
    p: ["Mini App không thực hiện thanh toán, mua bán hay giao dịch tài chính nào."],
  },
  {
    h: "4. Trách nhiệm của người dùng",
    p: [
      "Cung cấp thông tin chính xác khi đăng ký tư vấn; không sử dụng Mini App cho mục đích vi phạm pháp luật hoặc gây ảnh hưởng đến hoạt động của hệ thống.",
    ],
  },
  {
    h: "5. Sở hữu trí tuệ",
    p: [
      "Nội dung, nhận diện thương hiệu trong Mini App thuộc quyền sở hữu của WIFIM. Tên các nền tảng quảng cáo được nhắc đến chỉ nhằm mô tả dịch vụ và thuộc về chủ sở hữu tương ứng.",
    ],
  },
  {
    h: "6. Thay đổi điều khoản",
    p: ["WIFIM có thể cập nhật điều khoản này; phiên bản mới có hiệu lực kể từ khi được đăng trong Mini App."],
  },
  { h: "7. Liên hệ", p: [contactLine] },
];

export const PrivacyPage = () => <PolicyPage title="Chính sách bảo mật" blocks={privacy} />;
export const TermsPage = () => <PolicyPage title="Điều khoản sử dụng" blocks={terms} />;
