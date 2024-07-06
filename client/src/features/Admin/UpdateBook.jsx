import {
  Card,
  Input,
  Typography,
  Select,
  Option,
  Button,
  Textarea,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useUpdateBook } from "../../Hooks/useAdmin";
import Loader from "../../ui/Loader";

const UpdateBook = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let book = location?.state;
  const [selectedCategory, setSelectedCategory] = useState(book?.genre || "");
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      bookName: book?.bookName || "",
      authorName: book?.authorName || "",
      //   category: book?.category || "",
      description: book?.description || "",
      price: book?.pricePerUnit || "",
      imageUrl: book?.bookImageUrl || "",
    },
  });

  useEffect(() => {
    if (book?.genre) {
      setSelectedCategory(book.genre);
      setValue("category", book.genre);
    }
  }, [book, setValue]);

  const { updateBook, isLoading } = useUpdateBook();

  const token = localStorage.getItem("token");

  function onSubmit({
    bookName,
    authorName,
    category,
    description,
    price,
    imageUrl,
  }) {
    const body = {
      bookName,
      authorName,
      genre: category,
      description,
      pricePerUnit: price,
      bookImageUrl: imageUrl,
    };
    updateBook(
      { token, body },
      {
        onSettled: () => {
          navigate("/admin/home");
        },
      }
    );
  }
  if (isLoading) return <Loader />;
  return (
    <div className=" w-full grid bg-gradient-to-br from-gray-500 to-white place-items-center object-cover py-8">
      <Card color="transparent" shadow={true} className="p-7 bg-white ">
        <Typography variant="h4" color="blue-gray">
          Add Book
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter the details of the book.
        </Typography>
        <br />
        <form
          className="mb-4 w-[500px] grid grid-cols-2 gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col-span-2">
            <Controller
              name="bookName"
              rules={{
                required: "Book name is required",
                minLength: {
                  value: 2,
                  message: "Minimum 2 characters required",
                },
              }}
              control={control}
              render={({ field }) => (
                <Input
                  size="lg"
                  {...field}
                  label="Book Name"
                  error={Boolean(errors?.bookName?.message)}
                />
              )}
            />
            {errors?.bookName?.message && (
              <span className="error-text">{errors?.bookName?.message}</span>
            )}
          </div>
          <div className="col-span-2">
            <Controller
              name="authorName"
              rules={{
                required: "Author name is required",
                minLength: {
                  value: 2,
                  message: "Minimum 2 characters required",
                },
              }}
              control={control}
              render={({ field }) => (
                <Input
                  size="lg"
                  {...field}
                  label="Author Name"
                  error={Boolean(errors?.authorName?.message)}
                />
              )}
            />
            {errors?.authorName?.message && (
              <span className="error-text">{errors?.authorName?.message}</span>
            )}
          </div>
          <div className="col-span-2">
            <Controller
              name="category"
              rules={{
                required: "Category is required",
              }}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  label="Category"
                  value={selectedCategory?.toLowerCase()}
                  onChange={(val) => {
                    setSelectedCategory(val);
                    field.onChange(val);
                  }}
                  error={Boolean(errors?.category?.message)}
                >
                  <Option value="finance">Finance</Option>
                  <Option value="thriller">Thriller</Option>
                  <Option value="horror">Horror</Option>
                  <Option value="romantic">Romantic</Option>
                  <Option value="fantasy">Fantasy</Option>
                  <Option value="scifi">Scifi</Option>
                  <Option value="adventure">Adventure</Option>
                  <Option value="autobiography">Autobiography</Option>
                </Select>
              )}
            />
            {errors?.category?.message && (
              <span className="error-text">{errors?.category?.message}</span>
            )}
          </div>
          <div className="col-span-2">
            <Controller
              name="description"
              rules={{
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 characters required",
                },
              }}
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  label="Description"
                  error={Boolean(errors?.description?.message)}
                />
              )}
            />
            {errors?.description?.message && (
              <span className="error-text">{errors?.description?.message}</span>
            )}
          </div>
          <div className="col-span-2">
            <Controller
              name="price"
              rules={{
                required: "Price is required",
                pattern: {
                  value: /^\d+(\.\d{1,2})?$/,
                  message: "Invalid price format",
                },
              }}
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  step="0.01"
                  size="lg"
                  label="Per Unit Price"
                  error={Boolean(errors?.price?.message)}
                />
              )}
            />
            {errors?.price?.message && (
              <span className="error-text">{errors?.price?.message}</span>
            )}
          </div>
          <div className="col-span-2">
            <Controller
              name="imageUrl"
              rules={{
                required: "Image URL is required",
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Invalid URL format",
                },
              }}
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  size="lg"
                  label="Book Image URL"
                  error={Boolean(errors?.imageUrl?.message)}
                />
              )}
            />
            {errors?.imageUrl?.message && (
              <span className="error-text">{errors?.imageUrl?.message}</span>
            )}
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-3">
            <Button
              type="reset"
              variant="outlined"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button type="submit">Update Book</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UpdateBook;
