import React from "react";

import { colors } from "../../utils/const";
import { styles } from "./footer_style";
import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

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
                  <ul className="list-unstyled">
                    <li className="mt-4" style={styles.listTitle}>
                      تمويل السيارات
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      تمويل النقل
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      تمويل تسويق
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      تمويل التعليم
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      تمويل اشتراكات الأندية
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      تمويل تصميم وتشطيب
                    </li>
                  </ul>
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
                  <ul className="list-unstyled">
                    <li className="mt-4" style={styles.listTitle}>
                      تمويل افراح و مناسبات
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      تمويل عقاري
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      وساطة تأمينية
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      تخصيم
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      تأجير تمويلي
                    </li>
                  </ul>
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
                  <ul className="list-unstyled">
                    <li className="mt-4" style={styles.listTitle}>
                      خدمات تأمينية
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      مدفوعات الكترونية
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      برنامج العملاء
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      استثمار و ادخار
                    </li>
                  </ul>
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
                  <ul className="list-unstyled">
                    <li className="mt-4" style={styles.listTitle}>
                      عن كونتكت
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      شركتنا
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      أخبار كونتكت
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      عروض كونتكت
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      المدونة
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      الأستدامة
                    </li>
                  </ul>
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
                  <ul className="list-unstyled">
                    <li className="mt-4" style={styles.listTitle}>
                      وظائفنا
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      كتالوج منتجات كونتكت
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      تواصل معنا
                    </li>
                  </ul>
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
                  <ul className="list-unstyled">
                    <li className="mt-4" style={styles.listTitle}>
                      سياسة الخصوصية
                    </li>
                    <li className="mt-4" style={styles.listTitle}>
                      دليل حماية العملاء
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.conDownload} className="con-download mt-4 mb-3">
          <div className="">
            <h4 style={styles.downloadCo} className="mb-3">
              حمل تطبيق كونتك
            </h4>
            <div className="image-container">
              <img
                style={styles.coDownloadImg}
                src="/images/google-play.png"
                alt="حمل تطبيق كونتطت من المتجر"
              />
              <img
                style={styles.coDownloadImg}
                className="mx-4"
                src="/images/app-store.png"
                alt="حمل تطبيق كونتطت من المتجر"
              />
            </div>
          </div>
        </div>
        <img
          className="w-100 line-con"
          src="/images/line.png"
          alt="contact-line"
        />
        <div className="footer-copyrighter mt-3">
          <Box sx={styles.footerBox}>
            <Box
              className="social-link"
              style={
                {
                  // display: window.innerWidth <= 600 ? "flex" : "",
                  // margin: window.innerWidth <= 600 ? "auto" : "",
                  // order: window.innerWidth <= 600 ? 2 : "",
                }
              }
            >
              <LinkedInIcon style={{ color: colors.blue }} className="mx-1" />
              <TwitterIcon style={{ color: colors.blue }} className="mx-1" />
              <YouTubeIcon style={{ color: colors.blue }} className="mx-1" />
              <InstagramIcon style={{ color: colors.blue }} className="mx-1" />
              <FacebookOutlinedIcon
                style={{ color: colors.blue }}
                className="mx-1"
              />
            </Box>
            <div className="cp-righter">
              <Box>
                <span className="text-center">
                  جميع الحقوق محفوظة 2021 لكونتكت
                </span>
                <img
                  width="100px"
                  style={{
                    position: "relative",
                    top: {
                      sm: "60px",
                    },
                  }}
                  // style={styles.imageQ}
                  src="/images/Award-Logo.png"
                  alt="جائزة"
                />
              </Box>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
