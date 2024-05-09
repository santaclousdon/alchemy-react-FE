import Header from "../components/Header/Header";
import "../assets/css/homeOne.css";
import BigBox from "../components/BIgBox/BigBox";

export default function HomeOne() {
  return (
    <div className="home-one">
      <Header
        header="ALCHEMY"
        subheader="Decentralized Autonomous Organizations On Runes Protocol"
        imgURL=""
        activeState={0}
      >
        Decentralized Autonomous Organizations (DAO) are the cornerstone of
        trustless engagement and operation on the Blockchain. With DAO’s, we are
        able to create symbiotic self funded financial ecosystems that operate
        with mutual goals to achieve what was once impossible yesterday,
        today...
      </Header>
      <div className="home-one-content">
        <BigBox header="Create Your Organization" imgName="organization.png">
          Alchemy allows any Runes community to create a DAO with ease. All it
          takes is a bit of Bitcoin and your Xverse or Unisat wallet. Options
          are limitless with Alchemy, this means you are given a diverse range
          of features and plug-ins that help to make your DAO uniquely suited to
          meet the needs of your community.
        </BigBox>
        <BigBox header="Establish Your Membership" imgName="membership.png">
          Membership can be defined in a multitude of ways on Alchemy including
          designating specific Runes or Ordinals as Access Passes or Membership
          IDs before a person can access your DAO. Once your members are
          established, create Councils to help create checks and balances for
          your organization.
        </BigBox>
        <BigBox header="Issue Trustless Rewards" imgName="rewards.png">
          Alchemy delivers a truly trustless staking experience. Users are able
          to initiate non-escrow staking, meaning you retain ownership of your
          Runes at all times without needing to sacrifice security of your
          assets. Want to issue runes to your membership for holding and staying
          loyal? Do so by using our non-escrow staking service to get those
          rewards in your memberships wallets, trust free!
        </BigBox>
      </div>
    </div>
  );
}
