import { AnchorDemo } from "@/demos/radix/anchor";
import { ButtonDemo } from "@/demos/radix/button";
import { AccordionDemo } from "@/demos/radix/accordion";
import { AlertDialogDemo } from "@/demos/radix/alert-dialog";
import { AspectRatioDemo } from "@/demos/radix/aspect-ratio";
import { AvatarDemo } from "@/demos/radix/avatar";
import { BadgeDemo } from "@/demos/radix/badge";
import { CheckboxDemo } from "@/demos/radix/checkbox";
import { CodeDemo } from "@/demos/radix/code";
import { CollapsibleDemo } from "@/demos/radix/collapsible";
import { ContextMenuDemo } from "@/demos/radix/context-menu";
import { DialogDemo } from "@/demos/radix/dialog";
import { DropdownMenuDemo } from "@/demos/radix/dropdown-menu";
import { FormDemo } from "@/demos/radix/form";
import { HoverCardDemo } from "@/demos/radix/hover-card";
import { InputDemo } from "@/demos/radix/input";
import { KbdDemo } from "@/demos/radix/kbd";
import { LabelDemo } from "@/demos/radix/label";
import { MenubarDemo } from "@/demos/radix/menubar";
import { NavigationMenuDemo } from "@/demos/radix/navigation-menu";
import { PopoverDemo } from "@/demos/radix/popover";
import { ProgressDemo } from "@/demos/radix/progress";
import { RadioGroupDemo } from "@/demos/radix/radio-group";
import { ScrollAreaDemo } from "@/demos/radix/scroll-area";
import { SelectDemo } from "@/demos/radix/select";
import { SeparatorDemo } from "@/demos/radix/separator";
import { SliderDemo } from "@/demos/radix/slider";
import { SwitchDemo } from "@/demos/radix/switch";
import { TableDemo } from "@/demos/radix/table";
import { TabsDemo } from "@/demos/radix/tabs";
import { TextareaDemo } from "@/demos/radix/textarea";
import { CommandDemo } from "@/demos/cmdk";
import { ToastDemo } from "@/demos/radix/toast";
import { ToggleDemo } from "@/demos/radix/toggle";
import { ToggleGroupDemo } from "@/demos/radix/toggle-group";
import { ToolbarDemo } from "@/demos/radix/toolbar";
import { TooltipDemo } from "@/demos/radix/tooltip";

export default function Page() {
  return (
    <div className="mx-auto my-12 max-w-screen-lg space-y-8">
      <h1 className="text-3xl font-bold">Paper Design System</h1>
      <AnchorDemo />
      <ButtonDemo />
      <AccordionDemo />
      <AlertDialogDemo />
      <AspectRatioDemo />
      <AvatarDemo />
      <BadgeDemo />
      <CheckboxDemo />
      <CodeDemo />
      <CollapsibleDemo />
      <ContextMenuDemo />
      <DialogDemo />
      <div>
        <DropdownMenuDemo />
      </div>
      <FormDemo />
      <HoverCardDemo />
      <InputDemo />
      <KbdDemo />
      <LabelDemo />
      <MenubarDemo />
      <NavigationMenuDemo />
      <PopoverDemo />
      <ProgressDemo />
      <RadioGroupDemo />
      <ScrollAreaDemo />
      <SelectDemo />
      <SeparatorDemo />
      <SliderDemo />
      <SwitchDemo />
      <TableDemo />
      <TabsDemo />
      <TextareaDemo />
      <CommandDemo />
      <ToastDemo />
      <ToggleDemo />
      <ToggleGroupDemo />
      <ToolbarDemo />
      <TooltipDemo />
    </div>
  );
}
