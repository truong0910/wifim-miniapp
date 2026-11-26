import { useParams } from "react-router-dom";
import { Button, Header, Icon, Page, useNavigate } from "zmp-ui";
import { ContactButtons } from "../components/contact-actions";
import { Faq, Section, Steps } from "../components/ui";
import { PRICE_NOTE, getService } from "../data/services";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = getService(id);

  if (!service) {
    return (
      <Page className="page">
        <Header title="Dịch vụ" />
        <div className="container empty">
          <p>Không tìm thấy dịch vụ này.</p>
          <Button onClick={() => navigate("/services", { replace: true })}>Xem danh sách dịch vụ</Button>
        </div>
      </Page>
    );
  }

  return (
    <Page className="page">
      <Header title={service.name} />
      <div className="container">
        <div className="detail-hero">
          <span className="icon-circle icon-lg">
            <Icon icon={service.icon as never} />
          </span>
          <h1 className="detail-title">{service.name}</h1>
          <span className="badge">{PRICE_NOTE}</span>
        </div>

        <Section title="Mô tả dịch vụ">
          {service.detail.map((p) => (
            <p key={p} className="para">{p}</p>
          ))}
          {service.items && (
            <ul className="bullets">
              {service.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          )}
        </Section>

        <Section title="Lợi ích">
          <ul className="checks">
            {service.benefits.map((b) => (
              <li key={b}>
                <Icon icon="zi-check-circle-solid" className="check-icon" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Quy trình triển khai">
          <Steps steps={service.process} />
        </Section>

        <Section title="Câu hỏi thường gặp">
          <Faq items={service.faqs} />
        </Section>

        <Section title="Liên hệ tư vấn">
          <ContactButtons chatLabel="Chat tư vấn" />
        </Section>
      </div>
    </Page>
  );
}
