export const MobileBackdrop = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm max-sm:block hidden"
      onClick={onClose}
    />
  );
};