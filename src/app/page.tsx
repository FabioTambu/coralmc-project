"use client"
import {CustomSidebar} from "@/components/sidebar/sidebar";
import './page.scss'
import {Breadcrumb} from "@/components/breadcrumb/breadcrumb";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";

export default function Home() {

    const [loading, setLoading] = useState<boolean>(true);

    const { push } = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if(pathname != "/") {
            push(pathname);
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
                  </div>
              }
          </div>
      </>
  )
}
