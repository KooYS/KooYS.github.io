import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ImagePopupProps {
  src: string;
  alt: string;
  className?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ImagePopup = ({
  src,
  alt,
  className,
  open,
  setOpen,
}: ImagePopupProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle></DialogTitle>
      <DialogContent className="py-10 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl max-h-[90vh]">
        <img src={src} alt={alt} className={cn("max-h-[80vh]", className)} />
      </DialogContent>
    </Dialog>
  );
};

export default ImagePopup;
