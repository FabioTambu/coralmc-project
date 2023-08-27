"use client"
import {CustomSidebar} from "@/components/sidebar/sidebar";
import './page.scss'
import {Breadcrumb} from "@/components/breadcrumb/breadcrumb";

export default function Home() {

    return (
      <>
          <div className="container">
              <div className="sidebar">
                  <CustomSidebar/>
              </div>
              <div className="content">
                  <Breadcrumb />
                  <h1> VARIABLES </h1>
              </div>
          </div>
      </>
  )
}