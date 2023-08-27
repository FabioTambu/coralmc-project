"use client"
import {CustomSidebar} from "@/components/sidebar/sidebar";
import './page.scss'
import {Breadcrumb} from "@/components/breadcrumb/breadcrumb";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";

export default function Home() {

    const [loading, setLoading] = useState<boolean>(true);

    const { push, replace } = useRouter();
    const pathname = usePathname();

    const routes:string[] = [
        "/control-panel",
        "/control-panel/dashboard",
        "/variables",
    ];

    useEffect(() => {
        if(pathname != "/") {
            if (routes.includes(pathname)) {
                push(pathname);
            } else {
                replace("/");
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }, []);

    return (
      <>
          <div className="container">
              <div className="sidebar">
                  <CustomSidebar/>
              </div>
              {
                  !loading &&
                  <div className="content">
                      <Breadcrumb />
                      <h1> HOMEPAGE </h1>
                      <h5>Usa la sidebar per navigare tra le pagine</h5>
                  </div>
              }
          </div>
      </>
  )
}
