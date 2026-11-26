import { Button, Header, Icon, Page, Swiper, useNavigate } from "zmp-ui";
import { BrandMark, CardList, Section } from "../components/ui";
import { commitments, coreValues, company } from "../data/company";
import { services } from "../data/services";

// Banner dựng bằng chữ + màu thương hiệu (không dùng ảnh placeholder).
// Khi có ảnh banner thật của công ty, thêm <img loading="lazy"> vào từng slide.
const slides = [
  { title: "Giải pháp Digital Marketing cho doanh nghiệp", sub: `Đồng hành cùng doanh nghiệp từ năm ${company.founded}` },
  { title: "Minh bạch – Hài lòng gắn bó – Cùng nhau vươn xa", sub: "Giá trị cốt lõi của WIFIM" },
  { title: "Kế hoạch khung chi tiết theo từng tháng", sub: "Làm việc theo quy trình Agile – Scrum" },
];

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Page className="page page-tab">
      <Header title="WIFIM Digital Marketing" showBackIcon={false} />
      <div className="container">
        <BrandMark />

        <Swiper autoplay loop duration={5000} className="banner">
          {slides.map((s, i) => (
            <Swiper.Slide key={s.title}>
              <div className={`slide slide-${i + 1}`}>
                <div className="slide-title">{s.title}</div>
                <div className="slide-sub">{s.sub}</div>
              </div>
            </Swiper.Slide>
          ))}
        </Swiper>

        <Section title="Dịch vụ của chúng tôi">
          <div className="service-grid">
            {services.map((s) => (
              <button key={s.id} type="button" className="service-tile" onClick={() => navigate(`/services/${s.id}`)}>
                <span className="icon-circle">
                  <Icon icon={s.icon as never} />
                </span>
                <span className="service-tile-name">{s.name}</span>
              </button>
            ))}
          </div>
        </Section>

        <Section title="Vì sao chọn WIFIM">
          <CardList items={[...coreValues, ...commitments]} />
        </Section>

        <Section>
          <div className="cta-box">
            <div className="card-title">Bạn cần tư vấn giải pháp marketing?</div>
            <p className="muted">Để lại thông tin hoặc liên hệ trực tiếp, WIFIM sẽ hỗ trợ bạn.</p>
            <Button fullWidth onClick={() => navigate("/contact", { animate: false, replace: true })}>
              Nhận tư vấn
            </Button>
          </div>
        </Section>
      </div>
    </Page>
  );
}
