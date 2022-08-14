import React from "react";
import styled, { css } from "styled-components";

/**
 *
 * @returns const
 */

const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    left: 50%;
    width: calc(100% - 36px);
    transform: translate(-50%, 50%);
    background-color: #ffff;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    bottom: 0;
    .content-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      .card-user {
        display: flex;
        align-items: center;
        column-gap: 12px;
        img {
          width: 30px;
          height: 30px;
          border-radius: 100rem;
          object-fit: cover;
          flex-shrink: 0;
        }
        .card-name {
          font-weight: 300;
          font-size: 16px;
          color: #333;
        }
      }
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .card-title {
        color: ${(props) => props.theme.colors.blue};
        font-size: 18px;
        font-weight: 500;
      }
      .card-amount {
        font-size: ${(props) => props.fontSize || "18px"};
        font-weight: bold;

        ${(props) =>
          props.secondary &&
          css`
            background: linear-gradient(86.88deg, #20e3b2, #2cccff);
          `};

        ${(props) =>
          !props.secondary &&
          css`
            background: linear-gradient(
              86.88deg,
              #7d6aff 1.38%,
              #ffb86c 64.35%,
              #fc2872 119.91%
            );
          `};
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
      }
    }
  }
`;

const Card2 = (props) => {
  console.log(props);
  return (
    <StyledCard>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="content-top">
          <div className="card-user">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top"
              alt=""
            />
            <span className="card-name">@zndrson</span>
          </div>
          <div>256</div>
        </div>
        <div className="card-footer">
          <span className="card-title">Cosmic Perspetive</span>
          <p
            className="card-amount"
            secondary={props.secondary}
            fontSize="22px"
          >
            12,000 PSI
          </p>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;

// dribbble.com/rachel48
