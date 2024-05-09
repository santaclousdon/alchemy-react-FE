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
            <ToolBox
              header1="DAO"
              header2="MANAGEMENT"
              text1="Create, Manage, and Grow your organization using pre"
              text2="made DAO Templates or start from scratch!"
              badge={0}
            />
            <ToolBox
              header1="MEMBERSHIP"
              header2="VOTING"
              text1="Members can create and vote
              on proposals to help enact
              change within their DAO and
              earn rewards."
              text2=""
              badge={0}
            />
            <ToolBox
              header1="CHECKS AND"
              header2="BALANCES"
              text1="Distribute power across your
              desired amount of governing
              bodies and establish who
              runs what!"
              text2=""
              badge={0}
            />
            <ToolBox
              header1="PRIVATE"
              header2="MEMBERSHIP"
              text1="Gatekeep access to your DAO
              by assigning specific Runes
              that are allowed to view and
              engage with your DAO."
              text2=""
              badge={0}
            />
            <ToolBox
              header1="TREASURY"
              header2="MANAGEMENT"
              text1="Give your membership full
              transparency by using our
              multi-sig wallets to host
              your DAOs Treasury."
              text2=""
              badge={0}
            />
            <ToolBox
              header1="NON-ESCROW"
              header2="STAKING"
              text1="Offer rewards in the form of
              your memberships Runes
              asset while preserving
              trustless culture online!"
              text2=""
              badge={0}
            />
          </div>
        </div>
        <div className="home-two-works">
          <div className="home-two-services-title">HOW IT WORKS</div>
          <div className="home-two-works-content">
            <ToolBox
              header1="CREATE YOUR"
              header2="DAO"
              text1="Using Xverse or Unisat, easily"
              text2="create your DAO with your
              desired membership rules."
              badge={1}
            />
            <ToolBox
              header1="ESTABLISH"
              header2="YOUR COUNCILS"
              text1="Create council groups to
              establish checks and balances"
              text2="for your DAO."
              badge={2}
            />
            <ToolBox
              header1="ISSUE"
              header2="REWARDS"
              text1="Distribute rewards in the form"
              badge={3}
              text2="of your communities Runes or
              submit a request for ours."
            />
            <ToolBox
              header1="GATHER"
              header2="VOTES"
              text1="Create Proposals and hear your"
              badge={4}
              text2="communities voice through
              voting."
            />
            <ToolBox
              header1="GENERATE"
              header2="REVENUE"
              text1="Earn revenue from your
              creations and distribute "
              text2="to"
              badge={5}
              text3="your membership."
            />
            <ToolBox
              header1="GROW YOUR"
              header2="DAO"
              text1="Offer tasks for your
              membership to complete,
              helping to grow DAO "
              badge={6}
              text2="interest."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
