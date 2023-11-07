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

export function DataTableTab() {
    return (
        <div className="w-full">
          <div className="flex bg-white border-b">
            <Tabs className="flex-1 ">
              <TabsList className="flex justify-start bg-white">
                <TabsTrigger value="netWorth">Net Worth</TabsTrigger>
                <TabsTrigger value="cashFlow">Cash Flow</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
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