import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./Experience.css";

const openUrl = (type) => {
    let url;
    if (type === 'cgust')
        url = 'https://english.cgust.edu.tw';
    else if (type === 'cgu')
        url = 'https://www.cgu.edu.tw/en';
    else if (type === 'sinica')
        url = 'https://www.sinica.edu.tw/en';
    window.open(url);
};

const Experience = () => {
  return (
    <>
      <h3>Experience</h3>
      <div className="exp-section" onClick={() => openUrl('cgust')}>
        <div className="exp-left">
          <h5>Feb 2022 - Oct 2022</h5>
        </div>
        <div className="exp-right">
          <h5>Linebot Developer</h5>
          <h5 className="company-name">Chang Gung University Of Science And Technology, Taiwan</h5>
          <p>
            Developed Linebots using the LINE API SDKs, including profile page,
            patient list, Scale form, handbook of dementia care, viewing
            patient&#39;s record and exporting patient&#39;s history report in
            Excel format.
          </p>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 1 }}
            flexWrap="wrap"
            useFlexGap
          >
            <Chip label="Python"/>
            <Chip label="Amazon EC2"/>
            <Chip label="Line"/>
          </Stack>
        </div>
      </div>

      <div className="exp-section" onClick={() => openUrl('cgu')}>
        <div className="exp-left">
          <h5>Sep 2021 - Sep 2022</h5>
        </div>
        <div className="exp-right">
          <h5>Python Teaching Assistant</h5>
          <h5 className="company-name">Chang Gung University, Taiwan</h5>
          <p>
            Tutored 30+ students in learning Python from scratch, providing
            guidance on fundamental concepts and empowered them to extract
            information from websites they are interested in.
          </p>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 1 }}
            flexWrap="wrap"
            useFlexGap
          >
            <Chip label="Python"/>
            <Chip label="BeautifulSoup"/>
          </Stack>
        </div>
      </div>

      <div className="exp-section" onClick={() => openUrl('sinica')}>
        <div className="exp-left">
          <h5>Sep 2021 - Sep 2022</h5>
        </div>
        <div className="exp-right">
          <h5>Internship</h5>
          <h5 className="company-name">Academia Sinica, Taiwan</h5>
          <p>
            Collected and reformatted 10,000+ terms of Taigi corpus database and
            utilised PyTorch to train open-sourced text-to-speech (TTS) models
            for Taigi, enhancing the availability of TTS resources for Taiwanese
            speakers.
          </p>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 1 }}
            flexWrap="wrap"
            useFlexGap
          >
            <Chip label="Python"/>
            <Chip label="Pytorch"/>
            <Chip label="Tacotron"/>
            <Chip label="Tacotron2"/>
            <Chip label="SQL"/>
            <Chip label="MySQL"/>
            <Chip label="Machine Learning"/>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Experience;
