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
                      <CustomRectangle titleValue={"Staff Users"} contentValue={"14"} subtitle={false} altImg={"People"} img={"people"}/>
                      <CustomRectangle titleValue={"Total in Sales"} contentValue={"200.000 EUR"} subtitle={true} subtitleValue={"All Time"} altImg={"Money"} img={"money"}/>
                      <CustomRectangle titleValue={"Total in Sales"} contentValue={"200.000 EUR"} subtitle={true} subtitleValue={"Current Month"} altImg={"Calendar"} img={"calendar"}/>
                      <CustomRectangle titleValue={"Average Payment"} contentValue={"13 EUR"} subtitle={true} subtitleValue={"Current Month"} altImg={"Arrow"} img={"arrow-back"}/>
                  </div>

                  <CustomTable/>

                  <div className="more-info">
                      <div className="title-rectangle">
                          <Image src={"/icons/people.png"} alt={"People"} width={30} height={30}/>
                          <h4>Staff Users</h4>
                      </div>
                      <div className="content-rectangle">
                          <h2>14</h2>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
