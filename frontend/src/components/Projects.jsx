import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Microlink from '@microlink/react'
import './Projects.css';

const Projects = () => {
    
    return (
        <div className='projects-container'>
            <div className='section'>
                <div className='url-preview-section'>
                    <Microlink
                        url=""
                        media="logo"
                        size="large"
                        fetchData
                    />
                </div>
                <div className='text-section'>
                    <h5>AnyParking</h5>
                    <p>
                    The Car Space Renting Management System connects parking suppliers and customers.
                    Providers can offer spots and establish fees, while customers can browse, reserve, and pay for parking.
                    The system provides security through user roles (admin, supplier, and consumer) and contains capabili- ties for billing, payment, and feedback.
                    This platform intends to maximise parking space use, improve urban mobility, and alleviate parking stress.
                    </p>
                    <Stack direction="row" spacing={1}>
                        <Chip
                            label="React"
                            variant="outlined"
                        />
                        <Chip
                            label="Django"
                            variant="outlined"
                        />
                        <Chip
                            label="Python"
                            variant="outlined"
                        />
                        <Chip
                            label="SQLite"
                            variant="outlined"
                        />
                        <Chip
                            label="Postman"
                            variant="outlined"
                        />
                    </Stack>
                </div>
            </div>

            <div className='section'>
                <div className='url-preview-section'>
                    <Microlink
                        url="http://lmtracemap.cgu.edu.tw/hua_map/test/upload.php"
                        media="logo"
                        size="large"
                        fetchData
                    />
                </div>
                <div className='text-section'>
                    <h5>LmTraceMap</h5>
                    <p>
                    A global tracking website specifically designed for experts to monitor the spread of L.monocytogenes,
                    a challenging bacterium to track due to its presence in food shipments worldwide.
                    The platform aims to facilitate comprehensive monitoring and data sharing,
                    enabling experts from different regions to collaborate effectively in tracking L.monocytogenes outbreaks.
                    </p>
                    <Stack direction="row" spacing={1}>
                        <Chip
                            label="VanillaJS"
                            variant="outlined"
                        />
                        <Chip
                            label="Python"
                            variant="outlined"
                        />
                        <Chip
                            label="php"
                            variant="outlined"
                        />
                        <Chip
                            label="HTML"
                            variant="outlined"
                        />
                        <Chip
                            label="CSS"
                            variant="outlined"
                        />
                        <Chip
                            label="MySQL"
                            variant="outlined"
                        />
                        
                    </Stack>
                </div>
            </div>

            
        </div>
    )
}

export default Projects;
