'use client'

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ToastButton() {
  return (
    <Button
      onClick={() => toast("Hello from Sonner!") }
      variant="outline"
    >
      Show Toast
    </Button>
  );
}