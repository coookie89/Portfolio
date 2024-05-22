import './Resume.css';

const Resume = () => {
    const pdfUrl = "../Resume_ChienHwaYang.pdf";
    
    return (
        <div className='resume-container'>
                <iframe src={pdfUrl} title='Resume.pdf'/>
        </div>
    )
}

export default Resume;
