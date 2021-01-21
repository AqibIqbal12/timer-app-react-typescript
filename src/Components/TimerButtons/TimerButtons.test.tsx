import React, { Children } from "react";
import { shallow, ShallowWrapper } from "enzyme";
import TimerButtons from "./TimerButtons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle } from '@fortawesome/free-solid-svg-icons';


describe("TimerButton", () => {
  let container: ShallowWrapper
  beforeEach(() => {
    container = shallow(
      <TimerButtons
        buttonAction={jest.fn()}
        buttonValue= {<FontAwesomeIcon icon={faPlayCircle}/>}
        title={''}
      />
    )
  })

  it("should render button", () => {
    expect(container.find("button").length).toBeGreaterThanOrEqual(1)
  })
  // it("button should call function", () => {
  //   expect(jest.fn()).toHaveBeenCalledTimes(0);

  //   container.find("button").simulate("click");

  //   expect(jest.fn()).toHaveBeenCalledTimes(1);
  // });
})