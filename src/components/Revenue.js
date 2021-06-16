import React from "react";
function Revenue() {
  return (
    <>
      <h4 className="ml-3 mt-2 ">Revenue Settings</h4>
      <section className="revenuesec">
        <div className="formdetail">
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Total Revenue
              <span className="asterisk">*</span>
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control"
                placeholder="Total Revenue"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Daily Rates
              <span className="asterisk">*</span>
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control"
                placeholder="Daily Rates"
              />
            </div>
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
        </div>
      </section>
      <hr />
    </>
  );
}
export default Revenue;
