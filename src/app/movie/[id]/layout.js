import Header from "../../../components/Header";

export default function MovieLayout({ children }) {
  return (
    <body className={" font-sedan  bg-[#03071E] text-bordo"}>
      <div className="h-full mt-5">
        <Header></Header>

        <div className="">
          <div>{children}</div>
        </div>
      </div>
    </body>
  );
}
