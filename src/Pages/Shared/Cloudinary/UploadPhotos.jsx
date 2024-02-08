import axios from "axios";

export const UploadPhotos = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "bistro_boss");
  formData.append("cloud_name", "dxixdugif");
  formData.append("folder", "bistro-boss");

  try {
    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/dxixdugif/image/upload",
      formData
    );

    // console.log(data);

    return { img: data?.secure_url };
  } catch (error) {
    console.error("Error uploading photo to Cloudinary", error);
    throw error;
  }
};
