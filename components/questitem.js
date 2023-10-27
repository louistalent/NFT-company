import LinearProgress from "@mui/material/LinearProgress";

export default function QuestItem({ title, description }) {
  return (
    <>
      <div className="quest-challange">
        <img src="/image/close.svg" width="7px" className="close" />
        <h5>{title}</h5>
        <span>{description}</span>
        <LinearProgress
          variant="determinate"
          value={55}
          className="questsidebar-progress"
        />
      </div>
    </>
  );
}
