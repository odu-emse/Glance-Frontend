// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const module = {
    name: "Operations Research",
    sections: [
        {
            name: "Sensitivity Analysis for Linear Programs",
            type: "video",
            content: {
                url: "http://localhost:3000/videos/video1.mp4"
            }
        }
    ]
}

export default async function handler(req, res) {
    res.status(200).json(module);
}
