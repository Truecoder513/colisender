import { useState } from "react";

/* eslint-disable react/prop-types */
const TabsContainer = ({ headers, contents, topStyle }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <div className="tabs-switcher" style={topStyle ? topStyle : {}}>
        {headers.map((item, index) => (
          <label
            style={topStyle ? { border: "none" } : {}}
            key={item + index}
            onClick={() => setCurrentTab(index)}
            className={`${currentTab === index ? "tab-active" : ""}`}
          >
            {item}
          </label>
        ))}
      </div>
      <div>{contents[currentTab]}</div>
    </>
  );
};

export default TabsContainer;
