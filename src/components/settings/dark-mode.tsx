"use client";

import { useThemeMode } from "@/hooks/settings/use-settings";

type Props = {};
const DarkModeToggle = (props: Props) => {
  const { setTheme, theme } = useThemeMode();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1"></div>
    </div>
  );
};
export default DarkModeToggle;
