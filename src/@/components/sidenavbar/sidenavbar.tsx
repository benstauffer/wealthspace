import { useState } from 'react';

export default function SideNavBar() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        width: "250px",
        backgroundColor: "",
        borderRight: "1px solid #E9E9E7",
      }}
    >
      <button onClick={() => setActiveTab("tab1")}>Tab 1</button>
      <button onClick={() => setActiveTab("tab2")}>Tab 2</button>
      <button onClick={() => setActiveTab("tab3")}>Tab 3</button>
    </div>
  );
}