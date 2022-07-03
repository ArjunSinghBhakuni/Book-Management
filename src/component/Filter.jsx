import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getBooks } from "../Redux/AppReducer/action";

const Filter = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");

  const urlSort = searchParams.get("sortby");

  const [category, setCategory] = useState(urlCategory || []);
  const [sortby, setSortby] = useState(urlSort || "");

  const handleChangle = (e) => {
    const option = e.target.value;
    // if the option is already present then remove it, else add it.

    let newCategory = [...category];

    if (category.includes(option)) {
      //remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  //console.log(category)

  const handleSort = (e) => {
    setSortby(e.target.value);
  };

  useEffect(() => {
    if (category || sortby) {
      let params ={}
      category && (params.category = category)
      sortby && (params.sortby =sortby)
      setSearchParams(params);
    }
  }, [category, setSearchParams,sortby, dispatch]);
  

  // useEffect(() => {
  //   if (sortby) {
  //     const params = {
  //       category: searchParams.getAll("category"),
  //       sortby,
  //     };

  //     setSearchParams(params);
  //   }
  // }, [searchParams, setSearchParams, sortby, dispatch]);

  return (
    <div>
      <h3>Filters</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            defaultChecked={category.includes("Novel")}
            onChange={handleChangle}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Science_Fiction"
            defaultChecked={category.includes("Science_Fiction")}
            onChange={handleChangle}
          />
          <label>Science_Fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Thriller"
            defaultChecked={category.includes("Thriller")}
            onChange={handleChangle}
          />
          <label>Thriller</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motivational"
            defaultChecked={category.includes("Motivational")}
            onChange={handleChangle}
          />
          <label>Motivational</label>
        </div>
      </div>
      <h3>Sort</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          defaultChecked={sortby === "asc"}
          name="sort"
        />
        Ascending
        <input
          type="radio"
          value="desc"
          defaultChecked={sortby === "desc"}
          name="sort"
        />{" "}
        Dsecending
      </div>
    </div>
  );
};

export default Filter;
