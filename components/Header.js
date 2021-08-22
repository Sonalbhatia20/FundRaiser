import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a
          className="item"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor: "#6699CC",
            color: "white",
          }}
        >
          FundRaiser
        </a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a
            className="item"
            style={{
              fontSize: "15px",
            }}
          >
            Campaigns
          </a>
        </Link>

        <Link route="/campaigns/new">
          <a
            className="item"
            style={{
              fontSize: "15px",
            }}
          >
            +
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
