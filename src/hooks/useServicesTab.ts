"use client";

import { useState, useCallback, useEffect } from "react";
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

  useEffect(() => {
    const handleSelectTab = (e: Event) => {
      const customEvent = e as CustomEvent<ServicesTabType>;
      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
      }
    };
    window.addEventListener("selectServicesTab", handleSelectTab);
    return () => window.removeEventListener("selectServicesTab", handleSelectTab);
  }, []);

  return {
    activeTab,
    setActiveTab: selectTab,
    isTabActive,
    servicesCount: SERVICES_DATA.length,
    focusAreasCount: FOCUS_AREAS_DATA.length,
  };
}
