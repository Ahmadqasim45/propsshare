import React from "react";
import bgImg from "../../assets/images/roadmap-bg.png"; // Placeholder for the background image
import listImg from "../../assets/images/listitem.png"; // Placeholder for the tick icon
import roadMapBg from "../../assets/images/roadmap-combine.png"; // Placeholder for the roadmap 
import groupBg from "../../assets/images/group-bg.png"; // Placeholder for the group background image
// background image
const Roadmap = () => {
  return (
    <>
      <div
        className="min-h-screen py-12 text-white"
        style={{
          background: `url(${roadMapBg})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#070913",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 xl:px-12 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <div className="text-sm uppercase tracking-wider text-gray-400">
              OUR PLAN
            </div>
            <div className="text-2xl font-bold">ROADMAP</div>
          </div>

          {/* Roadmap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PRE-PHASE */}
            <div
              className=" rounded-3xl  p-6 relative overflow-hidden"
              style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="z-10 relative">
                <div className="inline-block px-6 py-1 border border-gray-700 rounded-full text-sm mb-6">
                  PRE-PHASE
                </div>
                <ul
                  className="space-y-2"
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5  rounded-sm flex items-center justify-center mr-3">
                      <img src={listImg} alt="listIcon" />
                    </div>
                    <span>Company set-up</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5  rounded-sm flex items-center justify-center mr-3">
                      {/* <img src="" alt="" /> */}
                      <img src={listImg} alt="listIcon" />
                    </div>
                    <span>Legal considerations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5  rounded-sm flex items-center justify-center mr-3">
                      <img src={listImg} alt="listIcon" />
                    </div>
                    <span>Regulatory framework</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5  rounded-sm flex items-center justify-center mr-3">
                      <img src={listImg} alt="listIcon" />
                    </div>
                    <span>Staff onboarding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="ml-8">
                      Market considerations & property identification
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="ml-8">
                      Investor development and offer awareness
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="ml-8">Technical development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="ml-8">Token launch & growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="ml-8">Develop partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="ml-8">Community building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="ml-8">Launch website</span>
                  </li>
                </ul>
              </div>
              {/* Background grid pattern */}
            </div>

            {/* Middle Column - Q1 2026 and Q3 2027 */}
            <div className="space-y-6">
              {/* Q1 2026 */}
              <div
                className=" rounded-3xl border border-purple p-6 relative overflow-hidden"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <div className="z-10 relative">
                  <div className="inline-block px-6 py-1 border border-gray-700 rounded-full text-sm mb-6">
                    Q1 2026
                  </div>
                  <ul
                    className="space-y-2 "
                    style={{ fontSize: "10px", fontWeight: 500 }}
                  >
                    <li>Initial platform deployment with core functionality</li>
                    <li>First 5-10 properties available for investment</li>
                    <li>Essential educational resources</li>
                    <li>Basic secondary marketplace</li>
                    <li>Implement secure payment processing</li>
                    <li>Implement core investment functionality</li>
                    <li>Develop basic portfolio dashboard</li>
                  </ul>
                </div>
                {/* Background grid pattern */}
              </div>

              {/* Q3 2027 */}
              <div
                className=" rounded-3xl border border-purple p-6 relative overflow-hidden"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  paddingBottom: "3.8rem",
                }}
              >
                <div className="z-10 relative">
                  <div className="inline-block px-6 py-1 border border-gray-700 rounded-full text-sm mb-6">
                    Q3 2027
                  </div>
                  <ul
                    className="space-y-2 "
                    style={{ fontSize: "10px", fontWeight: 500 }}
                  >
                    <li>
                      DAO governance implementation for property decisions
                    </li>
                    <li>Property development opportunities</li>
                    <li>
                      Expanded property offerings across UK - diversification
                    </li>
                    <li>Institutional investment pooling & development</li>
                    <li>Begin planning for international expansion</li>
                    <li>Implement AI driven property recommendation engine</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Q3 2026 and 2028+ */}
            <div className="space-y-6">
              {/* Q3 2026 */}
              <div
                className=" rounded-3xl border border-purple p-6 relative overflow-hidden"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <div className="z-10 relative">
                  <div className="inline-block px-6 py-1 border border-gray-700 rounded-full text-sm mb-6">
                    Q3 2026
                  </div>
                  <ul
                    className="space-y-2 "
                    style={{ fontSize: "10px", fontWeight: 500 }}
                  >
                    <li>Mobile application launch</li>
                    <li>Advanced portfolio management tools</li>
                    <li>
                      Diversify property offerings across select few UK regions
                    </li>
                    <li>Add investment features</li>
                    <li>Enhanced secondary market functionality</li>
                    <li>Build API for third-party integration</li>
                    <li>Cross-chain compatibility</li>
                  </ul>
                </div>
                {/* Background grid pattern */}
              </div>

              {/* 2028+ */}
              <div
                className="rounded-3xl border border-purple p-6 relative overflow-hidden"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <div className="z-10 relative">
                  <div className="inline-block px-6 py-1 border border-gray-700 rounded-full text-sm mb-6">
                    2028+
                  </div>
                  <ul
                    className="space-y-1 "
                    style={{ fontSize: "10px", fontWeight: 500 }}
                  >
                    <li>Institutional investment delivery</li>
                    <li>International property listings</li>
                    <li>Property-backed lending</li>
                    <li>Integration with other DeFi platforms</li>
                    <li>Advanced derivatives and financial products</li>
                    <li>White-label solutions for partners</li>
                    <li>Enhanced regulatory frameworks & compliance</li>
                    <li>Build marketplace for 3rd party services</li>
                    <li>Develop property management marketplace</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="extra-bg" >
        <img src={groupBg} alt="" />
      </div> */}
    </>
  );
};

export default Roadmap;
