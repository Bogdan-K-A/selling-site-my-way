import React from "react";
import { Button } from "../ui-component/Button/Button";
import { MessageWrapper, StyledModal } from "./Modal.styled";
import { ModalBackdrop } from "./ModalBackdrop";

export const Modal = ({ closeModal }) => {
	return (
		<ModalBackdrop closeModal={closeModal}>
			<StyledModal
				onClick={(e) => e.stopPropagation()}
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.8,
					delay: 0.5,
					ease: [0, 0.71, 0.2, 1.01],
				}}>
				<h3>Success!</h3>
				<MessageWrapper>
					<p>Thank you for choosing to order a burger from us.</p>
				</MessageWrapper>
				<Button to="" padding="9px 32px" onClick={closeModal}>
					Close
				</Button>
			</StyledModal>
		</ModalBackdrop>
	);
};
