import { Separator } from "@/components/ui/separator";
import { onGetAllAccountDomains } from "../settings/page";
import NavBar from "@/components/navbar";
import InfoBar from "@/components/infobar";
import ConversationMenu from "@/components/conversations";

type Props = {};
const ConversationPage = async (props: Props) => {
  const domains = await onGetAllAccountDomains();
  return (
    <div className="w-full h-full flex">
      <ConversationMenu domains={domains?.domains} />
      <Separator orientation="vertical" />
      <div className="px-5">
        <InfoBar />
      </div>
      {/* <Messenger /> */}
    </div>
  );
};
export default ConversationPage;
