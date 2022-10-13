import { Button } from "ui";
import { UserName } from "shared-types";

import type { NextPage } from "next";
import { trpc } from "../util/trpc";

const Home: NextPage = () => {
  const hello = trpc.hello.useQuery({
    name: UserName.parse("Naoki"),
    message: "TEST",
  });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{hello.data.message}</h1>
      <Button />
    </div>
  );
};

export default Home;
