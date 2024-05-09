import "../../assets/css/stakingBox.css";

export default function StakingBox({ held, rewardRate, tvl, eraned }) {
  return (
    <div className="stakingBox-container">
      <div className="stakingBox-symbol">
        <div className="stakingBox-symbol-btc">
          <img src="/assets/images/btc.png" alt="btc" />
        </div>
        <div className="stakingBox-symbol-rune">
          <img src="/assets/images/rune.png" alt="rune" />
        </div>
      </div>
      <div className="stakingBox-title">RUNIES•BIGGERS</div>
      <div className="stakingBox-content">
        <div className="stakingBox-content-item">
          <span>Held</span>
          <span>{held}</span>
        </div>
        <div className="stakingBox-content-item">
          <span>Rewar rate</span>
          <span>{rewardRate}</span>
        </div>
        <div className="stakingBox-content-item">
          <span>TVL</span>
          <span>{tvl}</span>
        </div>
        <div className="stakingBox-content-item">
          <span>Eraned</span>
          <span>{eraned}</span>
        </div>
      </div>
      <div className="stakingBox-buttons">
        <button className="stakingBox-button">
          <img src="/assets/images/wallet.png" alt="wallet" />
          <span>connect wallet</span>
        </button>
        <button className="stakingBox-button">
          <img src="/assets/images/collect.png" alt="collect" />
          <span>collect</span>
        </button>
      </div>
    </div>
  );
}
