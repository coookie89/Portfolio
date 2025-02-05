import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

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
      <div className="card-list" id="project">
        <div className="card card-color">
          <img src="./img/Preview/Notey.png" alt="preview" />
          <div className="card-title mt-4">Notey — Master Your Learning</div>
          <p className="mt-4">
            Ever finished reading a slide deck only to forget its content by the
            last page? Notey is here to help! By <b>generating mind maps</b>{" "}
            from uploaded slides, Notey provides an intuitive way to{" "}
            <b>revise and retain key information</b>, ensuring you never lose
            track of important details again.
          </p>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 1 }}
            flexWrap="wrap"
            useFlexGap
            className="mt-4"
          >
            <Chip label="React" />
            <Chip label="FastAPI" />
            <Chip label="Groq" />
          </Stack>
        </div>

        <div className="card card-color">
          <img src="./img/Preview/AnyParking.png" alt="preview" />
          <div className="card-title mt-4">AnyParking</div>
          <p className="mt-4">
            Finding parking shouldn't be a hassle. AnyParking connects space
            owners with drivers, making it easy to list, reserve, and pay for
            parking. With secure user roles, built-in billing, and feedback
            features, it helps <b>maximize space use</b>, <b>ease urban congestion</b>, and <b>reduce parking frustration</b>.
          </p>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 1 }}
            flexWrap="wrap"
            useFlexGap
            className="mt-4"
          >
            <Chip label="React" />
            <Chip label="Django" />
            <Chip label="SQLite" />
          </Stack>
        </div>

        <div className="card card-color" onClick={() => openUrl("LmTraceMap")}>
          <div className="card-title">LmTraceMap</div>
          <p className="mt-4">
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
            className="mt-4"
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
