// Nội dung dịch vụ: không cam kết kết quả tuyệt đối, không so sánh đối thủ, không hiển thị giá.
export type Service = {
  id: string;
  name: string;
  icon: string; // tên icon zmp-ui (zi-*)
  short: string;
  detail: string[];
  items?: string[]; // các hạng mục/gói con
  benefits: string[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const PRICE_NOTE = "Liên hệ báo giá";

export const services: Service[] = [
  {
    id: "quang-cao-truc-tuyen",
    name: "Quảng cáo trực tuyến",
    icon: "zi-poll",
    short: "Lên kế hoạch và vận hành quảng cáo đa nền tảng, tối ưu theo mục tiêu kinh doanh.",
    detail: [
      "WIFIM hỗ trợ doanh nghiệp xây dựng và vận hành chiến dịch quảng cáo trực tuyến trên các nền tảng phổ biến như Google Ads, TikTok Ads, Facebook/Fanpage Ads cùng các chiến dịch quảng cáo thương hiệu.",
      "Mỗi chiến dịch được thiết kế dựa trên mục tiêu cụ thể (nhận diện, tìm kiếm khách hàng tiềm năng, bán hàng), theo dõi số liệu thường xuyên và điều chỉnh để sử dụng ngân sách hợp lý.",
    ],
    items: ["Quảng cáo Google Ads", "Quảng cáo TikTok Ads", "Quảng cáo Facebook/Fanpage", "Quảng cáo thương hiệu"],
    benefits: [
      "Tiếp cận đúng nhóm khách hàng mục tiêu",
      "Ngân sách được phân bổ và theo dõi rõ ràng",
      "Báo cáo số liệu định kỳ, dễ hiểu",
      "Tối ưu liên tục dựa trên dữ liệu thực tế",
    ],
    process: [
      { title: "Phân tích", desc: "Tìm hiểu sản phẩm, khách hàng mục tiêu và mục tiêu chiến dịch." },
      { title: "Lập kế hoạch", desc: "Đề xuất kênh, thông điệp, ngân sách và chỉ số theo dõi." },
      { title: "Triển khai", desc: "Thiết lập tài khoản, nội dung quảng cáo và cấu hình đo lường." },
      { title: "Tối ưu", desc: "Theo dõi hằng ngày, điều chỉnh đối tượng, nội dung và giá thầu." },
      { title: "Báo cáo", desc: "Tổng hợp kết quả và đề xuất hướng đi cho giai đoạn tiếp theo." },
    ],
    faqs: [
      {
        q: "Ngân sách quảng cáo tối thiểu là bao nhiêu?",
        a: "Ngân sách phụ thuộc vào ngành hàng, kênh và mục tiêu. WIFIM sẽ tư vấn mức phù hợp sau khi trao đổi nhu cầu cụ thể.",
      },
      {
        q: "Tôi có được xem số liệu chiến dịch không?",
        a: "Có. Khách hàng được chia sẻ quyền xem và nhận báo cáo định kỳ về chi phí, lượt tiếp cận và các chỉ số chính.",
      },
      {
        q: "Bao lâu thì chiến dịch bắt đầu chạy?",
        a: "Thông thường từ vài ngày làm việc sau khi thống nhất kế hoạch và nội dung, tùy thời gian xét duyệt của từng nền tảng.",
      },
    ],
  },
  {
    id: "thiet-ke-website",
    name: "Thiết kế website",
    icon: "zi-pcline",
    short: "Website chuyên nghiệp, giao diện thân thiện di động, cấu trúc chuẩn SEO.",
    detail: [
      "WIFIM thiết kế website giúp doanh nghiệp giới thiệu thương hiệu, sản phẩm và tiếp nhận khách hàng trực tuyến. Giao diện được tối ưu cho điện thoại, tốc độ tải trang và trải nghiệm người dùng.",
      "Tùy nhu cầu, doanh nghiệp có thể chọn website cơ bản, website chuẩn SEO, website theo yêu cầu đặc thù hoặc gói VIP với nhiều tính năng mở rộng.",
    ],
    items: ["Website cơ bản", "Website chuẩn SEO", "Website theo yêu cầu đặc thù", "Gói website VIP"],
    benefits: [
      "Giao diện hiển thị tốt trên mọi thiết bị",
      "Cấu trúc kỹ thuật thân thiện với công cụ tìm kiếm",
      "Dễ dàng tự cập nhật nội dung",
      "Hỗ trợ kỹ thuật sau bàn giao",
    ],
    process: [
      { title: "Khảo sát", desc: "Tìm hiểu ngành nghề, mục tiêu và tính năng cần có." },
      { title: "Thiết kế giao diện", desc: "Đề xuất bố cục, màu sắc và duyệt mẫu cùng khách hàng." },
      { title: "Lập trình", desc: "Xây dựng chức năng, tối ưu tốc độ và hiển thị di động." },
      { title: "Kiểm thử", desc: "Kiểm tra trên nhiều thiết bị, trình duyệt trước khi bàn giao." },
      { title: "Bàn giao & hỗ trợ", desc: "Hướng dẫn quản trị và hỗ trợ kỹ thuật trong quá trình sử dụng." },
    ],
    faqs: [
      {
        q: "Thời gian hoàn thành một website là bao lâu?",
        a: "Tùy quy mô và tính năng. Website cơ bản thường nhanh hơn website theo yêu cầu đặc thù; thời gian cụ thể được thống nhất trong kế hoạch.",
      },
      {
        q: "Tôi có tự chỉnh sửa nội dung được không?",
        a: "Có. Website có trang quản trị và WIFIM sẽ hướng dẫn cách cập nhật bài viết, hình ảnh, sản phẩm.",
      },
      {
        q: "Website có hỗ trợ SEO không?",
        a: "Website được xây dựng với cấu trúc kỹ thuật thân thiện SEO. Thứ hạng tìm kiếm còn phụ thuộc vào nội dung và nhiều yếu tố khác theo thời gian.",
      },
    ],
  },
  {
    id: "seo-content",
    name: "SEO & Content marketing",
    icon: "zi-search",
    short: "Tối ưu website và xây dựng nội dung giá trị để tăng hiện diện tự nhiên.",
    detail: [
      "Dịch vụ SEO & Content marketing giúp website của doanh nghiệp xuất hiện tốt hơn trên kết quả tìm kiếm tự nhiên thông qua tối ưu kỹ thuật, nghiên cứu từ khóa và sản xuất nội dung hữu ích cho người đọc.",
      "WIFIM xây dựng kế hoạch nội dung theo tháng, theo dõi chỉ số truy cập và điều chỉnh liên tục. SEO là quá trình dài hạn, kết quả phụ thuộc vào mức độ cạnh tranh của từ khóa và nhiều yếu tố khác.",
    ],
    benefits: [
      "Tăng lượng truy cập tự nhiên bền vững",
      "Nội dung chuẩn hóa, nhất quán thương hiệu",
      "Kế hoạch nội dung rõ ràng theo tháng",
      "Báo cáo thứ hạng và truy cập định kỳ",
    ],
    process: [
      { title: "Audit website", desc: "Đánh giá kỹ thuật, nội dung và hiện trạng tìm kiếm." },
      { title: "Nghiên cứu từ khóa", desc: "Xác định nhóm từ khóa phù hợp với sản phẩm, dịch vụ." },
      { title: "Tối ưu Onpage", desc: "Chỉnh sửa cấu trúc, tốc độ, thẻ tiêu đề và nội dung hiện có." },
      { title: "Sản xuất nội dung", desc: "Viết bài theo kế hoạch tháng, hướng tới giá trị cho người đọc." },
      { title: "Đo lường", desc: "Theo dõi thứ hạng, truy cập và đề xuất điều chỉnh." },
    ],
    faqs: [
      {
        q: "Bao lâu thì thấy kết quả SEO?",
        a: "SEO là quá trình dài hạn, thường cần vài tháng để thấy thay đổi rõ rệt. WIFIM không cam kết thứ hạng cố định vì kết quả phụ thuộc nhiều yếu tố.",
      },
      {
        q: "Nội dung có được duyệt trước khi đăng không?",
        a: "Có. Kế hoạch và bài viết được gửi khách hàng duyệt trước khi xuất bản.",
      },
    ],
  },
  {
    id: "cham-soc-fanpage",
    name: "Chăm sóc fanpage / Social marketing",
    icon: "zi-group",
    short: "Xây dựng nội dung, hình ảnh và vận hành kênh mạng xã hội của doanh nghiệp.",
    detail: [
      "WIFIM hỗ trợ doanh nghiệp vận hành các kênh mạng xã hội: lên lịch nội dung, thiết kế hình ảnh, đăng bài định kỳ và tương tác với cộng đồng người theo dõi.",
      "Nội dung được xây dựng theo định hướng thương hiệu, giúp kênh hoạt động đều đặn, chuyên nghiệp và gần gũi với khách hàng.",
    ],
    benefits: [
      "Kênh hoạt động đều đặn, chuyên nghiệp",
      "Hình ảnh và giọng văn nhất quán thương hiệu",
      "Tiết kiệm thời gian vận hành cho doanh nghiệp",
      "Báo cáo tương tác hằng tháng",
    ],
    process: [
      { title: "Định hướng", desc: "Xác định chân dung khách hàng, giọng văn và chủ đề chính." },
      { title: "Lịch nội dung", desc: "Lên kế hoạch bài đăng theo tháng để khách hàng duyệt." },
      { title: "Sản xuất", desc: "Viết bài, thiết kế hình ảnh theo nhận diện thương hiệu." },
      { title: "Vận hành", desc: "Đăng bài đúng lịch và hỗ trợ tương tác với người theo dõi." },
      { title: "Báo cáo", desc: "Tổng hợp số liệu tương tác và đề xuất cải tiến." },
    ],
    faqs: [
      {
        q: "Mỗi tháng đăng bao nhiêu bài?",
        a: "Số lượng bài được thống nhất theo nhu cầu và gói dịch vụ trong kế hoạch tháng.",
      },
      {
        q: "WIFIM có trả lời tin nhắn khách hàng thay doanh nghiệp không?",
        a: "Có thể hỗ trợ theo kịch bản được doanh nghiệp duyệt trước; phạm vi cụ thể được thống nhất khi ký hợp đồng.",
      },
    ],
  },
  {
    id: "pr-bao-dien-tu",
    name: "PR báo điện tử",
    icon: "zi-post",
    short: "Xây dựng nội dung và kết nối đăng bài PR trên các trang báo điện tử.",
    detail: [
      "Dịch vụ PR báo điện tử giúp doanh nghiệp truyền tải thông tin về thương hiệu, sản phẩm, sự kiện đến công chúng qua các trang báo điện tử uy tín.",
      "WIFIM hỗ trợ từ khâu lên ý tưởng, viết bài đến kết nối đăng tải. Việc xuất bản tuân theo quy định biên tập của từng cơ quan báo chí.",
    ],
    benefits: [
      "Nâng cao độ tin cậy cho thương hiệu",
      "Nội dung được biên tập chuyên nghiệp",
      "Lựa chọn đầu báo phù hợp ngành hàng",
      "Hỗ trợ trọn gói từ ý tưởng đến đăng tải",
    ],
    process: [
      { title: "Tiếp nhận thông tin", desc: "Tìm hiểu thông điệp, sự kiện hoặc sản phẩm cần truyền thông." },
      { title: "Đề xuất đầu báo", desc: "Gợi ý trang báo phù hợp với mục tiêu và đối tượng." },
      { title: "Viết bài", desc: "Biên soạn nội dung và gửi khách hàng duyệt." },
      { title: "Đăng tải", desc: "Gửi bài tới tòa soạn và theo dõi tiến độ xuất bản." },
    ],
    faqs: [
      {
        q: "Bài viết có được chỉnh sửa trước khi đăng không?",
        a: "Có. Khách hàng duyệt nội dung trước; tòa soạn có thể biên tập thêm theo quy định của báo.",
      },
      {
        q: "Bao lâu thì bài được đăng?",
        a: "Thời gian phụ thuộc lịch biên tập của từng đầu báo và sẽ được thông báo khi đặt bài.",
      },
    ],
  },
  {
    id: "video-marketing",
    name: "Video marketing",
    icon: "zi-video",
    short: "Lên kịch bản, quay dựng video giới thiệu, quảng cáo và nội dung mạng xã hội.",
    detail: [
      "WIFIM sản xuất video phục vụ mục tiêu marketing: video giới thiệu doanh nghiệp, video sản phẩm, video quảng cáo và video ngắn cho mạng xã hội.",
      "Quy trình bao gồm lên ý tưởng, viết kịch bản, quay và hậu kỳ, giúp video phù hợp với từng nền tảng hiển thị.",
    ],
    benefits: [
      "Truyền tải thông điệp sinh động, dễ nhớ",
      "Kịch bản bám sát mục tiêu truyền thông",
      "Định dạng phù hợp từng nền tảng",
      "Có vòng chỉnh sửa theo góp ý",
    ],
    process: [
      { title: "Ý tưởng", desc: "Trao đổi mục tiêu, thông điệp và phong cách video." },
      { title: "Kịch bản", desc: "Viết kịch bản chi tiết để khách hàng duyệt." },
      { title: "Sản xuất", desc: "Quay phim theo kịch bản đã thống nhất." },
      { title: "Hậu kỳ", desc: "Dựng, chỉnh màu, âm thanh và chỉnh sửa theo góp ý." },
      { title: "Bàn giao", desc: "Xuất file theo định dạng phù hợp từng kênh." },
    ],
    faqs: [
      {
        q: "Một video thường mất bao lâu để hoàn thành?",
        a: "Tùy độ dài và độ phức tạp của kịch bản; thời gian cụ thể được thống nhất khi lên kế hoạch.",
      },
      {
        q: "Tôi có được chỉnh sửa video sau khi dựng không?",
        a: "Có. Mỗi video có số vòng chỉnh sửa được thống nhất trong thỏa thuận dịch vụ.",
      },
    ],
  },
  {
    id: "thiet-ke-mobile-app",
    name: "Thiết kế mobile app",
    icon: "zi-more-grid",
    short: "Thiết kế và phát triển ứng dụng di động theo nhu cầu riêng của doanh nghiệp.",
    detail: [
      "WIFIM thiết kế và phát triển ứng dụng di động giúp doanh nghiệp phục vụ khách hàng, quản lý nội bộ hoặc mở rộng kênh bán hàng.",
      "Dự án được triển khai theo quy trình Agile – Scrum với các bản thử nghiệm định kỳ, giúp doanh nghiệp theo dõi và góp ý trong suốt quá trình phát triển.",
    ],
    benefits: [
      "Giải pháp xây dựng theo nhu cầu thực tế",
      "Giao diện thân thiện, dễ sử dụng",
      "Theo dõi tiến độ qua từng Sprint",
      "Hỗ trợ bảo trì sau khi phát hành",
    ],
    process: [
      { title: "Phân tích yêu cầu", desc: "Xác định người dùng, tính năng và phạm vi dự án." },
      { title: "Thiết kế UI/UX", desc: "Dựng luồng màn hình và giao diện để khách hàng duyệt." },
      { title: "Phát triển", desc: "Lập trình theo từng Sprint, demo kết quả định kỳ." },
      { title: "Kiểm thử", desc: "Kiểm tra chức năng, hiệu năng trên nhiều thiết bị." },
      { title: "Phát hành & bảo trì", desc: "Hỗ trợ đưa ứng dụng lên kho và bảo trì sau phát hành." },
    ],
    faqs: [
      {
        q: "Ứng dụng có chạy trên cả iOS và Android không?",
        a: "Có thể. Nền tảng và công nghệ phù hợp sẽ được tư vấn dựa trên nhu cầu và ngân sách của doanh nghiệp.",
      },
      {
        q: "Tôi có theo dõi được tiến độ phát triển không?",
        a: "Có. Sau mỗi Sprint, WIFIM gửi bản demo và cập nhật tiến độ để khách hàng góp ý.",
      },
    ],
  },
];

export const getService = (id?: string) => services.find((s) => s.id === id);
