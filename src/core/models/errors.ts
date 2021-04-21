export interface IErrorForm {
  message: string;
  type: string;
}
export interface IWizardStep {
  title: string;
  Component: React.ReactElement;
  nameForm: string;
  nextStep?: () => void;
}
