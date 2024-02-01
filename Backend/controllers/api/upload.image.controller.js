const cloudinary  = require("../../config/cloudinary.config");

async function uploadImage(request, response) {
    try {
        if (!request.file) {
            return response.status(400).json({ error: "No image provided" });
        }

        const fileBuffer = request.file.buffer;


        await cloudinary.uploader.upload_stream(
            { resource_type: 'auto', folder: "Mobile" },
            (error, result) => {
                if (error) {
                    return response.status(500).json({ error: 'Error uploading image to Cloudinary' });
                }
                response.status(200).json({ message: 'Image uploaded successfully', result });
            }
        ).end(fileBuffer);

    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    uploadImage: uploadImage,
};
