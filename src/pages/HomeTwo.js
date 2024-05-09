import Header from "../components/Header/Header";
import "../assets/css/homeTwo.css";
import ToolBox from "../components/ToolBox/ToolBox";

export default function HomeTwo() {
  return (
    <div className="home-two">
      <Header
        header="ALCHEMY"
        subheader="Decentralized Autonomous Organizations On Runes Protocol"
        imgURL=""
        activeState={1}
      >
        Decentralized Autonomous Organizations (DAO) are the cornerstone of
        trustless engagement and operation on the Blockchain. With DAO’s, we are
        able to create symbiotic self funded financial ecosystems that operate
        with mutual goals to achieve what was once impossible yesterday,
        today...
      </Header>
      <div className="home-two-content">
        <div className="home-two-overview">
          <div className="home-two-overview-header">PROJECT OVERVIEW</div>
          <div className="home-two-overview-content">
            Alchemy is a DAO Creation/Management Platform built on Runes
            Protocol. It delivers a unique set of tooling for web3 communities
            to harness the financial force and motivations behind their holders.
            These tools include...
          </div>
        </div>
        <div className="home-two-services">
          <div className="home-two-services-title">TOOLS AND SERVICES</div>
          <div className="home-two-services-content">
            <div className="home-two-services-item">
              <ToolBox
                header1="DAO"
                header2="MANAGEMENT"
                text1="Create, Manage, and Grow your organization using pre"
                text2="made DAO Templates or start from scratch!"
              />
            </div>
            <div className="home-two-services-item">
              <ToolBox
                header1="MEMBERSHIP"
                header2="VOTING"
                text1="Members can create and vote
              on proposals to help enact
              change within their DAO and
              earn rewards."
                text2=""
              />
            </div>
            <div className="home-two-services-item">
              <ToolBox
                header1="CHECKS AND"
                header2="BALANCES"
                text1="Distribute power across your
              desired amount of governing
              bodies and establish who
              runs what!"
                text2=""
              />
            </div>
            <div className="home-two-services-item">
              <ToolBox
                header1="PRIVATE"
                header2="MEMBERSHIP"
                text1="Gatekeep access to your DAO
              by assigning specific Runes
              that are allowed to view and
              engage with your DAO."
                text2=""
              />
            </div>
            <div className="home-two-services-item">
              <ToolBox
                header1="TREASURY"
                header2="MANAGEMENT"
                text1="Give your membership full
              transparency by using our
              multi-sig wallets to host
              your DAOs Treasury."
                text2=""
              />
            </div>
            <div className="home-two-services-item">
              <ToolBox
                header1="NON-ESCROW"
                header2="STAKING"
                text1="Offer rewards in the form of
              your memberships Runes
              asset while preserving
              trustless culture online!"
                text2=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
