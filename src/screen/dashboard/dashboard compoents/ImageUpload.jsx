import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FirebaseStorage } from "../../../components/context/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import ref, uploadBytes, and getDownloadURL from firebase storage
import { useState } from "react";
const ImageUpload = ({ setCurrentTab }) => {
  const [fieldValue, setFieldValue] = useState("");
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
      .test("unique", "Each image should be unique", function (value) {
        let isUnique = true;
        if (this.parent.images) {
          const imageNames = this.parent.images.map((img) => img && img.name);
          isUnique = new Set(imageNames).size === imageNames.length;
        }
        return isUnique;
      })
      .min(1, "Please upload at least 6 images"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const imageUrls = [];

      // Upload each image to Firebase storage and get the download URL
      for (const image of values.images) {
        const storageRef = ref(FirebaseStorage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        imageUrls.push(downloadURL); // Store the download URL
      }

      // Update form values with image URLs
      setFieldValue("imageUrls", imageUrls);
      // console.log("Image URLs:", imageUrls);
      console.log("Image URLs:", fieldValue);

      // Handle success or navigate to the next step
      console.log("Images uploaded successfully!");
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setSubmitting(false);
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
            <div className="grid gap-4 px-4 mb-6 md:grid-cols-2 lg:grid-cols-3">
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
                      className="max-w-xs my-2 max-h-xs"
                    />
                  )}
                  <ErrorMessage
                    name={`images.${index}`}
                    component="div"
                    className="mt-6 text-red-500 bg-gray-800"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 px-4">
              <button
                onClick={() => setCurrentTab(0)}
                className="px-4 py-2 text-white rounded-md bg-primary hover:bg-indigo-700"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentTab(2)}
                className="px-4 py-2 text-white rounded-md bg-tr hover:bg-indigo-700 bg-primary "
              >
                Next
              </button>
              {/* <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                {isSubmitting ? "Uploading..." : "Upload Images"}
              </button> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ImageUpload;
