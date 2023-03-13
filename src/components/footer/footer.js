import React from "react";

import { colors } from "../../utils/const";
import { styles } from "./footer_style";
import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

console.log(styles);

export default function Main_Navbar() {
  return (
    <div className="contact-footer-list">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="box-image mb-4">
              <img
                style={{ maxWidth: "200px" }}
                className="w-100"
                src="/images/logo contact.png"
                alt="كوناكت لوجو"
              />
            </div>
          </div>
          <div className="col-lg-10 col-md-8 col-sm-8">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6">
                <h6
                  style={{ color: colors.blue }}
                  className="my-3 font-weight-bold"
                >
                  خدمات تمويلية
                </h6>
                <div className="d-flex flex-column">
                  <p>تمويل السيارات</p>
                  <p>تمويل النقل</p>
                  <p>تمويل تسويق</p>
                  <p>تمويل التعليم</p>
                  <p>تمويل اشتراكات الأندية</p>
                  <p>تمويل تصميم وتشطيب</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <h6
                  style={{ color: colors.blue }}
                  className="my-3 font-weight-bold"
                >
                  خدمات تمويلية
                </h6>
                <div className="d-flex flex-column">
                  <p>تمويل افراح و مناسبات</p>
                  <p>تمويل عقاري</p>
                  <p>وساطه تأمينية</p>
                  <p> تخصيم</p>
                  <p>تأجير تمويلي</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <h6
                  style={{ color: colors.blue }}
                  className="my-3 font-weight-bold"
                >
                  خدمات اخري
                </h6>
                <div className="d-flex flex-column">
                  <p>خدمات تأمينية</p>
                  <p>مدفوعات الكترونية</p>
                  <p>برنامج العملاء</p>
                  <p> استثمار و ادخار</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <h6
                  style={{ color: colors.blue }}
                  className="my-3 font-weight-bold"
                >
                  كونتكت
                </h6>
                <div className="d-flex flex-column">
                  <p>عن كونتكت</p>
                  <p>شركتنا</p>
                  <p>أخبار كونتكت</p>
                  <p>عروض كونتكت</p>
                  <p>المدونة</p>
                  <p> الأستدامة</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <h6
                  style={{ color: colors.blue }}
                  className="my-3 font-weight-bold"
                >
                  كونتكت
                </h6>
                <div className="d-flex flex-column">
                  <p>وظائفنا</p>
                  <p>كتالوج منتجات كونتكت</p>
                  <p>تواصل معنا</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <h6
                  style={{ color: colors.blue }}
                  className="my-3 font-weight-bold"
                >
                  السياسيات
                </h6>
                <div className="d-flex flex-column">
                  <p>سياسة الخصوصية</p>
                  <p>دليل حماية العملاء</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="con-download mt-4 mb-3">
          {/* <div className="d-flex justify-content-end align-items-end flex-column">  */}
          <div className="">
            <h4>حمل تطبيق كونتك</h4>
            <div className="image-container">
              <img
                src="/images/google-play.png"
                alt="حمل تطبيق كونتطت من المتجر"
              />
              <img
                className="mx-2"
                src="/images/app-store.png"
                alt="حمل تطبيق كونتطت من المتجر"
              />
            </div>
          </div>
          {/* <h4 className="m-left">حمل تطبيق كونتك</h4>
          <div className="image-container">
            <img
              width="150px"
              //   className="w-25"
              src="/images/app-store.png"
              alt="حمل تطبيق كونتطت من المتجر"
            />
            <img
              width="150px"
              className="mx-3"
              src="/images/google-play.png"
              alt="حمل تطبيق كونتطت من المتجر"
            />
          </div> */}
        </div>
        <img
          className="w-100 line-con"
          src="/images/line.png"
          alt="contact-line"
        />
        <div className="footer-copyrighter mt-3">
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                sm: "space-between",
                xs: "end",
              },

              flexDirection: {
                sm: "row",
                xs: "column",
              },
            }}
          >
            <Box className="social-link">
              <LinkedInIcon className="mx-2" />
              <TwitterIcon className="mx-2" />
              <YouTubeIcon className="mx-2" />
              <InstagramIcon className="mx-2" />
              <FacebookOutlinedIcon className="mx-2" />
            </Box>
            <Box className="cp-righter">
              <Box>
                <img
                  width="100px"
                  className="d-inline-block"
                  style={{ marginTop: "-30px" }}
                  src="/images/Award-Logo.png"
                  alt="جائزة"
                />
                <p>جميع الحقوق محفوظة 2021 لكونتكت</p>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}
