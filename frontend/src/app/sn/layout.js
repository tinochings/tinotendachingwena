"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../globals.css";
import NavigationBar, {Footer} from "@/utilities/components/navigation/NavigationBar";


export default function Layout({ children }) {
  return (
    <html lang="sn">
      <body>
      <NavigationBar language='sn'/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}