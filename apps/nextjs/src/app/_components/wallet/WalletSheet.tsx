//import { shortenHex } from "@/utils/utils";
import { Suspense, useEffect, useState } from "react";
import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { Account } from "@/app/bridge/Account";
import { useUIContext } from "@/app/providers/UIProvider";
import Bridge from "@/icons/bridge.svg";
import {
  useDisconnect,
  useAccount as useL2Account,
  useConnect as useL2Connect,
  useNetwork,
} from "@starknet-react/core";

import { ScrollArea } from "../ui/scroll-area";
//import { AuthShowcase } from "../auth-showcase";
import { Sheet, SheetContent } from "../ui/sheet";
import EthereumAccount from "./EthereumAccount";
import { EthereumLoginButton } from "./EthereumLoginButton";
import StarkAccount from "./StarkAccount";
import { StarknetLoginButton } from "./StarknetLoginButton";
import { StarknetLoginModal } from "./StarknetLoginModal";

/*const tabs = [
  {
    name: "Mainnet",
    content: <Account isL1={true} />,
  },

  {
    name: "Starknet",
    content: <Account isL1={false} />,
  },
];*/
export const WalletSheet = () => {
  const { address: l2Address, isConnected: isL2Connected } = useL2Account();
  const { chain } = useNetwork();
  const { disconnect } = useDisconnect();
  const [isWrongNetwork, setIsWrongNetwork] = useState(false);

  const onDisconnect = () => {
    setIsWrongNetwork(false);
    disconnect();
  };

  const network =
    process.env.NEXT_PUBLIC_IS_TESTNET === "true" ? "goerli" : "mainnet";

  const NETWORK_ID = {
    mainnet: "0x534e5f4d41494e",
    goerli: "0x534e5f474f45524c49",
  };

  useEffect(() => {
    if (isL2Connected) {
      if (
        (chain?.id.toString() === NETWORK_ID.goerli && network === "mainnet") ||
        (chain?.id.toString() === NETWORK_ID.mainnet && network === "goerli")
      ) {
        setIsWrongNetwork(true);
      } else {
        setIsWrongNetwork(false);
      }
    } else {
      setIsWrongNetwork(false);
    }
  }, [chain?.id, l2Address, isL2Connected]);

  const { isAccountOpen, toggleAccount } = useUIContext();
  const [open, setOpen] = useState(false);

  const tabs = [
    {
      name: "Mainnet",
      content: (
        <Suspense>
          <Account isL1={true} />
        </Suspense>
      ),
    },

    {
      name: "Starknet",
      content: (
        <Suspense>
          <Account isL1={false} />
        </Suspense>
      ),
    },
  ];
  return (
    <>
      <div className="my-4 flex w-full flex-col space-y-4 px-1">
        <EthereumLoginButton
          variant={"default"}
          textClass="group-hover:block"
          openAccount
          buttonClass="w-full"
        />
        <StarknetLoginButton
          textClass="group-hover:block"
          variant={"default"}
          buttonClass="w-full"
          openAccount
        />
        <StarknetLoginModal />
      </div>
      <Sheet open={isAccountOpen} onOpenChange={toggleAccount}>
        <SheetContent position={"right"} size={"lg"}>
          <div className="mt-8 flex h-auto w-full flex-col items-start gap-y-6">
            <EthereumAccount />
            <StarkAccount />
            <div className="mt-4">
              <h6>Actions</h6>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    //disabled={!realms?.length}
                    className="self-center"
                    size={"lg"}
                    variant={"outline"}
                  >
                    <Bridge className="mr-2 w-[25px]" />
                    Bridge Transactions
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-screen flex h-full max-h-screen w-full flex-col sm:max-h-[760px] sm:w-[650px]">
                  <DialogHeader>
                    <h6 className="my-0 py-0">Bridge Transactions</h6>
                  </DialogHeader>
                  <Tabs
                    defaultValue={tabs[0]?.name}
                    className="flex max-h-full flex-col"
                  >
                    <TabsList className="justify-center pb-2">
                      {tabs.map((tab, index) => (
                        <TabsTrigger value={tab.name} key={index}>
                          {tab.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {tabs.map((tab, index) => (
                      <TabsContent value={tab.name} key={index}>
                        <ScrollArea className="h-[500px] max-h-screen w-full">
                          {tab.content}
                        </ScrollArea>
                      </TabsContent>
                    ))}
                  </Tabs>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {isWrongNetwork && (
        <Dialog open={isWrongNetwork}>
          <DialogContent className="w-full">
            <DialogHeader>
              <DialogTitle>Wrong Network</DialogTitle>
            </DialogHeader>
            <span>
              Realms.World currently supports{" "}
              <span className="capitalize">{network}</span>, please change the
              connected network in your Starknet wallet, or:
            </span>
            <Button
              variant={"default"}
              size={"lg"}
              className="mt-4"
              onClick={() => onDisconnect()}
            >
              Disconnect
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
