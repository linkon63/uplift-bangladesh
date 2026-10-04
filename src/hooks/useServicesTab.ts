"use client";

import { useState, useCallback } from "react";
import { ServicesTabType } from "@/types";
import { SERVICES_DATA, FOCUS_AREAS_DATA } from "@/data";

export function useServicesTab(initialTab: ServicesTabType = "Tab 1") {
  const [activeTab, setActiveTab] = useState<ServicesTabType>(initialTab);

  const selectTab = useCallback((tab: ServicesTabType) => {
    setActiveTab(tab);
  }, []);

  const isTabActive = useCallback(
    (tab: ServicesTabType) => activeTab === tab,
    [activeTab]
  );

  return {
    activeTab,
    setActiveTab: selectTab,
    isTabActive,
    servicesCount: SERVICES_DATA.length,
    focusAreasCount: FOCUS_AREAS_DATA.length,
  };
}
