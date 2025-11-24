"use client";

import PriceListForm from "@/common/PriceListForm";
import React, { createContext, ReactNode, useContext, useState } from "react";

type PriceListFormContextValue = {
	openForm: () => void;
	closeForm: () => void;
};

const PriceListFormContext = createContext<PriceListFormContextValue | undefined>(undefined);

export const PriceListFormProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openForm = () => setIsOpen(true);
	const closeForm = () => setIsOpen(false);

	return (
		<PriceListFormContext.Provider value={{ openForm, closeForm }}>
			{children}
			<PriceListForm open={isOpen} onClose={closeForm} />
		</PriceListFormContext.Provider>
	);
};

export const usePriceListForm = () => {
	const context = useContext(PriceListFormContext);
	if (!context) {
		throw new Error("usePriceListForm must be used within a PriceListFormProvider");
	}
	return context;
};

