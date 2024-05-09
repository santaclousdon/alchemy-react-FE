import Header from "../components/Header/Header";
import "../assets/css/homeTwo.css";
import ToolBox from "../components/ToolBox/ToolBox";

export default function HomeTwo() {
  return (
    <div className="home-two-container">
      <div className="home-two">
        <Header
          header="ALCHEMY"
          subheader="Decentralized Autonomous Organizations On Runes Protocol"
          activeState={1}
        >
          Decentralized Autonomous Organizations (DAO) are the cornerstone of
          trustless engagement and operation on the Blockchain. With DAO’s, we
          are able to create symbiotic self funded financial ecosystems that
          operate with mutual goals to achieve what was once impossible
          yesterday, today...
        </Header>
        <div className="home-two-content">
          <div className="home-two-overview">
            <div className="home-two-overview-header">PROJECT OVERVIEW</div>
            <div className="home-two-overview-content">
              Alchemy is a DAO Creation/Management Platform built on Runes
              Protocol. It delivers a unique set of tooling for web3 communities
              to harness the financial force and motivations behind their
              holders. These tools include...
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
          <div className="home-two-business">
            <div className="home-two-services-title">BUSINESS MODEL</div>
            <div className="home-two-business-content">
              <div className="home-two-business-fees-container">
                <div className="home-two-business-fees">
                  <div className="home-two-business-content-title">FEES</div>
                  <div className="home-two-business-content-content">
                    Users pay a fee to create their DAO, and we charge and
                    additional fee per transaction on Alchemy.
                  </div>
                  <img
                    className="fees-line-up"
                    src="/assets/images/line-up.png"
                    alt="line-up"
                  />
                  <img
                    className="fees-line-down"
                    src="/assets/images/line-down.png"
                    alt="line-down"
                  />
                </div>
              </div>

              <img
                className="business-line-between"
                src="/assets/images/line-between.png"
                alt="line-between"
              />
              <div className="home-two-business-runes-container">
                <div className="home-two-business-runes">
                  <div className="home-two-business-content-title">RUNES</div>
                  <div className="home-two-business-content-content">
                    Alchemy Runes are distributed as rewards and offer primary
                    governance. Increasing token value.
                  </div>
                  <img
                    className="fees-line-up"
                    src="/assets/images/line-up.png"
                    alt="line-up"
                  />
                  <img
                    className="fees-line-down"
                    src="/assets/images/line-down.png"
                    alt="line-down"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-two-market">
            <div className="home-two-market-script">
              <div className="home-two-services-title">MARKET POTENTIAL</div>
              <div className="home-two-market-content">
                The current market size for Ordinals has peaked over $1 Billion.
                It is expected to exceed well over $4.5 Billion by 2025.
              </div>
              <div className="home-two-market-content">
                With decentralized finance expanding on Bitcoin, this also opens
                the doors for an added $1.28 Trillion in potential market size
                for DAOs on Bitcoin and Runes Protocol.
              </div>
            </div>
            <div className="home-two-market-graph">
              <img src="/assets/images/graph.png" alt="graph" />
            </div>
          </div>
          <div className="home-two-raise">
            <div className="home-two-services-title">PRE-SEED RAISE</div>
            <div className="home-two-raise-subtitle">
              We are currently raising for our Pre-Seed Round.
            </div>
            <div className="home-two-raise-express">
              <div className="home-two-raise-express-item">
                <div className="home-two-raise-express-title">Rounded Size</div>
                <div className="home-two-raise-express-content">$200k</div>
              </div>
              <div className="home-two-raise-express-item">
                <div className="home-two-raise-express-title">Available</div>
                <div className="home-two-raise-express-content">10%</div>
              </div>
              <div className="home-two-raise-express-item">
                <div className="home-two-raise-express-title">Valuation</div>
                <div className="home-two-raise-express-content">$2m</div>
              </div>
            </div>
            <div className="home-two-raise-content">
              <span>Agreement via SAFT</span>
              <span>10% Released at TGE</span>
              <span>12 Month Vest with 3 month Cliff</span>
            </div>
          </div>
          <div className="home-two-conclusion">
            <div className="home-two-services-title">CONCLUSION</div>
            <div className="home-two-sevices-content">
              Alchemy sets the stage for decentralized autonomous organizations
              to enter the spotlight on Runes Protocol. Providing an all in one
              suite of tools permitting anyone with minimal experience to create
              their very own trustless organization powered by Bitcoin and the
              Runes Protocol.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
