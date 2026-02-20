import React from "react";
import MentorLayout from "../Components/MentorLayout";
import StudentsTable from "../Sections/MentorDashBoardSection/StudentsTable";
import CreateTask from "../Sections/MentorDashBoardSection/CreateTask";
import ReviweSubmission from "../Sections/MentorDashBoardSection/ReviweSubmission";

function MentorDashBoard() {
  return (
    <>
      <MentorLayout>
        <StudentsTable />
        <CreateTask />
        <ReviweSubmission />
      </MentorLayout>
    </>
  );
}

export default MentorDashBoard;
