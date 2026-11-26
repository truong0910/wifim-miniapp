import { openChat, openPhone } from "zmp-sdk/apis";
import { Button, Icon, useSnackbar } from "zmp-ui";
import { OA_ID } from "../config";
import { company } from "../data/company";

export function useContact() {
  const { openSnackbar } = useSnackbar();
  const fail = (text: string) => openSnackbar({ text, type: "error" });

  return {
    canChat: OA_ID !== "",
    chat: async () => {
      try {
        await openChat({ type: "oa", id: OA_ID, message: "Xin chào WIFIM, tôi cần tư vấn dịch vụ." });
      } catch {
        fail("Không mở được cửa sổ chat. Vui lòng thử lại.");
      }
    },
    call: async (phoneNumber = company.hotline, display = company.hotlineDisplay) => {
      try {
        await openPhone({ phoneNumber });
      } catch {
        fail(`Không thể mở cuộc gọi. Vui lòng gọi ${display}.`);
      }
    },
  };
}

export function ContactButtons({
  chatLabel = "Chat với WIFIM trên Zalo",
  showPhone = false,
}: {
  chatLabel?: string;
  showPhone?: boolean;
}) {
  const { canChat, chat, call } = useContact();
  return (
    <div className="stack">
      {canChat && (
        <Button fullWidth prefixIcon={<Icon icon="zi-chat" />} onClick={chat}>
          {chatLabel}
        </Button>
      )}
      <Button fullWidth variant={canChat ? "secondary" : "primary"} prefixIcon={<Icon icon="zi-call" />} onClick={() => call()}>
        Gọi hotline {company.hotlineDisplay}
      </Button>
      {showPhone && (
        <Button
          fullWidth
          variant="secondary"
          prefixIcon={<Icon icon="zi-call" />}
          onClick={() => call(company.phone, company.phoneDisplay)}
        >
          Gọi {company.phoneDisplay}
        </Button>
      )}
    </div>
  );
}
