import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-white py-4 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="mb-2 flex flex-col items-center">
          <div className="flex flex-wrap justify-center max-w-4xl mx-auto">
            <div
              className="cursor-pointer px-2 md:px-4 mb-2 text-sm sm:text-base transition-colors duration-200 w-full sm:w-auto text-center"
              onClick={() =>
                navigate("/PrivacyPage", {
                  state: { activeTab: "privacyPolicyMembers" },
                })
              }
            >
              นโยบายความเป็นส่วนตัวสำหรับสมาชิก
            </div>
            <div
              className="cursor-pointer px-2 md:px-4 mb-2 text-sm sm:text-base transition-colors duration-200 w-full sm:w-auto text-center"
              onClick={() =>
                navigate("/PrivacyPage", {
                  state: { activeTab: "privacyPolicyCustomers" },
                })
              }
            >
              นโยบายความเป็นส่วนตัวสำหรับลูกค้า
            </div>
            <div
              className="cursor-pointer px-2 md:px-4 mb-2 text-sm sm:text-base transition-colors duration-200 w-full sm:w-auto text-center"
              onClick={() =>
                navigate("/PrivacyPage", {
                  state: { activeTab: "cookiePolicy" },
                })
              }
            >
              นโยบายเกี่ยวกับการใช้งาน Cookies
            </div>
            <div
              className="cursor-pointer px-2 md:px-4 mb-2 text-sm sm:text-base transition-colors duration-200 w-full sm:w-auto text-center"
              onClick={() =>
                navigate("/PrivacyPage", {
                  state: { activeTab: "companyPolicy" },
                })
              }
            >
              นโยบายบริษัท
            </div>
            <div
              className="cursor-pointer px-2 md:px-4 mb-2 text-sm sm:text-base transition-colors duration-200 w-full sm:w-auto text-center"
              onClick={() =>
                navigate("/PrivacyPage", {
                  state: { activeTab: "legalRightsPrivacy" },
                })
              }
            >
              ข้อกฎหมายและสิทธิส่วนบุคคล
            </div>
          </div>
        </div>

        <div className="text-center text-sm sm:text-base pt-1 border-t border-gray-100">
          <p className="m-0">
            © Copyright 2024. บริษัท ทศกัณฐ์ ดิจิตอล นิว เจนเนอเรชั่น จำกัด.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
