import { Button } from "~/@/components/ui/button"
import { Input } from "~/@/components/ui/input"
import { Label } from "~/@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/@/components/ui/tabs"
import { DialogAddAccount } from "../add-button/add-account";

export function ScenarioTab() {
    return (
        <div className="w-full">
          <div className=" bg-white border-b">
            <Tabs className="">
              <TabsList className="justify-start bg-white">
                <TabsTrigger value="scenario">Base Scenario</TabsTrigger>
                <TabsTrigger value="cashFlow">Scenario 1</TabsTrigger>
              </TabsList>
              <TabsContent value="netWorth">
              </TabsContent>
              <TabsContent value="cashFlow">
              </TabsContent>
              <TabsContent value="settings">
              </TabsContent>
            </Tabs>
            <DialogAddAccount/>
          </div>
        </div>
      );
    }