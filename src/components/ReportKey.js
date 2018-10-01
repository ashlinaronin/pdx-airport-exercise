import React from "react";
import "./ReportKey.css";

const ReportKey = () => (
  <div className="report-key">
    <div>
      <strong>Key:</strong>
    </div>
    <div className="report-key__type">
      <div className="report-key__block report-key__block--ac">
        <p>AC</p>
      </div>
      <div className="report-key__text">AC on at least once</div>
    </div>
    <div className="report-key__type">
      <div className="report-key__block report-key__block--heat">
        <p>Heat</p>
      </div>
      <div className="report-key__text">Heating on at least once</div>
    </div>
    <div className="report-key__type">
      <div className="report-key__block report-key__block--both">
        <p>Both</p>
      </div>
      <div className="report-key__text">
        Both heating and AC on at least once
      </div>
    </div>
  </div>
);

export default ReportKey;
