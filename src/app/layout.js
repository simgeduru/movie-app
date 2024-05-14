//import "./globals.css";
import Header from "../components/Header";


export const metadata = {
  title: "Movie App",
  description: "Generated by Simge DURU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={" font-sedan  bg-[#03071E] text-bordo"}>
        <div className="h-full mt-5">
          <Header></Header>
          <div className="">
            <div className="text-center">top rated films here</div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
