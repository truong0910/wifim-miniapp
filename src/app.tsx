import { Navigate, Route, useLocation } from "react-router-dom";
import { AnimationRoutes, App as ZApp, BottomNavigation, Icon, SnackbarProvider, ZMPRouter, useNavigate } from "zmp-ui";

import HomePage from "./pages/home";
import ServicesPage from "./pages/services";
import ServiceDetailPage from "./pages/service-detail";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import { PrivacyPage, TermsPage } from "./pages/policy";

const TABS = [
  { path: "/", label: "Trang chủ", icon: "zi-home" },
  { path: "/services", label: "Dịch vụ", icon: "zi-grid-solid" },
  { path: "/about", label: "Giới thiệu", icon: "zi-info-circle" },
  { path: "/contact", label: "Liên hệ", icon: "zi-call" },
] as const;

function TabBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  if (!TABS.some((t) => t.path === pathname)) return null;
  return (
    <BottomNavigation fixed activeKey={pathname} onChange={(key) => navigate(key, { animate: false, replace: true })}>
      {TABS.map((t) => (
        <BottomNavigation.Item key={t.path} itemKey={t.path} label={t.label} icon={<Icon icon={t.icon} />} />
      ))}
    </BottomNavigation>
  );
}

export default function App() {
  return (
    <ZApp>
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </AnimationRoutes>
          <TabBar />
        </ZMPRouter>
      </SnackbarProvider>
    </ZApp>
  );
}
