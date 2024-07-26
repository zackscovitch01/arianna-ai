import { onLoginUser } from "@/actions/auth";
import Sidebar from "@/components/sidebar";
import { ChatProvider } from "@/context/use-chat-context";

type Props = {
  children: React.ReactNode;
};
const OwnerLayout = async ({ children }: Props) => {
  const authenticated = await onLoginUser();
  if (!authenticated) return null;
  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        <Sidebar domains={authenticated.domain} />
      </div>
    </ChatProvider>
  );
};
export default OwnerLayout;
