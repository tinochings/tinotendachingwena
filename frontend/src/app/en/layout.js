"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css'
import NavigationBar, {Footer} from "@/utilities/components/navigation/NavigationBar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NavigationBar/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
