import '../../../app/globals.css';

export default function MovieLayout({ children }) {
  return (
    <div className={"bg-[#1D0000] text-white"}>
      <div className="h-full mt-5">
        <div>{children}</div>
      </div>
    </div>
  );
}
