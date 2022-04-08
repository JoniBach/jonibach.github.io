import { BarContainer, Bar } from "./progressBar-style";
type BarTypes = {
  bar: any;
};
function ProgressBar({ bar }: BarTypes) {
  return (
    <BarContainer>
      <Bar animate={{ width: `${bar}%` }} />
    </BarContainer>
  );
}

export default ProgressBar;
