import React from "react";
import Form from "./Form";

function Setting() {
  return (
    <>
      <div className="button-grp">
        <button class="button btn1">Hotel Settings</button>
        <button class="button">Profile Settings</button>
        <button class="button">Features Settings</button>
        <button class="button">Gallery Settings</button>
        <button class="button">Contact Settings</button>
        <button class="button">General Settings</button>
        <button class="button">Password Update</button>
      </div>
      <hr />
      <section className="form">
        <Form></Form>
      </section>
    </>
  );
}
export default Setting;
