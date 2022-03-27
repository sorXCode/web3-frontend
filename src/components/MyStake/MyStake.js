import clsx from "clsx";
import React from "react";
import Card from "./Card/Card";
import Styles from "./MyStake.module.css";

const MyStake = ({
  withdrawInput,
  stakeInput,
  onChangeInput,
  onClickStake,
  onClickWithdraw,
  rewardAmount,
  stakeAmount,
  connected,
  addressInput,
  onClickGetAddress,
  userTotal,
}) => {
  const { account, time, amount } = userTotal;
  return (
    <div className={Styles.root}>
      <h2 className={Styles.heading}>My stake</h2>

      <div className={Styles.stake_body}>
        <div className={Styles.card_container}>
          <Card cardKey="Total Staked" cardValue={stakeAmount} />
          <Card cardKey="Total Reward" cardValue={rewardAmount} />
        </div>
        <form onSubmit={onClickStake} className={Styles.form}>
          <input
            type="number"
            placeholder="Amount to stake"
            className={Styles.input}
            value={stakeInput}
            onChange={onChangeInput}
            id="stake"
          />
          <button
            type="submit"
            className={clsx({
              [Styles.stake_btn]: true,
              [Styles.btn_diabled]: !connected,
            })}
            disabled={!connected}
          >
            Stake
          </button>
        </form>

        <form onSubmit={onClickWithdraw} className={Styles.form}>
          <input
            type="number"
            placeholder="Amount to unstake"
            className={Styles.input}
            value={withdrawInput}
            onChange={onChangeInput}
            id="unstake"
          />
          <button
            type="submit"
            className={clsx({
              [Styles.unstake_btn]: true,
              [Styles.btn_diabled]: !connected,
            })}
            disabled={!connected}
          >
            Unstake
          </button>
        </form>

        <form onSubmit={onClickGetAddress} className={Styles.form}>
          <input
            type="text"
            placeholder="input an address"
            className={Styles.input}
            value={addressInput}
            onChange={onChangeInput}
            id="getAddress"
          />
          <button type="submit" className={Styles.getAddress_btn}>
            Get Stake
          </button>
        </form>
        <div className={Styles.user}>
          <p>Address:{account}</p>
          <p>Total Stake: {amount} </p>
          <p>Last Stake Time:{time}</p>
        </div>
      </div>
    </div>
  );
};

export default MyStake;
