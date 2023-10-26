"use client";

import Select from "@/ui/radix/select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

export function SelectDemo() {
  return (
    <Select.Root>
      <Select.Trigger aria-label="Food">
        <Select.Value placeholder="Select a fruit…" />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="blueberry">Blueberry</Select.Item>
              <Select.Item value="grapes">Grapes</Select.Item>
              <Select.Item value="pineapple">Pineapple</Select.Item>
            </Select.Group>

            <Select.Separator />

            <Select.Group>
              <Select.Label>Vegetables</Select.Label>
              <Select.Item value="aubergine">Aubergine</Select.Item>
              <Select.Item value="broccoli">Broccoli</Select.Item>
              <Select.Item value="carrot" disabled>
                Carrot
              </Select.Item>
              <Select.Item value="courgette">Courgette</Select.Item>
              <Select.Item value="leek">Leek</Select.Item>
            </Select.Group>

            <Select.Separator />

            <Select.Group>
              <Select.Label>Meat</Select.Label>
              <Select.Item value="beef">Beef</Select.Item>
              <Select.Item value="chicken">Chicken</Select.Item>
              <Select.Item value="lamb">Lamb</Select.Item>
              <Select.Item value="pork">Pork</Select.Item>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
