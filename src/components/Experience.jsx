import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const openUrl = (type) => {
  let url;
  if (type === "cgust") url = "https://english.cgust.edu.tw";
  else if (type === "cgu") url = "https://www.cgu.edu.tw/en";
  else if (type === "sinica") url = "https://www.sinica.edu.tw/en";
  else if (type === "pica") url = "https://picagroup.com.au";
  window.open(url);
};

const Experience = () => {
  return (
    <>
      <h2>Experience</h2>
      <div className="card-list">
        <div
          className="exp-section card flexbox card-color"
          onClick={() => openUrl("pica")}
        >
          <div className="left">
            <span>Feb 2022 - Present</span>
          </div>
          <div className="right">
            <div className="card-title">
              <span>Digital Marketing Coordinator</span> · <span>PICA Group, Australia</span>
            </div>
            <p className="mt-4">
              Digitalized physical forms to streamline workflows. Extracted and
              processed customer information from various data sources for
              newsletters.
            </p>
            <div className="mt-4">
              <Stack
                direction="row"
                spacing={{ xs: 0.5, sm: 0.5 }}
                flexWrap="wrap"
                useFlexGap
              >
                <Chip label="WordPress" />
                <Chip label="GravityForms" />
                <Chip label="Power Automate" />
                <Chip label="Power Apps" />
                <Chip label="PowerBI" />
                <Chip label="Python" />
                <Chip label="Regex" />
                <Chip label="Salesforce" />
              </Stack>
            </div>
          </div>
        </div>

        <div
          className="exp-section card flexbox card-color"
          onClick={() => openUrl("cgust")}
        >
          <div className="left">Feb 2022 - Oct 2022</div>
          <div className="right">
            <div className="card-title">
              <span>Linebot Developer</span> · <span>CGUST, Taiwan</span>
            </div>
            <p className="mt-4">
              Developed Linebots using the <b>LINE API SDKs</b>, including
              profile page, patient list, Scale form, handbook of dementia care,
              viewing patient&#39;s record and exporting patient&#39;s history
              report in Excel format.
            </p>
            <div className="mt-4">
              <Stack
                direction="row"
                spacing={{ xs: 0.5, sm: 0.5 }}
                flexWrap="wrap"
                useFlexGap
              >
                <Chip label="Python" />
                <Chip label="Amazon EC2" />
                <Chip label="Line" />
              </Stack>
            </div>
          </div>
        </div>

        <div
          className="exp-section card flexbox card-color"
          onClick={() => openUrl("cgu")}
        >
          <div className="left">
            <div>Sep 2021 - Sep 2022</div>
          </div>
          <div className="right">
            <div className="card-title">
              <span>Python Teaching Assistant</span> · <span>CGU, Taiwan</span>
            </div>
            <p className="mt-4">
              Tutored 30+ students in <b>learning Python from scratch</b>,
              providing guidance on fundamental concepts and empowered them to{" "}
              <b>extract information from websites</b> they are interested in.
            </p>
            <div className="mt-4">
              <Stack
                direction="row"
                spacing={{ xs: 0.5, sm: 0.5 }}
                flexWrap="wrap"
                useFlexGap
              >
                <Chip label="Python" />
                <Chip label="BeautifulSoup" />
              </Stack>
            </div>
          </div>
        </div>

        <div
          className="exp-section card flexbox card-color"
          onClick={() => openUrl("sinica")}
        >
          <div className="left">
            <div>Sep 2021 - Sep 2022</div>
          </div>
          <div className="right">
            <div className="card-title">
              <span>Internship</span> · <span>Academia Sinica, Taiwan</span>
            </div>
            <p className="mt-4">
              Collected and reformatted 10,000+ terms of{" "}
              <b>Taigi corpus database</b> and utilised PyTorch to{" "}
              <b>train open-sourced text-to-speech (TTS) models</b>
              &nbsp;for Taigi, enhancing the availability of TTS resources for
              Taiwanese speakers.
            </p>
            <div className="mt-4">
              <Stack
                direction="row"
                spacing={{ xs: 0.5, sm: 0.5 }}
                flexWrap="wrap"
                useFlexGap
              >
                <Chip label="Python" />
                <Chip label="Pytorch" />
                <Chip label="Tacotron" />
                <Chip label="Tacotron2" />
                <Chip label="SQL" />
                <Chip label="MySQL" />
                <Chip label="Machine Learning" />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
