import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "../css/InfoBox.css";

function InfoBox({ title, cases, total, isRed, active, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infobox ${active && "infobox--selected"} ${isRed && "infobox--red"}`}
    >
      <CardContent>
        <Typography className="infobox_title" color="textSecondary">
          {title}
        </Typography>

        <h2 className={`infobox_cases ${!isRed && 'infobox--recovered'}`}>{cases}</h2>

        <Typography className="infobox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
