import React from "react";
function Form() {
  return (
    <>
      <div className="formdetail">
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Website
            <span className="asterisk">*</span>
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              readonly
              class="form-control"
              placeholder="www.hyatt.com"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="Parent Hotel" class="col-sm-2 col-form-label">
            Parent Hotel
            <span className="asterisk">*</span>
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" placeholder="Hyatt" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="State" class="col-sm-2 col-form-label">
            State
            <span className="asterisk">*</span>
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" placeholder="California" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="City" class="col-sm-2 col-form-label">
            City
            <span className="asterisk">*</span>
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" placeholder="San Diego" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="Zipcode" class="col-sm-2 col-form-label">
            Zip Code
            <span className="asterisk">*</span>
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" placeholder="12345" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="description" class="col-sm-2 col-form-label">
            Description
            <span className="asterisk">*</span>
          </label>
          <div class="col-sm-10">
            <textarea
              class="form-control"
              rows="2"
              placeholder="test"
            ></textarea>
          </div>
        </div>
        <button type="submit" class="submit">
          Submit
        </button>
        <hr />
      </div>
    </>
  );
}
export default Form;
