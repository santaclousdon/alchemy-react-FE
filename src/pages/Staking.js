import Header from "../components/Header/Header";
import "../assets/css/staking.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StakingBox from "../components/StakingBox/StakingBox";

export default function Staking() {
  return (
    <div className="staking-container">
      <div className="staking">
        <Header
          header="STAKING"
          subheader="Start your staking now"
          imgName1="staking-one"
          imgName2="staking-two"
          imgName3="staking-three"
          activeState={2}
        >
          Alchemy will soon offer a set of magical tools for you to build and
          deploy your very own decentralized autonomous organizations (DAO)
          Runes Protocol…
        </Header>
        <div className="staking-content">
          <div className="staking-content-header">
            <div className="staking-content-search-container">
              <img src="/assets/images/search.png" alt="search" />
              <input className="staking-content-search" placeholder="Search" />
            </div>
            <div className="staking-content-item">
              <img src="/assets/images/Bars.png" alt="bars" />
              <span>Sort by</span>
            </div>
            <div className="staking-content-item">
              <img src="/assets/images/arrow-down.png" alt="arrow-down" />
              <span>Amount held</span>
            </div>
            <div className="staking-content-item">
              <img src="/assets/images/arrow-up.png" alt="arrow-up" />
              <span>Reward Rate</span>
            </div>
            <div className="staking-content-item">
              <img src="/assets/images/arrow-up.png" alt="arrow-up" />
              <span>TVL</span>
            </div>
          </div>
          <div className="staking-content-content">
            <StakingBox held="22" rewardRate="5%" tvl="$12.44B" eraned="24" />
            <StakingBox held="22" rewardRate="5%" tvl="$12.44B" eraned="24" />
            <StakingBox held="22" rewardRate="5%" tvl="$12.44B" eraned="24" />
            <StakingBox held="22" rewardRate="5%" tvl="$12.44B" eraned="24" />
            <StakingBox held="22" rewardRate="5%" tvl="$12.44B" eraned="24" />
            <StakingBox held="22" rewardRate="5%" tvl="$12.44B" eraned="24" />
          </div>
        </div>
      </div>
    </div>
  );
}
