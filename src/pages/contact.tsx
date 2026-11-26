import { Header, Icon, Page, useNavigate } from "zmp-ui";
import { ContactButtons } from "../components/contact-actions";
import LeadForm from "../components/lead-form";
import { Section } from "../components/ui";
import { LEAD_ENDPOINT } from "../config";
import { company } from "../data/company";

export default function ContactPage() {
  const navigate = useNavigate();
  return (
    <Page className="page page-tab">
      <Header title="Liên hệ" showBackIcon={false} />
      <div className="container">
        <Section title="Thông tin liên hệ">
          <div className="card info-rows">
            <div className="info-row">
              <Icon icon="zi-call" />
              <span>
                <span className="muted">Hotline</span>
                <strong>{company.hotlineDisplay}</strong>
              </span>
            </div>
            <div className="info-row">
              <Icon icon="zi-call" />
              <span>
                <span className="muted">Số điện thoại</span>
                <strong>{company.phoneDisplay}</strong>
              </span>
            </div>
            <div className="info-row">
              <Icon icon="zi-at" />
              <span>
                <span className="muted">Email</span>
                <strong>{company.email}</strong>
                <strong>{company.emailCc}</strong>
              </span>
            </div>
            <div className="info-row">
              <Icon icon="zi-location" />
              <span>
                <span className="muted">Địa chỉ</span>
                <strong>{company.address}</strong>
              </span>
            </div>
          </div>
        </Section>

        <Section>
          <ContactButtons showPhone />
        </Section>

        {LEAD_ENDPOINT && (
          <Section title="Đăng ký tư vấn">
            <LeadForm />
            <div className="policy-links">
              <button type="button" className="link" onClick={() => navigate("/privacy")}>
                Chính sách bảo mật
              </button>
              <span aria-hidden>·</span>
              <button type="button" className="link" onClick={() => navigate("/terms")}>
                Điều khoản sử dụng
              </button>
            </div>
          </Section>
        )}
      </div>
    </Page>
  );
}
