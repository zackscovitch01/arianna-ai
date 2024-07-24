import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};
const Layout = async ({ children }: Props) => {
  const user = await currentUser();
  if (user) redirect("/");
  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
        <Image
          src="/images/logo.png"
          alt="LOGO"
          sizes="100vw"
          style={{ width: "20%", height: "auto" }}
          width={0}
          height={0}
        />
        {children}
      </div>
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
          Hi, I'm your AI powered sales assistant, Arianna!
        </h2>
        <p className="text-iridium md:text-sm mb-10">
          Arianna is capable of capturing lead information without a form saving
          you time and increasing your conversion rate.
        </p>
        <Image
          src="/images/app-ui.png"
          alt="app image"
          loading="lazy"
          sizes="30"
          className="absolute shrink-0 !w-[1600px] top-48"
          width={0}
          height={0}
        ></Image>
      </div>
    </div>
  );
};
export default Layout;
