import React from "react";

const AddingForm = () => {
  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <input type="text" placeholder="Add your expense" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Add Amount" />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddingForm;
