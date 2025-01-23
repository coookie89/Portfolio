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
      <div className="card-list">
        <div className="proj-section card card-color">
          <div>AnyParking</div>
          <p>
            The <b>Car Space Renting Management System</b> connects parking
            suppliers and customers. <b>Providers</b> can offer spots and
            establish fees, while&nbsp;
            <b>customers</b> can browse, reserve, and pay for parking. The
            system provides security through user roles (admin, supplier, and
            consumer) and contains capabilities for billing, payment, and
            feedback. This platform intends to <b>maximise parking space use</b>
            , improve urban mobility, and alleviate parking stress.
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

        <div
          className="proj-section card card-color"
          onClick={() => openUrl("LmTraceMap")}
        >
          <div>LmTraceMap</div>
          <p>
            A <b>global tracking website</b> specifically designed for experts
            to <b>monitor the spread of L.monocytogenes</b>, a challenging
            bacterium to track due to its presence in food shipments worldwide.
            The platform{" "}
            <b>aims to facilitate comprehensive monitoring and data sharing</b>,
            enabling experts from different regions to collaborate effectively
            in tracking L.monocytogenes outbreaks.
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
      </div>
    </>
  );
};

export default Projects;
