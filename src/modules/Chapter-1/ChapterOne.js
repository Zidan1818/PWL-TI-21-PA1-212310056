import React, { Component } from "react";
import MessegersUI from "../modules/widgets/messagers/component/MessagersUI";
export default class ChapterOne extends Component {
  render() {
    return (
      <div>
        <h1 className="text-dark mb-5">Chapter one: The messengers</h1>
        <MessegersUI />
      </div>
    );
  }
}
