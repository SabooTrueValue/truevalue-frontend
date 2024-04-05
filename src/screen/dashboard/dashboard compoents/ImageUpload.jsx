import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FirebaseStorage,
  FirebaseStore,
} from "../../../components/context/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import ref, uploadBytes, and getDownloadURL from firebase storage
import { useState } from "react";
import { useFormData } from "../../../components/Other/FormDataProvider";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-hot-toast";
import axios from "axios";

const ImageUpload = ({ setCurrentTab }) => {
  const { postVehicleData, setPostVehicleData } = useFormData();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    images: [],
    imageUrls: [], // Initialize imageUrls array
  };

  const validationSchema = Yup.object().shape({
    images: Yup.array()
      .required("Please upload at least 6 images")
      .of(
        Yup.mixed().test("fileSize", "File too large", (value) => {
          if (value) {
            return value.size <= 1024 * 1024 * 2; // 2MB file size limit
          }
          return true;
        })
        //   .test("imageSize", "Image dimensions too large", async (value) => {
        //     if (value) {
        //       const file = value;
        //       const img = new Image();
        //       img.src = URL.createObjectURL(file);
        //       await new Promise((resolve) => {
        //         img.onload = () => resolve(img);
        //       });
        //       return img.width <= 1000 && img.height <= 600; // Adjust dimensions as needed
        //     }
        //     return true;
        //   })
      )
      .test("unique", "Duplicate image uploading", function (value) {
        let isUnique = true;
        if (this.parent.images) {
          const imageNames = this.parent.images.map((img) => img && img.name);
          isUnique = new Set(imageNames).size === imageNames.length;
        }
        return isUnique;
      })
      .min(4, "Please upload at least 4 images"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      const imageUrls = [];
      // Append each file to the FormData object
      values.images.forEach((file, index) => {
        formData.append(`image${index + 1}`, file);
      });

      setLoading(true);

      // Send the FormData object containing the files
      const res = await axios.post(
        "http://localhost:3001/vehicle",
        // "https://true-value.onrender.com/vehicle",
        // formData,
        { ...postVehicleData, formData }
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        //   params: {
        //     ...postVehicleData,
        //   },
        // }
      );

      console.log("Response:", res.data);

      for (const image of values.images) {
        const storageRef = ref(
          FirebaseStorage,
          `images/${postVehicleData.registrationNo}/${image.name}`
        );
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        //console.log("Download URL:", downloadURL);
        imageUrls.push(downloadURL); // Store the download URL
      }
      console.log("Image URLs:", values.images);

      toast.success("Images uploaded successfully!");
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      // setPostVehicleData({
      //   ...postVehicleData,
      //   images: imageUrls,
      //   date: date.toDateString(),
      //   time: `${hours}:${minutes}:${seconds}`,
      //   timestamp: serverTimestamp(),
      // });
      //console.log("Post Vehicle Data:", postVehicleData);

      const docRef = await addDoc(
        collection(FirebaseStore, "postVehicleData"),
        {
          ...postVehicleData,
          images: imageUrls,
          date: date.toDateString(),
          time: `${hours}:${minutes}:${seconds}`,
          timestamp: serverTimestamp(),
        }
      );
      // Update form values with image URLs

      toast.success("Vehicle posted with ID: ", docRef.id);
      // setPostVehicleData({});
      setCurrentTab(0);
      localStorage.removeItem("postVehicleData");
      // Handle success or navigate to the next step
    } catch (error) {
      console.error("Error uploading images:", error);
      toast.error("Error uploading images");
      setLoading(false);
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form>
            <div className="grid gap-4 px-4 mb-6 font-sans md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="mb-4">
                  <label
                    htmlFor={`image-${index}`}
                    className="block font-medium text-gray-700"
                  >
                    Upload Image {index + 1}
                  </label>

                  <input
                    id={`image-${index}`}
                    name={`images.${index}`}
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue(
                        `images.${index}`,
                        event.currentTarget.files[0]
                      );
                    }}
                    className="block w-full px-2 py-1 mb-1 text-lg leading-relaxed border text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-2xl"
                  />
                  {values.images[index] && (
                    <img
                      src={URL.createObjectURL(values.images[index])}
                      alt={`Preview ${index + 1}`}
                      className="h-40 max-w-xs mx-auto my-2 max-h-xs"
                    />
                  )}
                  <ErrorMessage
                    name={`images`}
                    component={({ children }) => (
                      <div className="mt-2 text-sm text-red-500">
                        {children}
                      </div>
                    )}
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-4 px-4 lg:pt-2">
              {!loading && (
                <button
                  onClick={() => setCurrentTab(1)}
                  className="hover:text-white hover:bg-primary focus:ring focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-20 py-2.5 select-none border border-primary "
                >
                  Back
                </button>
              )}
              <button
                // onClick={() => setCurrentTab(2)}
                disabled={isSubmitting}
                type="submit"
                className="text-white bg-primary focus:ring focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 lg:px-20 py-2.5 select-none "
              >
                {loading ? "Posting.." : "Post Vehicle"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ImageUpload;
