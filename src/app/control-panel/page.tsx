"use client"
import {CustomSidebar} from "@/components/sidebar/sidebar";
import './page.scss'
import {useRouter} from "next/navigation";
import {Breadcrumb} from "@/components/breadcrumb/breadcrumb";

export default function Home() {

    const { push } = useRouter()

    return (
      <>
          <div className="container">
              <div className="sidebar">
                  <CustomSidebar/>
              </div>
              <div className="content">
                  <Breadcrumb />
                  <h1> CONTROL PANEL </h1>
                  <button onClick={() => push("/control-panel/dashboard")}>DASHBOARD</button>
              </div>
          </div>
      </>
  )
}
