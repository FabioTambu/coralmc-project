"use client"
import {CustomRectangle} from "@/components/rectangle/rectangle";
import {CustomSidebar} from "@/components/sidebar/sidebar";
import Image from "next/image";
import './page.scss'
import {CustomTable} from "@/components/custom-table/custom-table";
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

                  <div className="custom-rectangle">
                      <CustomRectangle h4={"Staff Users"} h1={"14"} p={false} altImg={"People"} img={"people"}/>
                      <CustomRectangle h4={"Total in Sales"} h1={"200.000 EUR"} p={true} pText={"All Time"} altImg={"Money"} img={"money"}/>
                      <CustomRectangle h4={"Total in Sales"} h1={"200.000 EUR"} p={true} pText={"Current Month"} altImg={"Calendar"} img={"calendar"}/>
                      <CustomRectangle h4={"Average Payment"} h1={"13 EUR"} p={true} pText={"Current Month"} altImg={"Arrow"} img={"arrow-back"}/>
                  </div>

                  <CustomTable/>

                  <div className="bigRectangle">
                      <div className="first">
                          <Image src={"/people.png"} alt={"People"} width={30} height={30}/>
                          <h4>Staff Users</h4>
                      </div>
                      <div className="second">
                          <h2>14</h2>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
