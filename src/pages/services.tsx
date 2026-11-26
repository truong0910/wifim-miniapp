import { Header, Icon, Page, useNavigate } from "zmp-ui";
import { services } from "../data/services";

export default function ServicesPage() {
  const navigate = useNavigate();
  return (
    <Page className="page page-tab">
      <Header title="Dịch vụ" showBackIcon={false} />
      <div className="container stack">
        {services.map((s) => (
          <button key={s.id} type="button" className="card service-row" onClick={() => navigate(`/services/${s.id}`)}>
            <span className="icon-circle">
              <Icon icon={s.icon as never} />
            </span>
            <span className="service-row-body">
              <span className="card-title">{s.name}</span>
              <span className="muted">{s.short}</span>
            </span>
            <Icon icon="zi-chevron-right" className="muted" />
          </button>
        ))}
      </div>
    </Page>
  );
}
