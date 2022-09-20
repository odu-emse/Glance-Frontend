import VideoPlayer from "../VideoPlayer";

const PDFContent = ({ url }) => {
    return (
        <div className="flex flex-col w-3/4">
            <object data={url} type="application/pdf" className="w-full h-full">
                <a href={url} target="_blank">View this PDF in a new tab.</a>
            </object>
        </div>
    );
}

export default PDFContent;