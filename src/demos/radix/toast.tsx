"use client";

import * as React from "react";
import Button from "@/ui/html/button";
import Toast from "@/ui/radix/toast";

export function ToastDemo() {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection="right">
      <Button.Solid
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
          }, 100);
        }}
      >
        Add to calendar
      </Button.Solid>

      <Toast.Root open={open} onOpenChange={setOpen}>
        <Toast.Title>Scheduled: Catch up</Toast.Title>
        <Toast.Description asChild>
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </Toast.Description>
        <Toast.Action asChild altText="Goto schedule to undo">
          <Button.Solid>Undo</Button.Solid>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport />
    </Toast.Provider>
  );
}

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}
