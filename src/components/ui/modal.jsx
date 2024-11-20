import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { Drawer } from "vaul"
import { Dialog, DialogContent, DialogTitle } from "./dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export const Modal = ({
  children,
  className,
  desktopOnly,
  onClose,
  preventDefaultClose,
  setShowModal,
  showModal,
}) => {
  const closeModal = ({ dragged } = {}) => {
    if (preventDefaultClose && !dragged) {
      return
    }

    onClose && onClose()

    if (setShowModal) {
      setShowModal(false)
    }
  }

  const { isMobile } = useMediaQuery()

  if (isMobile && !desktopOnly) {
    return (
      <Drawer.Root
        open={setShowModal ? showModal : true}
        onOpenChange={(open) => {
          if (!open) {
            closeModal({ dragged: true })
          }
        }}
      >
        <Drawer.Overlay className="fixed inset-0 z-40 bg-gray-100 bg-opacity-10 backdrop-blur" />
        <Drawer.Portal>
          <Drawer.Content
            className={cn(
              "fixed !max-w-none bottom-0 left-0 right-0 z-50 mt-24 rounded-t-[10px] border-t border-gray-200 bg-white",
              className
            )}
          >
            <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit">
              <div className="my-3 h-1 w-12 rounded-full bg-gray-300" />
            </div>

            {children}
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    )
  }

  return (
    <Dialog
      open={setShowModal ? showModal : true}
      onOpenChange={(open) => {
        if (!open) {
          closeModal({ dragged: true })
        }
      }}
    >
      <DialogContent>
        <VisuallyHidden asChild>
          <DialogTitle>Dialog</DialogTitle>
        </VisuallyHidden>
        {children}
      </DialogContent>
    </Dialog>
  )
}