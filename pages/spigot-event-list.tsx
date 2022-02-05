import { NextPage } from "next";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";

const Destination = "https://spigot-event-list.s7a.dev";

const SpigotEventList: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace(Destination);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
};

SpigotEventList.getInitialProps = async ({ res }) => {
  if (res && typeof window === "undefined") {
    res.writeHead(301, { Location: Destination });
    res.end();
    return {};
  }
  await Router.push(Destination);
  return {};
};

export default SpigotEventList;
