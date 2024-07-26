import InfoBar from "@/components/infobar";
import BillingSetting from "@/components/settings/billing-settings";
import ChangePassword from "@/components/settings/change-password";
import DarkModeToggle from "@/components/settings/dark-mode";
import { client } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";

type Props = {};
const page = (props: Props) => {
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <BillingSetting />
        <DarkModeToggle />
        <ChangePassword />
      </div>
    </>
  );
};
export default page;

export const onGetAllAccountDomains = async () => {
  const user = await currentUser();
  if (!user) return;
  try {
    const domains = await client.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        id: true,
        domains: {
          select: {
            name: true,
            icon: true,
            id: true,
            customer: {
              select: {
                chatRoom: {
                  select: {
                    id: true,
                    live: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return { ...domains };
  } catch (error) {
    console.log(error);
  }
};
