import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { useHistory } from "react-router-dom";

import {
	ApplicationCardContainer,
	CaseName,
	ApplicationInfo,
	WithdrawButton,
	ApplicationStatus,
	StatusButton,
} from "./ApplicationCard.style";

const useStyles = makeStyles((theme) => ({
	stepper: {
		borderRadius: "1.5rem",
		marginBottom: "1.5rem",
		zIndex: "-1",
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	withdrawHidden: {
		visibility: "hidden",
	},
	withdrawnApplication: {
		backgroundColor: "lightgrey",
		opacity: "0.8",
	},
	withdrawnStepper: {
		borderRadius: "1.5rem",
		marginBottom: "1.5rem",
		backgroundColor: "lightgrey",
		opacity: "0.8",
	},
}));

const ApplicationCard = ({
	handleWithdraw,
	id,
	case_name,
	status_name,
	userEmail,
}) => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [userAction, setUserAction] = React.useState(false);
	const steps = ["Stage 1", "Stage 2", "Stage 3", "Stage 4"];
	const history = useHistory();

	const handleClick = (event) => {
		event.preventDefault();
		localStorage.setItem("case", case_name);
		localStorage.setItem("appId", id);
		localStorage.setItem("status", status_name);
		localStorage.setItem("email", userEmail);
		history.push("/addinfo");
	};

	React.useEffect(() => {
		const statusUpdater = () => {
			switch (status_name[0]) {
				case "Application submitted":
					setActiveStep(0);
					setUserAction(false);
					break;
				case "Criteria met":
					setActiveStep(1);
					setUserAction(true);
					break;
				case "Upload documents":
					setActiveStep(1);
					setUserAction(false);
					break;
				case "Success":
					setActiveStep(2);
					setUserAction(true);
					break;
				case "Invoice":
					setActiveStep(2);
					setUserAction(false);
					break;
				case "Successful close":
					setActiveStep(3);
					setUserAction(false);
					break;
				case "Unsuccessful close":
					setActiveStep(-1);
					setUserAction(false);
					break;
				case "Withdrawn":
					setActiveStep(-2);
					setUserAction(false);
					break;
				default:
					setActiveStep(-1);
			}
		};
		statusUpdater();
	}, [status_name]);

	return (
		<ApplicationCardContainer
			className={activeStep === -2 ? classes.withdrawnApplication : null}>
			<ApplicationInfo>
				<CaseName>{case_name}</CaseName>
				{activeStep === 0 && (
					<>
						<ApplicationStatus>Application under review</ApplicationStatus>
					</>
				)}

				{activeStep === 1 && userAction && (
					<>
						<StatusButton
							variant="contained"
							color="primary"
							id={id}
							onClick={handleClick}>
							Upload supporting documents
						</StatusButton>
					</>
				)}
				{activeStep === 1 && !userAction && (
					<>
						<ApplicationStatus>Documents under review</ApplicationStatus>
					</>
				)}
				{activeStep === 2 && userAction && (
					<>
						<StatusButton
							variant="contained"
							color="primary"
							onClick={handleClick}>
							Upload Invoice
						</StatusButton>
					</>
				)}
				{activeStep === 2 && !userAction && (
					<>
						<ApplicationStatus>Awaiting funding</ApplicationStatus>
					</>
				)}
				{activeStep === 3 && (
					<>
						<ApplicationStatus style={{ color: "#4BB543" }}>
							Application successful
						</ApplicationStatus>
					</>
				)}
				{activeStep === -1 && (
					<>
						<ApplicationStatus style={{ color: "#ff726f" }}>
							Application unsuccessful
						</ApplicationStatus>
					</>
				)}
				{activeStep === -2 && (
					<>
						<ApplicationStatus>Application withdrawn</ApplicationStatus>
					</>
				)}
				<WithdrawButton
					className={
						activeStep < 0 || activeStep === 3 ? classes.withdrawHidden : null
					}
					onClick={handleWithdraw}
					id={id}>
					Withdraw Case
				</WithdrawButton>
			</ApplicationInfo>
			<Stepper
				className={
					activeStep === -2 ? classes.withdrawnStepper : classes.stepper
				}
				activeStep={activeStep}
				alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</ApplicationCardContainer>
	);
};

export { ApplicationCard };
