import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./Experience.css";

const openUrl = (type) => {
  let url;
  if (type === "AnyParking") url = "";
  else if (type === "LmTraceMap")
    url = "http://lmtracemap.cgu.edu.tw/hua_map/test/upload.php";
  window.open(url);
};

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className="proj-section">
        <h4>AnyParking</h4>
        <p>
          The Car Space Renting Management System connects parking suppliers and
          customers. Providers can offer spots and establish fees, while
          customers can browse, reserve, and pay for parking. The system
          provides security through user roles (admin, supplier, and consumer)
          and contains capabili- ties for billing, payment, and feedback. This
          platform intends to maximise parking space use, improve urban
          mobility, and alleviate parking stress.
        </p>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 1 }}
          flexWrap="wrap"
          useFlexGap
        >
          <Chip label="React" />
          <Chip label="Django" />
          <Chip label="Python" />
          <Chip label="SQLite" />
          <Chip label="Postman" />
        </Stack>
      </div>

      <div className="proj-section" onClick={() => openUrl("LmTraceMap")}>
        <h4>LmTraceMap</h4>
        <p>
          A global tracking website specifically designed for experts to monitor
          the spread of L.monocytogenes, a challenging bacterium to track due to
          its presence in food shipments worldwide. The platform aims to
          facilitate comprehensive monitoring and data sharing, enabling experts
          from different regions to collaborate effectively in tracking
          L.monocytogenes outbreaks.
        </p>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 1 }}
          flexWrap="wrap"
          useFlexGap
        >
          <Chip label="VanillaJS" />
          <Chip label="Python" />
          <Chip label="php" />
          <Chip label="HTML" />
          <Chip label="CSS" />
          <Chip label="MySQL" />
        </Stack>
      </div>
    </>
  );
};

export default Projects;
