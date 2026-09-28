export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#f4f4f6]/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-black/10 border-t-[#EE3028] rounded-full animate-spin"></div>
        <div className="text-xs uppercase tracking-widest text-[#0f1011] font-semibold">
          Loading Uplift Bangladesh...
        </div>
      </div>
    </div>
  );
}
