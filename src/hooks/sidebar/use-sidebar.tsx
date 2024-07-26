"use client";
import {
  onGetConversationMode,
  onToggleRealtime,
} from "@/actions/conversation";
import { useToast } from "@/components/ui/use-toast";
import { useChatContext } from "@/context/use-chat-context";
import { useClerk } from "@clerk/nextjs";
import { set } from "date-fns";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
const useSideBar = () => {
  const [expand, setExpand] = useState<boolean | undefined>(undefined);
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const [realTime, setRealTime] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { chatRoom } = useChatContext();
  const onActivateRealTime = async (e: any) => {
    try {
      const realTime = await onToggleRealtime(
        chatRoom!,
        e.target.ariaChecked == "true" ? false : true
      );
      if (realTime) {
        setRealTime(realTime.chatRoom.live);
        toast({
          title: "A human agent entered the chatroom",
          description: realTime.message,
        });
      }
    } catch (error) {}
  };

  const onGetCurrentMode = async () => {
    setLoading(true);
    const mode = await onGetConversationMode(chatRoom!);
    if (mode) {
      setRealTime(mode.live);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatRoom) {
      onGetCurrentMode();
    }
  }, [chatRoom]);
  const page = pathname.split("/").pop();
  const { signOut } = useClerk();

  const onSignOut = () => signOut(() => router.push("/"));
  const onExpand = () => setExpand((prev) => !prev);

  return {
    expand,
    onExpand,
    page,
    onSignOut,
    onActivateRealTime,
    realTime,
    loading,
    chatRoom,
  };
};
export default useSideBar;
