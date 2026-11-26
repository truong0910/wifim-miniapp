import { Header, Page, useNavigate } from "zmp-ui";
import { CardList, Section, Steps } from "../components/ui";
import { commitments, company, coreValues, workProcess } from "../data/company";

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <Page className="page page-tab">
      <Header title="Giới thiệu" showBackIcon={false} />
      <div className="container">
        <Section title="Về WIFIM">
          <p className="para">{company.intro}</p>
        </Section>

        <Section title="Giá trị cốt lõi">
          <CardList items={coreValues} />
        </Section>

        <Section title="Cam kết">
          <CardList items={commitments} />
        </Section>

        <Section title="Quy trình làm việc">
          <Steps steps={workProcess} />
        </Section>

        <Section title="Thông tin pháp lý">
          <dl className="card info-list">
            <dt>Tên doanh nghiệp</dt>
            <dd>{company.name} ({company.shortName})</dd>
            <dt>Mã số thuế</dt>
            <dd>{company.taxCode}</dd>
            <dt>Năm thành lập</dt>
            <dd>{company.founded}</dd>
            <dt>Địa chỉ</dt>
            <dd>{company.address}</dd>
            <dt>Website</dt>
            <dd>{company.website}</dd>
          </dl>
        </Section>

        <div className="policy-links">
          <button type="button" className="link" onClick={() => navigate("/privacy")}>
            Chính sách bảo mật
          </button>
          <span aria-hidden>·</span>
          <button type="button" className="link" onClick={() => navigate("/terms")}>
            Điều khoản sử dụng
          </button>
        </div>
      </div>
    </Page>
  );
}
