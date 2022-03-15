import React from "react";
import propTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 1) {
      setCategories((cats) => [inputValue, ...cats]);
    }

    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="searchContainer">
        <input
          className="search"
          type="text"
          name="search"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Add category"
        />
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: propTypes.func.isRequired,
};

export default AddCategory;
