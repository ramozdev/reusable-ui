"use client";

import Button from "@/ui/html/button";
import Card from "@/ui/html/card";
import Input from "@/ui/html/input";
import Text from "@/ui/html/text";
import Separator from "@/ui/radix/separator";
import Avatar from "@/ui/radix/avatar";
import Select from "@/ui/html/select";
import Cards from "./components/card";

const values = [
  {
    name: `Liam Johnson`,
    email: `l@example.com`,
    avatar: `LJ`,
  },
  {
    name: `Eva Rodriguez`,
    email: `e@example.com`,
    avatar: `ER`,
  },
  {
    name: `Noah Smith`,
    email: `n@example.com`,
    avatar: `NS`,
  },
];

export default function Page() {
  return (
    <div className="mx-auto mb-10 mt-14 grid w-full justify-center">
      <Card color="white-black">
        <div>
          <Text.H4>Share this document</Text.H4>
          <Text.P className="[&:not(:first-child)]:mt-0">
            Anyone with the link can view this document.
          </Text.P>
        </div>
        <div className="flex space-x-2">
          <Input value="http://example.com/link/to/document" readOnly />
          <Button.Subtle className="shrink-0" color="green">
            Copy Link
          </Button.Subtle>
        </div>
        <Separator.Root color="neutral" />
        <div className="space-y-4">
          <Text.P>People with access</Text.P>

          <div className="grid gap-6">
            {values.map((value) => (
              <div
                className="flex items-center justify-between space-x-4"
                key={value.name}
              >
                <div className="flex items-center space-x-4">
                  <Avatar.Root>
                    <Avatar.Fallback color="indigo">
                      {value.avatar}
                    </Avatar.Fallback>
                  </Avatar.Root>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {value.name}{" "}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {value.email}
                    </p>
                  </div>
                </div>
                <Select>
                  <option value="Can edit">Can edit</option>
                  <option value="Can view">Can view</option>
                </Select>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <Cards />
    </div>
  );
}
