import '../../../app/globals.css';

export default function MovieLayout({ children }) {
  return (
    <div className={"bg-[#03071E] text-white"}>
      <div className="h-full mt-5">
        <div>{children}</div>
      </div>
    </div>
  );
}
